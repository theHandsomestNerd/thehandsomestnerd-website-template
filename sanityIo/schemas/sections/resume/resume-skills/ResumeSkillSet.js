export default {
    name: 'ResumeSkillset',
    title: 'Resume Skillset',
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
            name: 'skills',
            title: 'Skills',
            type: "array",
            of: [{
                type: "reference",
                to: [{type: "ResumeSkill"}]
            }]
        },
        {
            name: 'searchableOnPages',
            title: 'Make Searchable on pages',
            type: 'array',
            of:[{type: "reference", to: {type:"homePage"}}]
        },

    ]
}