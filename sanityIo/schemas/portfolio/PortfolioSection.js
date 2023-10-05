export default {
    name: 'PortfolioSection',
    title: 'Resume Portfolio Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'preTitle',
            title: 'PreTitle of Section',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title of Section',
            type: 'string',
        },
        {
            name: 'introduction',
            title: 'Introduction',
            type: 'text',
        },
        {
            name: 'portfolioEntries',
            title: 'Portfolio Entries',
            type: "array",
            of: [
                {type: "reference",
                    to:
                        [{type: "portfolioItem"}],
                }
            ]
        },
    ]
}