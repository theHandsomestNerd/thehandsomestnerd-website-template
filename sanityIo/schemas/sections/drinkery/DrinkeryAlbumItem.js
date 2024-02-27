export default {
    name: 'DrinkeryAlbumItem',
    title: 'Drinkery Album Item',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'imageSrc',
            title: 'Src',
            type: 'image',
        },
        {
            name: 'cols',
            title: 'Columns',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
{
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },

    ],
    preview: {
        select: {
            title: 'title',
            media: 'imageSrc',
            cols:'cols'
        },
        prepare(selection) {
            const {cols} = selection
            return Object.assign({}, selection, {
                subtitle: cols,
            })
        },
    },
}
