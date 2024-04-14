import{FunctionComponent, useContext} from 'react'
import {Theme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Button, Grid, Typography} from '@mui/material'
import {MfbtHeroContentSectionType} from "../../BlockContentTypes";
import clsx from "clsx";
import PageContext from "../../page-context/PageContext";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import MixedFeelingsByTTheme from "../../../theme/MixedFeelingsByTTheme";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    sectionData: MfbtHeroContentSectionType
}

interface CSSProps {
    heroBaseImageUrl: string,
    heroOverlay?: string | null
}

export const useStyles = makeStyles((theme: Theme) => ({
    marketingBackground: (props: CSSProps) => ({
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${props.heroBaseImageUrl}'), url('${props.heroOverlay}')`,
        backgroundSize: 'cover, contain',
        minHeight: '521px',
        backgroundColor: 'transparent',
        backgroundPosition:"right",
        position: "relative"
    }),
    contentSection: {
        height: '510px',
        marginTop: '16px',
        backgroundColor: 'transparent',
    },
    contentBullets: {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: '26px',
    }
}))

const MfbtHeroContentSection: FunctionComponent<IProps> = (props) => {
    const sanityContext = useContext(SanityContext)

    let classParameters: CSSProps = {
        heroBaseImageUrl: sanityContext.urlFor(props.sectionData.heroImage).url() ?? '',
    }

    if (props.sectionData.heroImageBackground) {
        classParameters = {
            ...classParameters,
            heroOverlay: sanityContext.urlFor(props.sectionData.heroImageBackground).url()
        }
    }

    const pageContext = useContext(PageContext)
    const firebaseContext = useContext(FirebaseContext)

    const classes = useStyles(classParameters)
    const globalClasses = useCustomStyles({})
    return (
        <Grid container item className={classes.marketingBackground}>
            <Grid container item
                  className={clsx(globalClasses.fullSection, globalClasses.fullscreenWhiteOverlay)}>
            </Grid>
            <Grid container direction='column' style={{zIndex: 2}}>
                <Grid item>
                    <Grid container className={classes.contentSection} item xs={11} sm={9} md={6}>
                        <Grid container direction='column' style={{paddingLeft: "40px", paddingTop: "80px"}}>
                            <Grid item>
                                <Typography variant='subtitle1'
                                            style={{color: MixedFeelingsByTTheme.palette.text.secondary}}>{props.sectionData.contentWelcomeMessage}</Typography>
                            </Grid>
                            <Grid item style={{marginBottom: "30px"}}>
                                <Typography variant='h3'
                                            color={'primary'}>{props.sectionData.contentTitle}</Typography>
                            </Grid>
                            <Grid container item className={classes.contentBullets}
                                  style={{marginBottom: "60px"}}>
                                <Typography variant='body1'
                                            color='textPrimary'>{props.sectionData.contentText}</Typography>
                            </Grid>
            <Grid container item>
                <Button color='secondary' variant='contained'
                        onClick={() => {
                            firebaseContext.ctaClick && firebaseContext.ctaClick("hero-section", props.sectionData.ctaButtonTitle, pageContext.analyticsId,)
                        }}
                        href={props.sectionData.ctaButtonLink ?? ""}>
                    <Typography variant='button'
                                color='textSecondary'>{props.sectionData.ctaButtonTitle}</Typography>
                </Button>
            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </Grid>
    )
}

export default MfbtHeroContentSection