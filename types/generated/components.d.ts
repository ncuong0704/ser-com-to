import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsAddCheckboxList extends Struct.ComponentSchema {
  collectionName: 'components_elements_add_checkbox_lists';
  info: {
    displayName: 'Add Checkbox List';
  };
  attributes: {
    list: Schema.Attribute.Component<'elements.topping', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsAddRadioList extends Struct.ComponentSchema {
  collectionName: 'components_elements_add_radio_lists';
  info: {
    displayName: 'Add Radio List';
  };
  attributes: {
    list: Schema.Attribute.Component<'elements.topping', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsIconAndText extends Struct.ComponentSchema {
  collectionName: 'components_elements_icon_and_texts';
  info: {
    displayName: 'Icon and Text';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    scrollTo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    subName: Schema.Attribute.String;
  };
}

export interface ElementsSocial extends Struct.ComponentSchema {
  collectionName: 'components_elements_socials';
  info: {
    description: '';
    displayName: 'Social';
  };
  attributes: {
    logo: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTopping extends Struct.ComponentSchema {
  collectionName: 'components_elements_toppings';
  info: {
    description: '';
    displayName: 'Topping';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Integer;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String & Schema.Attribute.Required;
    items_contact: Schema.Attribute.Component<'elements.icon-and-text', true> &
      Schema.Attribute.Required;
    items_social: Schema.Attribute.Component<'elements.social', true> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Component<'elements.logo', false> &
      Schema.Attribute.Required;
    slogan: Schema.Attribute.Text;
    title_contact: Schema.Attribute.String & Schema.Attribute.Required;
    title_social: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false> &
      Schema.Attribute.Required;
    menu: Schema.Attribute.Component<'elements.link', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsMenuSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_menu_sections';
  info: {
    displayName: 'Menu Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_sections';
  info: {
    displayName: 'Video Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.add-checkbox-list': ElementsAddCheckboxList;
      'elements.add-radio-list': ElementsAddRadioList;
      'elements.icon-and-text': ElementsIconAndText;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.social': ElementsSocial;
      'elements.topping': ElementsTopping;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'sections.hero': SectionsHero;
      'sections.menu-section': SectionsMenuSection;
      'sections.video-section': SectionsVideoSection;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
