
export default {
    name: 'DrinkerySpecialsSection',
    title: "Drinkey - Specials Section",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'contentTitle',
            title: 'Large Title',
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
        {
            name: 'contentText',
            title: 'Content Text',
            type: 'text',
        },
        {
            name: 'disclaimer',
            title: 'Disclaimer',
            type: 'text',
        },
        {
            name: 'subTitle',
            title: 'Small Title',
            type: 'string',
        },
        {
            name: 'theSpecials',
            title: 'specials',
            type: 'array',
            of: [{type:"drinkerySpecial"
            }]
        },
        // {
        //     name: 'ctaButtonText',
        //     title: 'CTA Button Text',
        //     type: 'string'
        // },
        // {
        //     name: 'ctaButtonLink',
        //     title: 'CTA Button Link',
        //     type: 'string'
        // }
    ],
}



