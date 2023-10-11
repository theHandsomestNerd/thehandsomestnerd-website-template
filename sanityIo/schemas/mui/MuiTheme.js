export default {
    name: 'MuiTheme',
    title: 'MUI Theme',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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
            name: 'appBarHeight',
            title: 'App Bar Height',
            type: 'number',
        },
        {
            name: 'breakpoints',
            title: 'BreakPoints',
            type: 'MuiBreakpoints',
        },
        {
            name: 'colorPalette',
            title: 'Color Palette',
            type: 'MuiColorPalette',
        },
        {
            name: 'typography',
            title: 'Typography',
            type: 'MuiTypography',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
}
