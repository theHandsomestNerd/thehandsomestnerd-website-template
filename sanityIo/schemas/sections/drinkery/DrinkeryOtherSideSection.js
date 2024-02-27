export default {
    name: 'DrinkeryOtherSideSection',
    title: 'Drinkery Other Side Section',
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
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'isLogo',
            title: 'Show Logo in this section',
            type: 'boolean',
        },
        {
            name: 'isShowMenu',
            title: 'Show Menu in this section',
            type: 'boolean',
        },
        {
            name: 'isLink',
            title: 'Show the Link',
            type: 'boolean',
        },
        {
            name: 'theLiquors',
            title: 'Liquor Menu',
            type: 'array',
            of: [{type:"string"
            }]
        },

    ]
}
