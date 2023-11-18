export default {
    name: 'AnimatedAboutUsSection',
    title: "Animated About Us Section",
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
            name: 'highlightedAmenitiesTitle',
            title: 'Highlighted Amenities Title',
            type: 'string',
        },
        {
            name: 'highlightedAmenities',
            title: 'Highlighted Amenities',
            type: 'array',
            validation: Rule => Rule.max(2),
            of: [{type: 'ServiceAmenityItem'}]
        },
        {
            name: 'highlightedAmenitiesTexts',
            title: 'Highlighted Amenities Texts',
            type: 'array',
            of: [{type: 'text'}]
        },
        {
            name: 'highlightedAmenitiesBullets',
            title: 'Highlighted Amenities Bullets',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'servicesImageSrcArr',
            title: 'Services Images',
            type: 'array',
            validation: Rule => Rule.max(3),
            of: [{type: 'image'}]
        },
        {
            name: 'servicesMasonryAccentImageSrc',
            title: 'servicesMasonryAccent',
            type: 'image',
        },
        {
            name: 'servicesList',
            title: 'List Items',
            type: 'array',
            of: [{type: 'reference', to: {type: 'ServiceItem'}}]
        }
    ]
}



