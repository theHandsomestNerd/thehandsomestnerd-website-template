export default {
    name: 'BusinessContact',
    title: 'Business Contact',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Physical Address',
            type: 'string',
        },
        {
            name: 'email',
            title: 'email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
        },
        {
            name: 'facebook',
            title: 'Facebook Handle',
            type: 'string',
        },
        {
            name: 'facebookIconSrc',
            title: 'Facebook Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'linkedIn',
            title: 'LinkedIn Handle',
            type: 'string',
        },
        {
            name: 'linkedInIconSrc',
            title: 'LinkedIn Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'github',
            title: 'Github Handle',
            type: 'string',
        },
        {
            name: 'githubIconSrc',
            title: 'GitHub Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'twitter',
            title: 'Twitter Handle',
            type: 'string',
        },
        {
            name: 'twitterIconSrc',
            title: 'Twitter Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'instagram',
            title: 'Instagram Handle',
            type: 'string',
        },
        {
            name: 'instagramIconSrc',
            title: 'Instagram Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'hoursOfOperation',
            title: 'Hours of Operation',
            type: "array",
            of: [{type: "scheduleGroup"}]
        },
    ]
}