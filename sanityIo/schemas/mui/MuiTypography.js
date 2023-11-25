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
                        {value: "Oswald", title: "Oswald"},
                        {value: "Inter", title: "Inter"},
                        {value: "Prompt", title: "Prompt"},
                        {value: "Raleway", title: "Raleway"},
                        {value: "Poppins", title: "Poppins"},
                        {value: "Monteserrat", title: "Monteserrat"}
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
