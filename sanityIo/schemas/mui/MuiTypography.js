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
                        {value: "OSWALD", title: "Oswald"},
                        {value: "INTER", title: "Inter"},
                        {value: "PROMPT", title: "Prompt"},
                        {value: "RALEWAY", title: "Raleway"},
                        {value: "POPPINS", title: "Poppins"},
                        {value: "MONTESERRAT", title: "Monteserrat"}
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
