export default {
    name: 'TestimonialsSection',
    title: 'Testimonials Section',
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
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'preTitle',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title of Section',
            type: 'string',
        },
        {
            name: 'introduction',
            title: 'Introduction',
            type: 'text',
        },
        {
            name: 'feedbackEntries',
            title: 'Feedback',
            type: "array",
            of: [
                {type: "reference",
                    to:
                        [{type: "Testimonials"}],
                }
            ]
        },
    ]
}