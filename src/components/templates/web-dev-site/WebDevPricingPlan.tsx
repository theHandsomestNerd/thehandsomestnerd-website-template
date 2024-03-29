import{FunctionComponent, useContext} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Button, Grid, Typography} from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import PageContext from "../../page-context/PageContext";
import {PricingPlanNoRefType} from "../../BlockContentTypes";
import FirebaseContext from "../../../common/firebase/firebase-context/FirebaseContext";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4)
    },
}))

interface IProps {
    step: PricingPlanNoRefType
    hideLearnMoreButton?: boolean
    hideCtaButton?: boolean
    source?: string
    showAmenities?: boolean
    index?: number
}

const COLOR_ROTATION = ["#cd3647", "#343656", "#333784"]

const WebDevPricingPlan: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)
    const classes = useStyles()
    const firebaseContext = useContext(FirebaseContext)

    const LearnMoreButton = () => {
        return <Grid item container sm={8}>
            {props.step.learnMoreText && props.step?.learnMoreText.length > 0 &&
                <Button fullWidth
                        sx={{borderRadius:"32px"}}
                        onClick={() =>
                            firebaseContext.analytics.ctaClick(props.step.slug?.current ?? "", props.step.learnMoreText ?? "", pageContext.analyticsId,)

                        } color='primary' href={props.step.learnMoreLink}
                        variant='outlined'><Typography variant='button'
                                                       noWrap>{props.step.learnMoreText}</Typography></Button>}
        </Grid>
    }

    return (
                <Grid className={classes.root} key={uuidv4()} container item xs={12} sm={12} md={6}
                      style={{backgroundColor: COLOR_ROTATION[(props.index ?? 0) % 3]}}>
                    <Grid container item direction='column'>
                        <Grid container item spacing={2}>
                            <Grid container item alignContent='center' justifyContent='space-between' alignItems='center' wrap='nowrap'>
                                <Grid item xs={6}><Typography
                                    variant='h3' style={{fontFamily:"Elaine Sans"}}
                                    color='primary'>{props.step.cost}</Typography></Grid>
                                <Grid item>
                                    <Grid item xs={6}><Typography
                                        variant='h1' style={{fontFamily:"Elaine Sans", color: "rgba(255,255,255,.3)"}}
                                        color='primary'>{props.step.title}</Typography></Grid>
                                </Grid>
                            </Grid>
                            <Grid container item>
                                {props.step.contentTexts?.map((textContent: string) => {
                                    return <Grid container item sx={{
                                        borderLeft: "1px solid whitesmoke",
                                        marginBottom: "8px",
                                        paddingLeft: "8px"
                                    }}>
                                        <Grid item container>
                                            <Typography color='textPrimary' fontFamily="Raleway"
                                                        >{textContent}</Typography>
                                        </Grid>
                                    </Grid>
                                })}
                            </Grid>
                            <Grid container item>
                                {!props.hideLearnMoreButton && <LearnMoreButton/>}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
    );
}

export default WebDevPricingPlan