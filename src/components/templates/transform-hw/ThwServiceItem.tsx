import{FunctionComponent, useContext} from 'react'
import {Button, Grid, Tooltip, Typography, useMediaQuery} from '@mui/material'
import ImageWIthButtonOverlay from "../../image-with-button-overlay/ImageWithButtonOverlay";
import {ImageWithButtonOverlayAligmentEnum} from "../../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import LoadingButton from "../../loading-button/LoadingButton";
import {v4 as uuidv4} from 'uuid'
import AmenitiesSection from "./AmenitiesSection";
import PageContext from "../../page-context/PageContext";
import {ThwServiceItemNoRefType} from "../../BlockContentTypes";
import TransformHWTheme from "../../../theme/TransformHWTheme";
import CustomizedThemeContext from "../../customized-theme-provider/CustomizedThemeContext";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";

interface IProps {
    service: ThwServiceItemNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?:string
    showAmenities?: boolean
}

const ThwServiceItem: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)
    const customizedThemeContext = useContext(CustomizedThemeContext)
    const firebaseContext = useContext(FirebaseContext)

    const mdDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('md'))
    const LearnMoreButton = () => {
        return <Grid item container justifyContent='center'>
            {props.service.learnMoreText && props.service?.learnMoreText.length > 0 &&
                <LoadingButton
                    clickHandler={()=>
                        firebaseContext.ctaClick && firebaseContext.ctaClick(props.service.slug?.current ?? "", props.service.learnMoreText, pageContext.analyticsId,)

                } color='secondary' href={props.service.learnMoreLink}
                               variant='outlined'><Typography variant='button'
                                                              noWrap>{props.service.learnMoreText}</Typography></LoadingButton>}
        </Grid>
    }

    return (
        <Grid key={uuidv4()} container item xs={12} sm={12} md={6} style={{marginBottom: TransformHWTheme.spacing(4)}}>
            <Grid container item direction='column' justifyContent='space-between' alignContent='center'
                  alignItems='center'>
                <Grid container item direction={"column"}>
                    <Grid item container>
                        <ImageWIthButtonOverlay
                            source={props.service.slug?.current}
                            // hideCtaButton={prop.hideCtaButton}
                            tooltip={'Click to Learn More'}
                            learnMoreLink={props.service.learnMoreLink}
                            buttonAlignment={mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}
                            imageAltText={props.service.imageSrcAltText}
                            variant='contained'
                            imageSrc={props.service.imageSrc} height={352}
                            ctaButtonText={props.service.ctaButtonText}
                            ctaButtonLink={!props.hideCtaButton ? props.service.ctaButtonLink : undefined}
                        />
                    </Grid>
                    <Tooltip title={<Typography variant='subtitle1' style={{fontWeight: "normal"}}>Click to Learn
                        More</Typography>}>
                        <Grid item container justifyContent='center'
                              style={{marginTop: "16px", marginBottom: "16px"}}>
                            <Button variant='text' color='secondary' href={props.service.learnMoreLink}><Typography
                                variant='body2' align='center'>{props.service.contentTitle}</Typography></Button>
                        </Grid>
                    </Tooltip>
                    <Grid item>
                        <Typography variant='body1' align='center'
                                    style={{marginBottom: "48px"}}>{props.service.contentText}</Typography>
                    </Grid>
                </Grid>
                {props.showAmenities &&
                    <AmenitiesSection service={props.service}/>}
                {!props.hideLearnMoreButton && <LearnMoreButton />}
            </Grid>
        </Grid>)
}

export default ThwServiceItem