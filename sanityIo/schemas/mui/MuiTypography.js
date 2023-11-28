export default {
    name: 'MuiTypography',
    title: 'MUI Typography',
    type: 'object',
    fields: [
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
        {
            name: 'fontFaces',
            title: 'Font Faces',
            type: "array",
            of:[{type: "MuiFontFace"}],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
}
