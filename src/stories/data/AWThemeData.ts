import {SanityMuiTheme} from "../../common/sanityIo/Types";

const AWThemeData:SanityMuiTheme ={
    "appBarHeight": 94,
    "typography": {
        "fontFamily": [
            "Cantarell",
            "Poppins",
        ],
        "_type": "MuiTypography",
        "fontFaces": [
            {
                "lineHeight": "1.3",
                "_key": "5df380872869",
                "fontStyle": "normal",
                "fontSize": "4.25rem",
                "mediaQueries": [
                    {
                        "_type": "MuiMediaQuery",
                        "breakpoint": [
                            "sm"
                        ],
                        "typography": {
                            "_type": "MuiFontFace",
                            "fontSize": "2.8rem"
                        }
                    }
                ],
                "name": "h1",
                "letterSpacing": "-.01em",
                "fontWeight": "bold",
                "_type": "MuiFontFace"
            },
            {
                "letterSpacing": "-.02em",
                "fontSize": "3.78rem",
                "lineHeight": "1.25",
                "_key": "de8c0119eeba",
                "fontStyle": "normal",
                "fontWeight": "700",
                "_type": "MuiFontFace",
                "name": "h2"
            },
            {
                "letterSpacing": "-.03em",
                "fontSize": "2rem",
                "fontWeight": "600",
                "_type": "MuiFontFace",
                "name": "h3",
                "lineHeight": "1.4",
                "fontStyle": "normal",
                "mediaQueries": [
                    {
                        "typography": {
                            "_type": "MuiFontFace",
                            "fontSize": "1.4rem"
                        },
                        "_type": "MuiMediaQuery",
                        "breakpoint": [
                            "sm"
                        ]
                    }
                ],
                "_key": "49b8a561f217"
            },
            {
                "_type": "MuiFontFace",
                "name": "h4",
                "fontSize": "2.1rem",
                "lineHeight": "1",
                "_key": "6a50fcbfe0c8",
                "fontStyle": "normal",
                "fontWeight": "bold"
            },
            {
                "fontStyle": "normal",
                "fontWeight": "bold",
                "_type": "MuiFontFace",
                "name": "h5",
                "fontSize": "2rem",
                "lineHeight": "1",
                "_key": "8421d161475a"
            },
            {
                "fontSize": "1.2rem",
                "lineHeight": "1",
                "_key": "16fdbaef5696",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "_type": "MuiFontFace",
                "name": "h6"
            },
            {
                "fontSize": "1rem",
                "lineHeight": "1.5",
                "_key": "72f39672752c",
                "fontStyle": "normal",
                "fontWeight": "400",
                "_type": "MuiFontFace",
                "name": "body1",
                "letterSpacing": "-.02em"
            },
            {
                "_key": "df28261500a3",
                "fontStyle": "normal",
                "fontWeight": "550",
                "_type": "MuiFontFace",
                "name": "body2",
                "letterSpacing": ".0em",
                "fontSize": "1.1rem",
                "lineHeight": "1.5"
            },
            {
                "textTransform": "none",
                "fontWeight": "700",
                "_type": "MuiFontFace",
                "fontStyle": "normal",
                "name": "button",
                "letterSpacing": "-.03em",
                "lineHeight": "1",
                "fontSize": "19px",
                "_key": "c4f4a547eb32"
            },
            {
                "_type": "MuiFontFace",
                "name": "subtitle1",
                "letterSpacing": "-.03em",
                "fontSize": "14px",
                "lineHeight": "1",
                "_key": "dcc3b1d9a593",
                "fontStyle": "normal",
                "fontWeight": "750"
            },
            {
                "fontStyle": "normal",
                "fontWeight": "600",
                "_type": "MuiFontFace",
                "name": "subtitle2",
                "letterSpacing": "-.03em",
                "fontSize": "11px",
                "lineHeight": "1.45",
                "_key": "0d16ceeb2ed1"
            }
        ]
    },
    "breakpoints": {
        "xl": 1320,
        "md": 980,
        "sm": 640,
        "lg": 1160,
        "xs": 0
    },
    "colorPalette": {
        "_type": "MuiColorPalette",
        "secondaryColor": "ALMOST_BLACK",
        "defaultBackground": "WHITESMOKE",
        "primaryTextColor": "WHITESMOKE",
        "buttonOutlineColor": "ALMOST_BLACK",
        "buttonOutlineSecondaryColor": "WHITESMOKE",
        "primaryColor": "RED",
        "defaultPaperBackgroundColor": "LIGHTGRAY",
        "secondaryTextColor": "ALMOST_BLACK",
        "disabledTextColor": "LIGHTGRAY"
    },
    "title": "AW Theme",
    "_type": "MuiTheme",
    "slug": {
        "current": "aw-theme",
        "_type": "slug"
    }
}


export default AWThemeData;