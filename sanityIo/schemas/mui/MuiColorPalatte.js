const listing = [
    {value: "WHITESMOKE", title: "Whitesmoke"},
    {value: "DARKBLUE", title: "Dark Blue"},
    {value: "TRANSPARENT_DARKBLUE", title: "Transparent Dark Blue"},
    {value: "BLUE", title: "Blue"},
    {value: "GRAY", title: "Gray"},
    {value: "LIGHT_GRAY", title: "Light Gray"},
    {value: "TRANSPARENTWHITE", title: "Transparent White"},
    {value: "LIGHTBLUE", title: "Light Blue"},
    {value: "ALMOST PURPLE", title: "Almost Purple"},
    {value: "LIGHTGRAY", title: "Light Gray"},
    {value: "TRANSPARENTLIGHTGRAY", title: "Transparent Light Gray"},
    {value: "MEDIUMGRAY", title: "Medium Gray"},
    {value: "DARKGRAY", title: "DarkGray"},
    {value: "TRANSPARENTDARKGRAY", title: "Transparent Dark Gray"},
    {value: "AQUA", title: "Aqua"},
    {value: "RED", title: "Red"},
    {value: "ALMOSTWHITE", title: "Almost White"},
    {value: "DARKERGRAY", title: "Darker Gray"},
    {value: "DARK_GRAY", title: "Dark Gray"},
    {value: "LIGHTER_GRAY", title: "Lighter Gray"},
]
export default {
    name: 'MuiColorPalette',
    title: 'MUI Color Palette',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'defaultBackground',
            title: 'Default Background Color',
            type: 'string',
            options: {list: listing}
        },
        {
            name: 'defaultPaperBackgroundColor',
            title: 'Default Paper Color',
            type: 'string',
            options: {list: listing}
        },
        {
            name: 'primaryColor',
            title: 'Primary Color',
            type: 'string',
            options: {list: listing}
        },
        {
            name: 'secondaryColor',
            title: 'Secondary Color',
            type: 'string',
            options: {list: listing}
        },
       {
            name: 'primaryTextColor',
            title: 'Primary Text Color',
            type: 'string',
           options: {list: listing}
        },
       {
            name: 'secondaryTextColor',
            title: 'Secondary Text Color',
            type: 'string',
           options: {list: listing}
        },
       {
            name: 'disabledTextColor',
            title: 'Disabled Text Color',
            type: 'string',
           options: {list: listing}
        },

    ],
    preview: {
        select: {
            title: 'name',
        },
    },
}