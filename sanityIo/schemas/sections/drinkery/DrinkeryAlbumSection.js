export default {
    name: 'DrinkeryAlbumSection',
    title: 'Drinkery Album Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'contentTitle',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'contentText',
            title: 'Content',
            type: 'text',
        },
        {
            name: 'hashtags',
            title: 'Hashtags',
            type: 'array',
            of: [{type:"string"
            }]
        },
        {
            name: 'isLogo',
            title: 'Show Logo in this section',
            type: 'boolean',
        },
        {
            name: 'imageList',
            title: 'Image List',
            type: 'array',
            of: [{type:"DrinkeryAlbumItem"
            }]
        },

    ]
}
