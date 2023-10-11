export default {
    name: 'MuiTypography',
    title: 'MUI Typography',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'fontFamily',
            title: 'Font Family',
            type: "array",
            of:[{type: "string", options: {
                    list: [
                        {value: "RAINBOW", title: "Rainbow"},
                        {value: "RALEWAY", title: "Raleway"}
                    ]
                }}],

        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
}
