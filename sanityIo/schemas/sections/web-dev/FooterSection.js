import {ColorListing} from "../../mui/ColorListing";

export default {
    name: 'FooterSection',
    title: 'Footer Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'topPadding',
            title: 'Top Padding',
            type: 'string',
        },
        {
            name: 'backgroundImgSrc',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            options: {list: ColorListing}
        },
        {
            name: 'isSocialMediaBlock',
            title: 'Show Social Media Block',
            type: 'boolean',
        },
        {
            name: 'footerMenuRef',
            title: 'Footer Menu',
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



