import React, {FunctionComponent, PropsWithChildren, useContext, useMemo,} from 'react';
import CustomizedThemeContext from './CustomizedThemeContext';
import {CssBaseline} from "@mui/material";
import {createTheme, Theme, ThemeProvider} from "@mui/material/styles";
import {COLORS} from "../../theme/common/ColorPalette";
import {grey} from "@mui/material/colors";
import {SanityMuiTheme} from "../../common/sanityIo/Types";
import PageContext from "../page-context/PageContext";
import TheWebsiteTheme from "../../theme/Theme";
import cmsClient from "../block-content-ui/cmsClient";
import sanityClient from "../../sanityClient";

type IProps = {
    pageTheme?: SanityMuiTheme
};


const CustomizedThemeProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {

    const [customizedTheme, setCustomizedTheme] = React.useState<Partial<Theme>>({})
    const fonts = `"Raleway", "Oswald"`

    const pageContext = useContext(PageContext);
    React.useEffect(() => {
        console.log('Theme ',pageContext.page?.theme)
        if(pageContext.page?.theme)
        {
            const theCustomizedTheme = getThemeFromSanity(pageContext.page?.theme)

            setCustomizedTheme(theCustomizedTheme)
        } else {
            setCustomizedTheme(TheWebsiteTheme
)
        }
    }, [pageContext.page?.theme])

    const getThemeFromSanity =  (theme: SanityMuiTheme) => {
        const convertToHexCode  = (value?:string)=>{
            let defaultBg = COLORS.WHITESMOKE;
            switch(value){
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

        const theCustomizedTheme = createTheme({
            breakpoints: {
                values: {
                    xs: theme.breakpoints?.xs ?? 0,
                    sm: theme.breakpoints?.sm ?? 640,
                    md: theme.breakpoints?.md ?? 980,
                    lg: theme.breakpoints?.lg ?? 1160,
                    xl: theme.breakpoints?.xl ?? 1320,
                }
            },
            palette: {
                background: {
                    default: theme.colorPalette?.defaultBackground ? convertToHexCode(theme.colorPalette?.defaultBackground):COLORS.WHITESMOKE,
                    paper: theme.colorPalette?.defaultPaperBackgroundColor ? convertToHexCode(theme.colorPalette?.defaultPaperBackgroundColor):COLORS.DARKGRAY
                },
                primary: {
                    main: theme.colorPalette?.primaryColor ? convertToHexCode(theme.colorPalette?.primaryColor):COLORS.RED,
                },
                secondary: {
                    main: theme.colorPalette?.secondaryColor ? convertToHexCode(theme.colorPalette?.secondaryColor):COLORS.ALMOSTWHITE,
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
                    primary: theme.colorPalette?.primaryTextColor ? convertToHexCode(theme.colorPalette?.primaryTextColor):COLORS.DARKGRAY,
                    secondary: theme.colorPalette?.secondaryTextColor ? convertToHexCode(theme.colorPalette?.secondaryTextColor):grey[100],
                    disabled: theme.colorPalette?.disabledTextColor ? convertToHexCode(theme.colorPalette?.disabledTextColor):COLORS.LIGHT_GRAY
                }
            },
            mixins: {
                toolbar: {
                    // height: "55px"
                    height: (theme.appBarHeight??55) + "px"
                }
            },
            typography: {
                fontFamily: theme.typography?.fontFamily?theme.typography?.fontFamily.join(','):fonts,
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
                            paddingRight: "16px",
                            // border: "2px solid black",
                        }
                    }
                }
            }
        })
        return theCustomizedTheme;
    }

    const getThemeBySlug = async (slug: string) => {
        const theRetrievedTheme = await cmsClient.fetchMuiTheme(slug)

        return getThemeFromSanity(theRetrievedTheme)
    }

    const newValue = useMemo(
        () => ({
            customizedTheme,
            getThemeBySlug
        }),
        [customizedTheme]
    );
    return (
        <CustomizedThemeContext.Provider value={newValue}>
            <ThemeProvider theme={customizedTheme}>
                <CssBaseline/>
                {props.children}
            </ThemeProvider>
        </CustomizedThemeContext.Provider>
    );
};

export default CustomizedThemeProvider;
