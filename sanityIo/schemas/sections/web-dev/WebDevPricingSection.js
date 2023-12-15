
export default {
    name: 'WebDevPricingSection',
    title: "Web Dev Pricing Section",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'theme',
            title: 'Theme',
            type: 'reference',
            to:[{type: 'MuiTheme'}]
        },
        {
            name: 'contentPreTitle',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'contentTitle',
            title: 'Large Title',
            type: 'string',
        },
        {
            name: 'contentTexts',
            title: 'Content Text',
            type: 'array',
            of:[{type: 'text'}]
        },
        {
            name: 'plans',
            title: 'Pricing Plans',
            type: 'array',
            of:[{type: 'WebDevPricingPlan'}]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



