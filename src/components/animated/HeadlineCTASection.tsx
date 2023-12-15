import React, {FunctionComponent, useContext} from 'react'
import {Button, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import firebaseAnalyticsClient from "../../common/firebase/FirebaseAnalyticsClient";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {HeadlineCTASectionType} from "../BlockContentTypes";
import PageContext from "../page-context/PageContext";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps { sectionData: HeadlineCTASectionType,  }

const HeadlineCTASection: FunctionComponent<IProps> = (props:IProps) => {
    const theme = useTheme()
    const pageContext = useContext(PageContext)

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    React.useEffect(()=>{
    }, [])

    return (<Grid container item sx={{
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: `url(${urlFor(props.sectionData.backgroundImgSrc).url()})`,
        backgroundSize: "40%, 40%",
        // backgroundRepeat: "no-repeat",
        // borderRadius: mdDown?0:1,
        border:mdDown || props.sectionData.isHideBorder ?'none':`1px solid ${theme.palette.primary.main}`,
        marginLeft: mdDown?0:props.sectionData.insetLeft,
        marginRight: mdDown?0:props.sectionData.insetRight,
        marginTop: mdDown?0:props.sectionData.insetTop,
        marginBottom: mdDown?0:props.sectionData.insetBottom,
    }}>
        <Grid container alignItems='center' alignContent='center' item justifyContent={smDown?'center':'flex-start'}
              style={{ padding: "40px"}} sm={8}>
            <Typography variant={'h4'} color='primary'>
                {props.sectionData.contentText}
            </Typography>
        </Grid>
        <Grid style={{padding: theme.spacing(!smDown?5:0,5,5,5)}} container item justifyContent={smDown?'center':'flex-end'} alignItems='center' alignContent='center' sm={4} >
            <Button color='primary' variant='contained'
                    onClick={() => {
                        firebaseAnalyticsClient.ctaClick("hero-section", props.sectionData.ctaButtonText, pageContext.analyticsId,)
                    }}
                    href={props.sectionData.ctaButtonLink ?? ""}>
                <Typography variant='button'
                            color='secondary'>{props.sectionData.ctaButtonText}</Typography>
            </Button>
        </Grid>
    </Grid>)
}

export default HeadlineCTASection