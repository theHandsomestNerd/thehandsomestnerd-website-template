
export default {
    name: 'ResumePortfolioItem',
    title: 'Resume Portfolio Item',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'inceptionDate',
            title: 'Inception Date',
            type: 'date',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
            options: { layout: 'tags' }
        },
        {
            name: 'skillsHighlighted',
            title: 'Skill Used',
            type: 'array',
            of: [{type: 'reference', to: {type: 'ResumeSkill'}}],
            options: { layout: 'tags' }
        },
        {
            name: 'detailTitle',
            title: 'Detail Title',
            type: 'string'
        },
        {
            name: 'detailDescription',
            title: 'Detail Description',
            type: 'text',
        },
        {
            name: 'linkToProd',
            title: 'Prod link',
            type: 'url',
        },
        {
            name: 'linkToDev',
            title: 'Dev Link',
            type: 'string',
        },
        {
            name: 'isDisabled',
            title: 'Is this Disabled from all UIs',
            type: 'boolean'
        },
        {
            name: 'imageGallery',
            title: 'Image Gallery',
            type: 'array',
            of:[{type: 'image'}]
        },
        {
            name: 'searchableOnPages',
            title: 'Make Searchable on pages',
            type: 'array',
            of:[{type: "reference", to: {type:"homePage"}}]
        },

    ]
}