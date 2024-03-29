import{FunctionComponent, useContext} from 'react'
import makeStyles from '@mui/styles/makeStyles';
import {Grid, useMediaQuery, useTheme} from '@mui/material'
import FooterMenuContainer from './FooterMenuContainer'
import {SanityMenuContainer} from "../../../../common/sanityIo/Types";
import {COLORS, convertToHexCode} from "../../../../theme/common/ColorPalette";
import {SanityImageAsset} from "../../../BlockContentTypes";
import useCustomStyles from "../pages/Styles";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";

export const useStyles = makeStyles(() => ({
    root: {
        // paddingTop: "32px",
        // backgroundColor: COLORS.DARK_GRAY,
        // color: '#FDF3EB',
        // marginLeft: -1 * theme.spacing(1),
        zIndex: 1000,
        '& .MuiFormLabel-root': {
            color: 'white',
        },
    },
    emailContainer: {
        height: '72px',
    },
    columnHeader: {
        fontWeight: 500,
        color: '#FDF3EB',
        marginBottom: '16px',
    },
    footerLink: {
        marginBottom: '8px',
    },
    newsletterForm: {
        maxWidth: '370px',
    },
    emailInputProps: {
        borderColor: '#FDF3EB',
        color: '#FDF3EB !important',
    },
}))

interface IProps {
    pageFooter?: SanityMenuContainer
    footerMenuSlug?: string
    updateIsLoading?: (value: boolean) => void
    isSocialMediaBlock?: boolean
    backgroundImgSrc?: SanityImageAsset
    backgroundColor?:string
    topPadding?: string
}

const Footer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    const globalClasses = useCustomStyles({})

    const theme = useTheme()

    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const sanityContext = useContext(SanityContext)

    return (
        <Grid container
              sx={{
                  zIndex: 1,
                  backgroundColor: props.backgroundColor?convertToHexCode(props.backgroundColor):COLORS.LIGHTGRAY,
                  position:"relative"
              }}
        >
            <Grid container className={classes.root}  sx={{
                    backgroundImage: `url(${sanityContext.urlFor(props.backgroundImgSrc ?? "")?.url()})`,
                    backgroundSize: "cover",}}>
            <Grid container justifyContent="flex-start" sx={{paddingTop: mdDown ? 0 : (props.topPadding ?? "0px")}}>
                <Grid item xs={12}>
                    {props.pageFooter && <FooterMenuContainer
                        backgroundColor={props.backgroundColor}
                        isSocialMediaBlock={props.isSocialMediaBlock}
                        pageFooterMenu={props.pageFooter}
                        updateIsLoading={props.updateIsLoading}
                    />}
                </Grid>
            </Grid>
        </Grid>
            {!props.pageFooter?.isHideOverlay?<Grid container item className={globalClasses.fullSectionOverlay}>
                {/*Makes the background image darker*/}
            </Grid>:<></>}
        </Grid>
    )
}

export default Footer