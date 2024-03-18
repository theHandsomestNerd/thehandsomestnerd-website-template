export default {
    name: 'AnimatedServicesSection',
    title: "Animated Services Section",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'heroBullet',
            title: 'Hero Bullet',
            type: 'image',
        },
        {
            name: 'contentPreTitle',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'contentTitle',
            title: 'Large Title',
            type: 'string',
        },
        {
            name: 'contentTexts',
            title: 'Content Text',
            type: 'array',
            of: [{type: 'text'}]
        },
        {
            name: 'imagesArray',
            title: 'Images Array',
            type: 'array',
            of: [{type: 'image'}]
        },
        // {
        //     name: 'highlightedAmenitiesTitle',
        //     title: 'Highlighted Amenities Title',
        //     type: 'string',
        // },
        // {
        //     name: 'highlightedAmenities',
        //     title: 'Highlighted Amenities',
        //     type: 'array',
        //     validation: Rule => Rule.max(2),
        //     of: [{type: 'ServiceAmenityItem'}]
        // },
        // {
        //     name: 'highlightedAmenitiesTexts',
        //     title: 'Highlighted Amenities Texts',
        //     type: 'array',
        //     of: [{type: 'text'}]
        // },
        // {
        //     name: 'highlightedAmenitiesBullets',
        //     title: 'Highlighted Amenities Bullets',
        //     type: 'array',
        //     of: [{type: 'string'}]
        // },
        // {
        //     name: 'servicesImageSrcArr',
        //     title: 'Services Images',
        //     type: 'array',
        //     validation: Rule => Rule.max(3),
        //     of: [{type: 'image'}]
        // },
        // {
        //     name: 'servicesMasonryAccentImageSrc',
        //     title: 'servicesMasonryAccent',
        //     type: 'image',
        // },
        {
            name: 'servicesList',
            title: 'List Items',
            type: 'array',
            of: [{type: 'reference', to: {type: 'ServiceItem'}}]
        },
        {
            name: 'contentSummaryTitle',
            title: 'Content Summary Title',
            type: 'string',
        },
        {
            name: 'contentSummaryTexts',
            title: 'Content Summary Text',
            type: 'array',
            of: [{type: 'text'}]
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
            name: 'videoPreviewImageSrc',
            title: 'Video Image Preview',
            type: 'image',
        },
        {
            name: 'videoPreviewText',
            title: 'Video Image Preview Text',
            type: 'string',
        },
        {
            name: 'videoPreviewSectionBackgroundImageSrc',
            title: 'Video Image Preview Section Background',
            type: 'image',
        },
        {
            name: 'videoUrl',
            title: 'Video URL',
            type: 'string',
        },
    ]
}



