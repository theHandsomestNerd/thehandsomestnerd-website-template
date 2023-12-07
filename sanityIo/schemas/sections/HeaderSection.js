import {ColorListing} from "../mui/ColorListing";

export default {
    name: 'HeaderSection',
    title: 'Header Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'isEnhanced',
            title: 'Is This Header Enhanced?',
            type: 'boolean',
        },
        {
            name: 'ctaButtonText',
            title: 'CTA Button Text',
            type: 'string'
        },
        {
            name: 'logoImgSrc',
            title: 'Logo Image',
            type: 'image'
        },
        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            options: {list: ColorListing}
        },
        {
            name: 'isSearch',
            title: 'Is Search included in header',
            type: 'boolean'
        },
        {
            name: 'ctaButtonLink',
            title: 'CTA Button Link',
            type: 'string'
        },
        {
            name: 'highlightedDetails',
            title: 'HighlightedDetails',
            type: 'array',
            of:[{type: 'ServiceAmenityItem'}]
        },
        {
            name: 'headerMenuRef',
            title: 'Header Menu',
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



