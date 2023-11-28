export default {
    name: 'MuiFontFace',
    title: 'MUI Font Face',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'fontSize',
            title: 'Font Size',
            type: 'string',
        },
        {
            name: 'fontStyle',
            title: 'Font Style',
            type: 'string',
        },
        {
            name: 'fontWeight',
            title: 'Font Weight',
            type: 'string',
        },
        {
            name: 'lineHeight',
            title: 'Line Height',
            type: 'string',
        },
        {
            name: 'letterSpacing',
            title: 'Letter Spacing',
            type: 'string',
        },
        {
            name: 'textTransform',
            title: 'Text Transform',
            type: 'string',
        },
        {
            name: 'mediaQueries',
            title: 'Media Queries',
            type: "array",
            of:[{type: "MuiMediaQuery"}],
        },
    ]
}
