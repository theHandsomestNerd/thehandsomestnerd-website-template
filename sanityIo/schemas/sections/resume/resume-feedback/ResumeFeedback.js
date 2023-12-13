export default {
    name: 'ResumeFeedback',
    title: 'Resume Feedback',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
        },
        {
            name: 'customerTitle',
            title: 'Customer Title',
            type: 'string',
        },
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
        },
        {
            name: 'quote',
            title: 'Customer Quote',
            type: 'text',
        },
        {
            name: 'imageSrc',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'searchableOnPages',
            title: 'Make Searchable on pages',
            type: 'array',
            of:[{type: "reference", to: {type:"homePage"}}]
        },

    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}