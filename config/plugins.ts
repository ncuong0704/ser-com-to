export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    seo: {
        enabled: true,
    },
    'webp-converter': {
        enabled: true,
        config: {
            // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
            mimeTypes: undefined,
            options: {
                // WebP options: https://sharp.pixelplumbing.com/api-output#webp
            },
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
