export default {
    name: 'MuiMediaQuery',
    title: 'MUI Media Query',
    type: 'object',
    fields: [
        {
            name: 'breakpoint',
            title: 'Breakpoint',
            type: "array",
            of:[{type: "string", options: {
                    list: [
                        {value: "xs", title: "XS"},
                        {value: "sm", title: "SM"},
                        {value: "md", title: "MD"},
                        {value: "lg", title: "LG"},
                        {value: "xl", title: "XL"},
                    ]
                }}],

        },
        {
            name: 'typography',
            title: 'Typography',
            type: 'MuiFontFace',
        },
    ]
}
