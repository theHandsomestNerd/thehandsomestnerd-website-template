export default {
    name: 'ResumeSkill',
    title: 'Resume Skill',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title of Skillset',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Skill Description',
            type: 'text',
        },
        {
            name: 'proficiency',
            title: 'Skill Proficiency',
            type: 'number',
        },
        {
            name: 'iconPngSrc',
            title: 'Skill Icon',
            type: 'image',
        },
        {
            name: 'versions',
            title: 'Versions worked with',
            type: 'array',
            of:[{type: "string"}]
        },
        {
            name: 'searchableOnPages',
            title: 'Make Searchable on pages',
            type: 'array',
            of:[{type: "reference", to: {type:"homePage"}}]
        },

    ]
}