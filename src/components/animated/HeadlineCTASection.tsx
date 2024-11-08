import {FunctionComponent, useContext} from 'react'
import {Button, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {HeadlineCTASectionType} from "../BlockContentTypes";
import PageContext from "../page-context/PageContext";
import FirebaseContext from "../../common/firebase/firebase-context/FirebaseContext";
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";


interface IProps {
    sectionData: HeadlineCTASectionType,
}

const HeadlineCTASection: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()
    const pageContext = useContext(PageContext)
    const firebaseContext = useContext(FirebaseContext)

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const sanityContext = useContext(SanityContext)

    return (<Grid container item sx={{
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: `url(${sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.sectionData.backgroundImgSrc)})`,
        backgroundSize: "40%, 40%",
        // backgroundRepeat: "no-repeat",
        // borderRadius: mdDown?0:1,
        border: mdDown || props.sectionData.isHideBorder ? 'none' : `1px solid ${theme.palette.primary.main}`,
        marginLeft: mdDown ? 0 : props.sectionData.insetLeft,
        marginRight: mdDown ? 0 : props.sectionData.insetRight,
        marginTop: mdDown ? 0 : props.sectionData.insetTop,
        marginBottom: mdDown ? 0 : props.sectionData.insetBottom,
    }}>
        <Grid container alignItems='center' alignContent='center' item justifyContent={smDown ? 'center' : 'flex-start'}
              style={{padding: "40px"}} sm={8}>
            <Typography variant={'h4'} color='primary'>
                {props.sectionData.contentText}
            </Typography>
        </Grid>
        <Grid style={{padding: theme.spacing(!smDown ? 5 : 0, 5, 5, 5)}} container item
              justifyContent={smDown ? 'center' : 'flex-end'} alignItems='center' alignContent='center' sm={4}>
            <Button color='primary' variant='contained'
                    onClick={() => {
                        firebaseContext.ctaClick && firebaseContext.ctaClick("hero-section", props.sectionData.ctaButtonText, pageContext.analyticsId,)
                    }}
                    href={props.sectionData.ctaButtonLink ?? ""}>
                <Typography variant='button'
                            color='secondary'>{props.sectionData.ctaButtonText}</Typography>
            </Button>
        </Grid>
    </Grid>)
}

export default HeadlineCTASection