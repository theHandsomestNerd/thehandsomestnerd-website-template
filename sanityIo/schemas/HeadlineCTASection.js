
export default {
    name: 'HeadlineCTASection',
    title: "Headline CTA",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'contentText',
            title: 'Content Text',
            type: 'text',
        },
        {
            name: 'backgroundImgSrc',
            title: 'Background Image',
            type: 'image',
        },
        {
            name: 'ctaButtonText',
            title: 'CTA Button Text',
            type: 'string'
        },
        {
            name: 'ctaButtonLink',
            title: 'CTA Button Link',
            type: 'string'
        },
        {
            name: 'insetTop',
            title: 'Top Inset',
            type: 'string'
        },
        {
            name: 'insetBottom',
            title: 'Bottom Inset',
            type: 'string'
        },
        {
            name: 'insetLeft',
            title: 'Left Inset',
            type: 'string'
        },
        {
            name: 'insetRight',
            title: 'Right Inset',
            type: 'string'
        },
        {
            name: 'isHideBorder',
            title: 'Hide Border for this Section ',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



