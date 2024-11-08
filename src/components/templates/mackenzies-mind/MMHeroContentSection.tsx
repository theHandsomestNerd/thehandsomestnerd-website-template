import{FunctionComponent, useContext} from 'react'
import {Theme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {Button, Grid, Typography} from '@mui/material'
import {ThwHeroContentSectionType} from "../../BlockContentTypes";
import PageContext from "../../page-context/PageContext";
import {COLORS} from "../../../theme/common/ColorPalette";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    sectionData: ThwHeroContentSectionType
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
        maxHeight: '321px',
        backgroundColor: COLORS.DARKGRAY,
        position: "relative"
    }),
    contentSection: {
        height: '310px',
        marginTop: '16px',
        backgroundColor: 'transparent',
    },
    contentBullets: {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: '26px',
    }
}))

const MMHeroContentSection: FunctionComponent<IProps> = (props) => {
    const firebaseContext = useContext(FirebaseContext)
    const sanityContext = useContext(SanityContext)

    let classParameters: CSSProps = {
        heroBaseImageUrl: (sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.sectionData.heroImage)) ?? "",
    }

    if (props.sectionData.heroImageBackground) {
        classParameters = {
            ...classParameters,
            heroOverlay: (sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.sectionData.heroImageBackground)) ?? ""
        }
    }

    const pageContext = useContext(PageContext)

    const classes = useStyles(classParameters)
    return (
        <Grid container item className={classes.marketingBackground}>
            {/*<Grid container item*/}
            {/*      className={clsx(globalClasses.fullSection, globalClasses.fullSectionOverlay)}>*/}
            {/*</Grid>*/}
            <Grid container direction='column' style={{zIndex: 2}}>
                <Grid item>
                    <Grid container className={classes.contentSection} item xs={11} sm={9} md={6}>
                        <Grid container direction='column' style={{paddingLeft: "40px", paddingTop: "80px"}}>
                            <Grid item style={{marginBottom: "30px"}}>
                                <Typography variant='h1'
                                            color={'primary'} style={{
                                    fontFamily: "Oswald"

                                    ,
                                }}>{props.sectionData.contentTitle}</Typography>
                            </Grid>
                            <Grid container item>
                                <Button color='primary' variant='text'
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

export default MMHeroContentSection