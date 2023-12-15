export default {
    name: 'WebDevPricingPlan',
    title: 'Web Dev Pricing Plan',
    type: 'object',
    fields: [
        {
            name: 'isEnabled',
            title: 'Is Enabled',
            type: 'boolean',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'contentTexts',
            title: 'Content Text',
            type: 'array',
            of:[{type: 'text'}]
        },
        {
            name: 'cost',
            title: 'Cost',
            type: 'string',
        },
        {
            name: 'learnMoreText',
            title: 'Learn More Text',
            type: 'string'
        },
        {
            name: 'learnMoreLink',
            title: 'Learn More Link',
            type: 'string'
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
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



