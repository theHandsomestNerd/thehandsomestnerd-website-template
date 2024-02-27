export default {
    name: 'drinkerySpecial',
    title: 'Drinkery Special',
    type: 'object',
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
            name: 'content',
            title: 'Content',
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
            name: 'imageSrcAltText',
            title: 'Image Alt Text',
            type: 'string'
        },
    ]
}
