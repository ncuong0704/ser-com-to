import type { Core } from '@strapi/strapi';

const PUBLIC_PERMISSIONS = [
  'api::address.address.find',
  'api::address.address.findOne',
  'api::order.order.create',
];

async function grantPublicPermissions(strapi: Core.Strapi) {
  try {
    const roleService = strapi.plugin('users-permissions').service('role');
    const permService = strapi.plugin('users-permissions').service('permission');

    const roles = await roleService.find();
    const publicRole = roles.find((r: { type: string }) => r.type === 'public');
    if (!publicRole) return;

    const existing = await permService.find({ filters: { role: { id: publicRole.id } } });
    const existingActions = new Set(existing.map((p: { action: string }) => p.action));

    for (const action of PUBLIC_PERMISSIONS) {
      if (!existingActions.has(action)) {
        await permService.create({ data: { action, role: publicRole.id } });
        strapi.log.info(`[bootstrap] Granted public permission: ${action}`);
      }
    }
  } catch (error) {
    strapi.log.warn('[bootstrap] Could not auto-grant public permissions:', error);
  }
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await grantPublicPermissions(strapi);
  },
};
