import {createTheme} from '@mui/material/styles';
// import FontFaces from "./common/FontFaces";
import {COLORS} from "./common/ColorPalette";
import {grey} from '@mui/material/colors';
// import Raleway from "/fonts/Raleway/static/TTF/Raleway-Regular.ttf";
// import Rainbow from "/fonts/rainbow/Rainbow.ttf";
// import FontFaces from "./common/FontFaces";


const fonts = `"Raleway", "Oswald"

`


const TheWebsiteTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 980,
            lg: 1160,
            xl: 1320,
        }
    },
    palette: {
        background: {
            default: COLORS.WHITESMOKE,
            paper: COLORS.DARKGRAY
        },
        primary: {
            main: COLORS.RED,
        },
        secondary: {
            main: COLORS.ALMOSTWHITE,
        },
        error: {
            main: '#840E0E',
            light: '#D79393',
            dark: '#640E0E'
        },
        success: {
            main: '#27AE60',
            light: '#93D7B0',
            dark: '#0E8433'
        },
        warning: {
            main: '#E2AB1F',
            light: '#F1D58F',
            dark: '#CF800A'
        },
        text: {
            primary: COLORS.DARKGRAY,
            secondary: grey[100],
            disabled: COLORS.LIGHT_GRAY
        }
    },
    mixins: {
        toolbar: {
            height: "55px"
        }
    },
    typography: {
        fontFamily: fonts,
        h1: {
            // Title1
            fontSize: '70px',
            fontStyle: 'normal',
            fontWeight: "bold",
            lineHeight: 1.3,
            letterSpacing: '-0.01em'
        },
        h2: {
            // Title2
            fontSize: '53px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.02em'
        },
        h3: {
            // Title3
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '-0.03em'
        },
        h4: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: 1
        },
        h5: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '28px',
            lineHeight: 1
        },
        h6: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '24px',
            lineHeight: 1
        },
        body1: {
            // Body
            fontSize: '14.5px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.02em'
        },
        body2: {
            // Large
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 550,
            lineHeight: 1.5,
            letterSpacing: '0.0em'
        },
        button: {
            // Button
            fontSize: '19px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            textTransform: 'none'
        },
        subtitle1: {
            // Small
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 750,
            lineHeight: 1,
            letterSpacing: '-0.03em'
        },
        subtitle2: {
            // Micro
            fontSize: '11px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.45,
            letterSpacing: '-0.03em'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'html': [
                //     {
                //     '@font-face': FontFaces.ralewayFontFace
                // },
                //     {
                //     '@font-face': FontFaces.rainbowFontFace
                // }
                ]

            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    "& .Mui-focus": {
                        borderBottom: 0
                    }
                },
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    marginTop: "100px",
                    border: "3px solid white",
                    backgroundColor: 'rgba(210,0,39,0.9) !important'
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#383838 !important",
                    paddingTop: "4px !important",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '5px',
                    paddingTop: "16px",
                    paddingBottom: "16px"
                },
                contained: {
                    boxShadow: "none",
                },
                containedPrimary: {
                    border: '1px solid white',
                    '&.Mui-disabled': {
                        color: '#969284'
                    },
                },
                containedSecondary: {
                    border: '1px solid whitesmoke',
                    '&.Mui-disabled': {
                        color: 'rgba(207, 207, 207, .5)',
                    },
                },
                outlinedPrimary: {
                    borderWidth: '3px',
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingLeft: "64px",
                    paddingRight: "64px"
                },
                outlinedSecondary: {
                    borderWidth: '3px',
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingLeft: "64px",
                    paddingRight: "64px",
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    border: "2px solid black"
                }
            }
        }
    }
})

export default TheWebsiteTheme
