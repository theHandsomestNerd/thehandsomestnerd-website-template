import {Button, CssBaseline, Grid, ThemeProvider, Typography, useTheme,} from '@mui/material';
import {PropsWithChildren} from 'react'
import {useCommonStyles} from './CommonStyles'
// import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
    BoldRender,
    DropCapRender,
    KeystrokeRender,
    LargeBodyTextRender,
    LightRender,
    NormalRender,
    TextColorRender,
    TypographyRender,
    UnderlineRender
} from './BlockContentMarkRenderers'
import BlockContent from '@sanity/block-content-to-react'
import {ButtonMarkRender, ListItemRender, ListRender, UtmLinkRender} from './BlockContentAnnotations'

export type HeaderVariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type LinkType = { href: string, isAddUtm: boolean }
export type ButtonType = { buttonLink: string, variant: string, color: any }

export type BlockPropsType = { _type: string, listItem?: string, level?: number }
export type BlockContentPropsType<T> = { mark?: T }

export const HeaderRender = (props: any, variant: HeaderVariantType) => {
    const theme = useTheme()
    const wrapWithHTag = (children: any) => {
        switch (variant) {
            case 'h1':
                return <h1 style={{fontFamily:"Bitter Pro"}}>{children}</h1>
            case 'h2':
                return <h2 style={{fontFamily:"Bitter Pro"}}>{children}</h2>
            case 'h3':
                return <h3 style={{fontFamily:"Bitter Pro"}}>{children}</h3>
            case 'h4':
                return <h4 style={{fontFamily:"Bitter Pro"}}>{children}</h4>
            case 'h5':
                return <h5 style={{fontFamily:"Bitter Pro"}}>{children}</h5>
            case 'h6':
                return <h6 style={{fontFamily:"Bitter Pro"}}>{children}</h6>
            default:
                return <Typography display='inline' component='div'
                                   style={{
                                       color: theme.palette.secondary.main,
                                       fontWeight: variant === 'h3' ? 300 : 700,
                                       marginBottom: theme.spacing(3)
                                   }}
                                   variant={variant}>{children}</Typography>
        }

    }

    return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>{wrapWithHTag(
                props.children
            )}
            </ThemeProvider>
    );
}

export const CtaRender: React.FunctionComponent<PropsWithChildren> = (props) => {
    const theme = useTheme()
    const classes = useCommonStyles(theme)
    return <Grid container item xs={12} className={classes.callToAction}>{props.children}</Grid>
}

export const HrRender: React.FunctionComponent = () => {
    const theme = useTheme()
    const classes = useCommonStyles(theme)

    return <Grid container item>
        <hr className={classes.hr}/>
    </Grid>
}

// type SanityButtonBlockContentType = {
//     buttonText?: string, buttonLink?: string, color?: string
// }

export const ButtonRender = (props: any) => {
    // const sanityButton:{buttonText?:string, buttonLink?:string, color?:string, variant?:string} = props.node as SanityButtonBlockContentType
    // console.log('Props from button', props)
    const theme = useTheme()
    let textColor = ''

    // switch(props.color) {
    //   case 'secondary':
    //     textColor = "whitesmoke"
    //     break;
    //   case 'primary':
    //     textColor = "whitesmoke"
    //     break;
    //   case 'mint':
    //     textColor = TransformHWTheme.palette.secondary.main
    //     break;
    //   default:
    //     textColor = "whitesmoke"
    // }

    switch (props?.variant) {
        case 'outlined':
            switch (props.color) {
                case 'secondary':
                    textColor = theme.palette.secondary.main
                    break
                case 'primary':
                    textColor = theme.palette.primary.main
                    break
                case 'mint':
                    textColor = ""
                    break
                default:
                    textColor = 'whitesmoke'
            }
            break
        case 'contained':
            switch (props.color) {
                case 'secondary':
                    textColor = 'whitesmoke'
                    break
                case 'primary':
                    textColor = 'whitesmoke'
                    break
                case 'mint':
                    textColor = theme.palette.secondary.main
                    break
                default:
                    textColor = theme.palette.background.paper
            }
            break
        case 'text':
        default:
            switch (props.color) {
                case 'secondary':
                    textColor = theme.palette.secondary.main
                    break
                case 'primary':
                    textColor = theme.palette.primary.main
                    break
                case 'mint':
                    textColor = ""
                    break
                default:
                    textColor = theme.palette.text.primary
            }
            break
    }
    return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Grid container item>
                    <Button style={props?.color === 'mint' ? props?.variant === 'contained' ? {
                        backgroundColor: "",
                        borderRadius: '20px'
                    } : {backgroundColor: 'transparent', borderColor: "", borderRadius: '20px'} : {borderRadius: '20px'}}
                            variant={props.variant as 'text' | 'outlined' | 'contained'}
                            color={props?.color != 'mint' ? props?.color : 'inherit'}
                            href={props.buttonLink}><Typography variant='button'
                                                                style={{color: textColor}}>{props.children}</Typography></Button>
                </Grid>
            </ThemeProvider>
    );
}

export const BlockContainerRender: React.FunctionComponent = (props: React.PropsWithChildren<{}>) => {
    return <Typography component='span' style={{width: '100%', overflow: 'scroll', height: '100%'}}
                       variant='body1'><CssBaseline/>{props.children}</Typography>
}

export type SanityCodeBlockType = {
    language?: 'js',
    highlightedLines: number[],
    code: string
}

export const blockSerializers: any = {
    list: ListRender,
    listItem: ListItemRender,
    types: {
        // code: CodeBlockRender,
        utmLink: UtmLinkRender,
        button: ButtonRender,
        block: (props: any) => {
            switch (props.node.style as string) {
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'h5':
                case 'h6':
                    return HeaderRender(props, props.node.style as HeaderVariantType)
                case 'normal':
                    return NormalRender(props)
                case 'cta':
                    return CtaRender(props)
                default:
                    //@ts-ignore
                    return BlockContent.defaultSerializers.types.block(props)
            }
        },
        lineBreak: (props: any) => {
            const {style} = props.node
            if (style === 'horizontalRule') {
                return <HrRender/>
            }
            return null
        }
    },
    marks: {
        light: LightRender,
        dropCap: DropCapRender,
        primaryTextColor: (props: any) => (TextColorRender(props, "")),
        secondaryTextColor: (props: any) => (TextColorRender(props, "")),
        underlinePrimaryColor: (props: any) => (UnderlineRender(props, "")),
        utmLink: UtmLinkRender,
        bold: BoldRender,
        button: ButtonMarkRender,
        keyStroke: KeystrokeRender,
        subtitle: (props: any) => TypographyRender(props, 'subtitle1'),
        overline: (props: any) => TypographyRender(props, 'overline'),
        largeBodyText: (props: any) => LargeBodyTextRender(props)
    },
    container: BlockContainerRender
}


export default {
    HeaderRender,
    CtaRender,
    BlockContainerRender
}
