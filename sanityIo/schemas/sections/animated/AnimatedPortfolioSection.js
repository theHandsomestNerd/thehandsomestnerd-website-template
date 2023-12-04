export default {
    name: 'AnimatedPortfolioSection',
    title: 'Animated Portfolio Section',
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
            name: 'preTitle',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title of Section',
            type: 'string',
        },
        {
            name: 'theme',
            title: 'Theme',
            type: 'reference',
            to:[{type: 'MuiTheme'}]
        },
        // {
        //     name: 'introduction',
        //     title: 'Introduction',
        //     type: 'text',
        // },
        {
            name: 'portfolioEntries',
            title: 'Portfolio Entries',
            type: "array",
            of: [
                {type: "reference",
                    to:
                        [{type: "AnimatedPortfolioItem"}],
                }
            ]
        },
    ]
}