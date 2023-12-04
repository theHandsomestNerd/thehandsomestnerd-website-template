export default {
    name: 'ServiceAmenityItem',
    title: 'Service Amenity',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
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
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'muiIcon',
            title: 'Icon',
            type: 'string',
            options: {
                list:[
                    {title:"location", value: "location"},
                    {title:"email", value: "email"},
                    {title:"phone", value: "phone"}
                ]
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        }
    ]
}