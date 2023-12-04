export default {
    name: 'MapSection',
    title: 'Map Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'mapMarkerTitle',
            title: 'Map Marker Title',
            type: 'string',
        },
        {
            name: 'mapMarkerName',
            title: 'Map Marker Name',
            type: 'string',
        },
        {
            name: 'longitude',
            title: 'Longitude',
            type: 'string',
        },
        {
            name: 'latitude',
            title: 'Latitude',
            type: 'string',
        },
        {
            name: 'contactInfo',
            title: 'Contact Info',
            type: 'array',
            validation: Rule => Rule.max(3),
            of:[{type: 'ServiceAmenityItem'}]
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}



