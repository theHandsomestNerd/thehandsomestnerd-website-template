import{FunctionComponent} from 'react'
import {Chip, Grid, Typography} from "@mui/material";
import {
    SanityCocktailType,
    SanityGarnish,
    SanityMixingGlass,
    SanityMixingInstruction
} from "../../../../common/sanityIo/Types";
import {Close} from "@mui/icons-material";


interface IProps {
    currentCard?: SanityCocktailType
}

const FlashCardBack: FunctionComponent<IProps> = ({currentCard}: IProps) => {

    const getGlassPrep = (prepString: string) => {
        switch (prepString) {
            case 'ICE':
                return "ice"
            case 'CHILLED':
                return "chilled"
            case 'STRAWBERRY_ICE':
                return "strawberry ice cubes"
            case 'SALT_RIM':
                return "salt on rim"
            case 'CHILI_SALT_RIM':
                return "chili salt on rim"
            case 'SUGAR_RIM':
                return "sugar on rim"
            case 'RED_SUGAR_RIM':
                return "red sugar on rim"
            case 'CARAMEL_STRIPE':
                return "caramel stripes"
            case 'CHOC_STRIPE':
                return "chocolate stripes"
            case 'GREEN_SUGAR_RIM':
                return "green sugar on rim"
            default:
                return prepString
        }

    }

    return (<Grid container item spacing={2} justifyContent='center'>
        <Grid item>
            <Typography variant='h2' align='center' fontFamily='Covered By Your Grace'>
                {currentCard?.title}
            </Typography>
        </Grid>
        <Grid item container justifyContent='center'>
            <Typography variant='subtitle1' align='center'>
                {currentCard?.glass.sizeOz}oz {currentCard?.glass?.title}
            </Typography>
        </Grid>
        {
            currentCard?.glassPrep && currentCard?.glassPrep.length > 0 &&
            <Grid item container justifyContent='center' spacing={1}>
                {currentCard?.glassPrep?.map((prep, index) => <Grid item key={"prep" + index}><Chip color='secondary'
                                                                                                    label={<Typography
                                                                                                        variant='subtitle2'
                                                                                                        align='center'>
                                                                                                        {getGlassPrep(prep)}
                                                                                                    </Typography>}></Chip></Grid>)}
            </Grid>
        }
        <Grid container item justifyContent='center'>
            <Grid item xs={8}>
                <Grid item container>
                    <Typography variant='h6' fontFamily='Oswald'>
                        Ingredients:
                    </Typography>
                </Grid>
                <Grid container item>
                    <Grid container item style={{paddingLeft: "48px"}}>
                        {
                            // @ts-ignore
                            currentCard?.mixingGlass?.map((mixin: (SanityMixingGlass | SanityGarnish), index) => {
                                if (mixin?._type === "MixingGlass") {
                                    return <Grid container item spacing={1} key={"mixin" + index}>
                                        <Grid item container xs={2}
                                              justifyContent='flex-end' alignItems='center' wrap='nowrap'><Typography
                                            variant='body2'>{mixin?.amount}</Typography><Typography textAlign='left'
                                                                                                    variant='subtitle1'>oz</Typography></Grid>
                                        <Grid item container xs={10} wrap='nowrap'><Typography
                                            variant='body2'>{mixin?.ingredient?.title}</Typography></Grid>
                                    </Grid>
                                }

                            })
                        }
                    </Grid>
                    <Grid container item>
                        {
                            // @ts-ignore
                            currentCard?.mixingGlassGarnishes?.map((mixin: (SanityGarnish), index) => {
                                if (mixin) {
                                    return <Grid container item spacing={1} key={index}>
                                        <Grid item container xs={2}
                                              justifyContent='space-around' alignItems='center'
                                              alignContent='center'><Typography variant='body2'>1</Typography> <Close
                                            fontSize='small'/></Grid>
                                        <Grid item><Typography variant='body2'>{mixin?.title}</Typography></Grid>
                                    </Grid>
                                }

                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        {
            currentCard?.garnish && currentCard?.garnish.length > 0 &&
            <Grid container item justifyContent='center'>

                <Grid container item justifyContent='flex-end' xs={8}>
                    <Grid item container>
                        <Typography variant='h6' fontFamily='Oswald'>
                            Garnished By:
                        </Typography>
                    </Grid>
                    <Grid container item xs={11} style={{paddingLeft: "48px"}}>
                        {
                            currentCard?.garnish?.map((garnishedBy: SanityGarnish, index) => {
                                return <Grid container item key={index}>
                                    <Grid item container>
                                        <Typography variant='body2'>{garnishedBy.title}</Typography>
                                    </Grid>
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        }
        <Grid container item justifyContent='center'>
            <Grid item container justifyContent='flex-end' xs={8}>
                <Grid item container>
                    <Typography variant='h6' fontFamily='Oswald'>
                        Recipe:
                    </Typography>
                </Grid>
                <Grid container item xs={11}>
                    {
                        currentCard?.instructions?.map((mixin: SanityMixingInstruction, index) => {
                            return <Grid container item key={'mixin' + index}>
                                <Grid item container>
                                    <Typography
                                        variant='body2'>{`${mixin?.action} ${mixin?.instruction ? mixin?.instruction : ""}`}</Typography>
                                </Grid>
                                <Grid item container style={{paddingLeft: "8px"}}>
                                    {
                                        // @ts-ignore
                                        mixin?.mixingGlass?.map((mixin: (SanityMixingGlass | SanityGarnish), index) => {
                                            if (mixin?._type === "MixingGlass") {
                                                return <Grid container item spacing={1} key={"mixingglass" + index}>
                                                    <Grid item container xs={2}
                                                          justifyContent='flex-end'><Typography
                                                        variant='body2'>{mixin?.amount}oz</Typography></Grid> <Grid
                                                    item><Typography
                                                    variant='body2'>{mixin?.ingredient?.title}</Typography></Grid>
                                                </Grid>
                                            }

                                        })
                                    }
                                    {
                                        // @ts-ignore
                                        mixin?.mixingGlassGarnishes?.map((mixin: (SanityGarnish), index) => {
                                            if (mixin) {
                                                return <Grid container item key={"garnish" + index}>
                                                    <Grid item><Typography
                                                        variant='body2'>{mixin.title}</Typography></Grid>
                                                </Grid>
                                            }

                                        })
                                    }
                                </Grid>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>

    </Grid>)
}

export default FlashCardBack