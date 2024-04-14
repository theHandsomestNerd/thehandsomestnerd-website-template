import{FunctionComponent, useContext} from 'react'
import {ThwHeroContentSectionType} from "../../BlockContentTypes";
import clsx from "clsx";
import PageContext from "../../page-context/PageContext";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import {Theme} from "@mui/material/styles";
import {Button, Grid, Typography, useTheme} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    sectionData: ThwHeroContentSectionType
}

interface CSSProps {
    heroBaseImageUrl: string,
    heroOverlay?: string | null
}

const ThwHeroContentSection: FunctionComponent<IProps> = (props) => {
    const theme = useTheme()
    const sanityContext = useContext(SanityContext)


    let classParameters: CSSProps = {
        heroBaseImageUrl: sanityContext.urlFor(props.sectionData.heroImage).url() ?? '',
    }
    const useStyles = makeStyles((theme: Theme) => ({
        marketingBackground: (props: CSSProps) => ({
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url('${props.heroBaseImageUrl}'), url('${props.heroOverlay}')`,
            backgroundSize: 'cover, contain',
            minHeight: '521px',
            backgroundColor: 'transparent',
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
                      className={clsx(globalClasses.fullSection, globalClasses.fullSectionOverlay)}>
                </Grid>
                <Grid container direction='column' style={{zIndex: 2}}>
                    <Grid item>
                        <Grid container className={classes.contentSection} item xs={11} sm={9} md={6}>
                            <Grid container direction='column' style={{paddingLeft: "40px", paddingTop: "80px"}}>
                                <Grid item>
                                    <Typography variant='subtitle1'
                                                style={{color: theme.palette.text.secondary}}>{props.sectionData.contentWelcomeMessage}</Typography>
                                </Grid>
                                <Grid item style={{marginBottom: "30px"}}>
                                    <Typography variant='h3'
                                                color={'primary'}>{props.sectionData.contentTitle}</Typography>
                                </Grid>
                                <Grid container item className={classes.contentBullets}
                                      style={{marginBottom: "60px"}}>
                                    <Typography variant='body1'
                                                color='textSecondary'>{props.sectionData.contentText}</Typography>
                                </Grid>
                                <Grid container item>
                                    <Button color='primary' variant='contained'
                                            style={{paddingTop: "16px", paddingBottom : "16px"}}
                                            onClick={() => {
                                                firebaseContext.ctaClick && firebaseContext.ctaClick("hero-section", props.sectionData.ctaButtonTitle, pageContext.analyticsId,)
                                            }}
                                            href={props.sectionData.ctaButtonLink ?? ""}>
                                        <Typography variant='button'
                                                    color='secondary'>{props.sectionData.ctaButtonTitle}</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
    )
}

export default ThwHeroContentSection