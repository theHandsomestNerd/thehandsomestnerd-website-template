export default {
    name: 'BartenderHeroSection',
    title: 'Bartender Hero Section',
    type: 'document',
    fields: [
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
            name: 'imageSrc',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bartender',
            title: 'Bartender',
            type: 'BusinessContact',
        },
        {
            name: 'careerTitle',
            title: 'Career Title',
            type: 'string',
        },

        {
            name: 'textContent',
            title: 'Text Content',
            type: 'string',
        },
    ],
}
