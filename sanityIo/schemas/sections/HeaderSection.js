export default {
    name: 'HeaderSection',
    title: 'Header Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'isEnhanced',
            title: 'Is This Header Enhanced?',
            type: 'boolean',
        },
        {
            name: 'ctaButtonText',
            title: 'CTA Button Text',
            type: 'string'
        },
        {
            name: 'isSearch',
            title: 'Is Search included in header',
            type: 'boolean'
        },
        {
            name: 'ctaButtonLink',
            title: 'CTA Button Link',
            type: 'string'
        },
        {
            name: 'highlightedDetails',
            title: 'HighlightedDetails',
            type: 'array',
            of:[{type: 'ServiceAmenityItem'}]
        },
        {
            name: 'headerMenuRef',
            title: 'Header Menu',
            type: 'reference',
            to: [{type:'menuContainer'}]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



