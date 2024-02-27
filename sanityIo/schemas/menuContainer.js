export default {
    name: 'menuContainer',
    title: 'Menu Container',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'theme',
            title: 'Theme',
            type: 'reference',
            to:[{type: 'MuiTheme'}]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'logoImageSrc',
            title: 'Logo image Src',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'logoImageAltText',
            title: 'Logo Image Alt Text',
            type: 'string',
        },
        {
            name: 'logoText',
            title: 'Logo Text',
            type: 'string',
        },
        {
            name: 'logoAccentText',
            title: 'Logo Accent Text',
            type: 'string',
        },
        {
            name: 'isShowSocialMedia',
            title: 'Show Social Media?',
            type: 'boolean',
        },
        {
            name: 'isHideOverlay',
            title: 'Lighten the background',
            type: 'boolean',
        },
        {
            name: 'subMenus',
            title: 'Sub Menu',
            type: 'array',
            of: [{name: "Menu Group", type: 'reference', to: {type: 'menuGroup'}},{name: "Menu Item", type: 'reference', to: {type: 'menuItem'}}],
        }
    ]
}