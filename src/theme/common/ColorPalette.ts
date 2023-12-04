export enum COLORS {
    TRANSPARENT_DARKBLUE = 'rgba(0,0,53,.85)',
    TRANSPARENTWHITE = 'rgba(255,255,255,0.75)',
    TRANSPARENTERWHITE = 'rgba(255,255,255,0.55)',
    TRANSPARENTLIGHTGRAY = "rgba(244,243,245,0.87)",
    TRANSPARENTDARKGRAY = "rgba(67,66,74,0.78)",
    DARKBLUE = '#000035',
    BLUE = '#102B88',
    // DARK_GRAY = '#A8A9AC',
    GRAY = '#CFCFCF',
    LIGHT_GRAY = '#949495',
    LIGHTBLUE = '#2CC4D7',
    ALMOSTPURPLE = "#331BAD",
    LIGHTGRAY = "#F4F3F5",
    MEDIUMGRAY = "#BCB9B0",
    DARKGRAY = "#43424A",
    AQUA = "#12b3be",
    WHITESMOKE = '#f6f6f6',
    RED = "#d20027",
    ALMOSTWHITE="#dfd8d9",
    DARKERGRAY = "#383838",
    DARK_GRAY = '#A8A9AC',
    LIGHTER_GRAY = '#E3E3E3',
    PINK = '#FFA9E7',
    DARKORANGE = '#462600',
    LIGHT_GRAY2 = '#E3E3E3',
}

export const convertToHexCode = (value?: string) => {
    let defaultBg = COLORS.WHITESMOKE;
    switch (value) {
        case 'WHITESMOKE':
            defaultBg = COLORS.WHITESMOKE
            break;
        case 'DARKBLUE':
            defaultBg = COLORS.DARKBLUE
            break;
        case 'TRANSPARENT_DARKBLUE':
            defaultBg = COLORS.TRANSPARENT_DARKBLUE
            break;
        case 'BLUE':
            defaultBg = COLORS.BLUE
            break;
        case 'GRAY':
            defaultBg = COLORS.GRAY
            break;
        case 'LIGHT_GRAY':
            defaultBg = COLORS.LIGHT_GRAY
            break;
        case 'TRANSPARENTWHITE':
            defaultBg = COLORS.TRANSPARENTWHITE
            break;
        case 'TRANSPARENTERWHITE':
            defaultBg = COLORS.TRANSPARENTERWHITE
            break;
        case 'LIGHTBLUE':
            defaultBg = COLORS.LIGHTBLUE
            break;
        case 'ALMOSTPURPLE':
            defaultBg = COLORS.ALMOSTPURPLE
            break;
        case 'LIGHTGRAY':
            defaultBg = COLORS.LIGHTGRAY
            break;
        case 'TRANPARENTLIGHTGRAY':
            defaultBg = COLORS.TRANSPARENTLIGHTGRAY
            break;
        case 'MEDIUMGRAY':
            defaultBg = COLORS.MEDIUMGRAY
            break;
        case 'DARKGRAY':
            defaultBg = COLORS.DARKGRAY
            break;
        case 'TRANPARENTDARKGRAY':
            defaultBg = COLORS.TRANSPARENTDARKGRAY
            break;
        case 'AQUA':
            defaultBg = COLORS.AQUA
            break;
        case 'RED':
            defaultBg = COLORS.RED
            break;
        case 'ALMOSTWHITE':
            defaultBg = COLORS.ALMOSTWHITE
            break;
        case 'DARKERGRAY':
            defaultBg = COLORS.DARKERGRAY
            break;
        // case 'DARKERGRAY':
        //     defaultBg = COLORS.DARKERGRAY
        //     break;
        case 'LIGHTER_GRAY':
            defaultBg = COLORS.LIGHTER_GRAY
            break;
        case 'DARK_GRAY':
            defaultBg = COLORS.DARK_GRAY
            break;
        default:
            defaultBg = COLORS.WHITESMOKE
    }

    return defaultBg
}