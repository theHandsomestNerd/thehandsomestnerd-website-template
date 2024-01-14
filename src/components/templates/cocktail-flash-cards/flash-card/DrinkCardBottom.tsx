import React, {FunctionComponent} from 'react'
import {Grid, Typography} from "@mui/material";
import {
    SanityCocktailType,
    SanityGarnish,
    SanityMixingGlass,
    SanityMixingInstruction
} from "../../../../common/sanityIo/Types";
import {Close} from "@mui/icons-material";
import {cocktailUrlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";


interface IProps {
    currentCard?: SanityCocktailType
}

const DrinkCardBottom: FunctionComponent<IProps> = ({currentCard}: IProps) => {

    const getGlassPrep = (prepString: string) => {
        switch (prepString) {
            case 'ICE':
                return "ADD ice to the glass."
            case 'CHILLED':
                return "Chill the glass with water and ice."
            case 'STRAWBERRY_ICE':
                return "Add strawberry ice cubes to the glass."
            case 'SALT_RIM':
                return "Salt the rim of the glass."
            case 'CHILI_SALT_RIM':
                return "Chili salt the rim of the glass."
            case 'SUGAR_RIM':
                return "Sugar the rim of the glass"
            case 'RED_SUGAR_RIM':
                return "Red sugar the rim of the glass"
            case 'CARAMEL_STRIPE':
                return "Caramel Stripe the inside of the glass"
            case 'CHOC_STRIPE':
                return "Chocolate Stripe the inside of the glass"
            case 'GREEN_SUGAR_RIM':
                return "Green sugar the rim of the glass"
            default:
                return prepString
        }

    }

    React.useEffect(() => {
        if (currentCard)
            console.log("currentCard", currentCard)
    }, [currentCard])

    return (<Grid container item>
        {/*<Grid item>*/}
        {/*    <Typography variant='h2' align='center' fontFamily='Covered By Your Grace'>*/}
        {/*        {currentCard?.title}*/}
        {/*    </Typography>*/}
        {/*</Grid>*/}
        {/*<Grid item container justifyContent='center'>*/}
        {/*    <Typography variant='subtitle1' align='center'>*/}
        {/*        {currentCard?.glass.sizeOz}oz {currentCard?.glass?.title}*/}
        {/*    </Typography>*/}
        {/*</Grid>*/}

        <Grid container item justifyContent='center'>
            <Grid item xs={2}>
                {currentCard?.mixingGlass[0]._type === "MixingGlass" && <Grid container item>
                    <Grid item container justifyContent='center'>
                        <img alt='drink type' height={42}
                             src={cocktailUrlFor(currentCard.mixingGlass[0].ingredient.liquorType?.imageSrc ?? "").url() ?? ""}/>
                    </Grid>
                    <Grid item container justifyContent='center'>
                        <Typography
                            variant='subtitle1'
                            textAlign='center'>{currentCard.mixingGlass[0].ingredient.title}</Typography>
                    </Grid>
                    <Grid item container justifyContent='center'>
                        <Typography
                            variant='subtitle2'>{currentCard.mixingGlass[0].ingredient.liquorType?.name}</Typography>
                    </Grid>
                </Grid>}
            </Grid>
            <Grid item xs={5}>
                {
                    currentCard?.mixingGlass?.map((mixin: (SanityMixingGlass | SanityGarnish), index) => {
                        if (mixin?._type === "MixingGlass") {
                            return <Grid container key={"mixin" + index} item justifyContent='center'>
                                <Grid container item spacing={1} justifyContent={'center'}>
                                    <Grid item>
                                        <Typography variant='subtitle2'>{`${mixin?.amount}oz`}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='subtitle2'>{mixin?.ingredient?.title}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        }

                    })
                }
                <Grid container item>
                    {
                        currentCard?.mixingGlassGarnishes?.map((mixin: (SanityGarnish), index) => {
                            if (mixin) {
                                return <Grid container item key={index}>
                                    <Grid item container xs={2}
                                          justifyContent='space-around' alignItems='center'
                                          alignContent='center'>
                                        <Typography>

                                        </Typography> <Close
                                        fontSize='small'/>
                                    </Grid>
                                    <Grid item><Typography>{mixin?.title.toLowerCase()}</Typography></Grid>
                                </Grid>
                            }

                        })
                    }
                </Grid>
            </Grid>
            <Grid item xs={5}>
                <Grid container item xs={11}>
                    {
                        currentCard?.glassPrep && currentCard?.glassPrep.length > 0 &&
                        <Grid item container>
                            {currentCard?.glassPrep?.map((prep, index) => <Grid item key={"prep" + index}>
                                <Typography
                                    variant='subtitle2'>
                                    {getGlassPrep(prep)}
                                </Typography>
                            </Grid>)}
                        </Grid>
                    }
                    {
                        currentCard?.instructions?.map((mixin: SanityMixingInstruction, index) => {
                            return <Grid container item key={'mixin' + index}>
                                <Grid item container>
                                    <Typography
                                        variant='subtitle2'>{`${mixin?.action} ${mixin?.instruction ? mixin?.instruction : ""}`}</Typography>
                                </Grid>
                                <Grid item container>
                                    {
                                        mixin?.mixingGlass?.map((mixin: (SanityMixingGlass | SanityGarnish), index) => {
                                            if (mixin?._type === "MixingGlass") {
                                                return <Grid container item key={"mixingglass" + index}>
                                                    <Grid item>
                                                        <Typography variant='subtitle2'>{mixin?.amount}oz</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography
                                                            variant='subtitle2'>{mixin?.ingredient?.title}</Typography>
                                                    </Grid>
                                                </Grid>
                                            }
                                            return null

                                        })
                                    }
                                    {
                                        mixin?.mixingGlassGarnishes?.map((mixin: (SanityGarnish), index) => {
                                            if (mixin) {
                                                return <Grid container item key={"garnish" + index}>
                                                    <Grid item><Typography
                                                        variant='subtitle2'>{mixin.title}</Typography></Grid>
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
        {/*{*/}
        {/*    currentCard?.garnish && currentCard?.garnish.length > 0 &&*/}
        {/*    <Grid container item justifyContent='center'>*/}

        {/*        <Grid container item justifyContent='flex-end' xs={8}>*/}
        {/*            <Grid item container>*/}
        {/*                <Typography variant='h6' fontFamily='Oswald'>*/}
        {/*                    Garnished By:*/}
        {/*                </Typography>*/}
        {/*            </Grid>*/}
        {/*            <Grid container item xs={11} style={{paddingLeft: "48px"}}>*/}
        {/*                {*/}
        {/*                    currentCard?.garnish?.map((garnishedBy: SanityGarnish, index) => {*/}
        {/*                        return <Grid container item key={index}>*/}
        {/*                            <Grid item container>*/}
        {/*                                <Typography variant='body2'>{garnishedBy.title}</Typography>*/}
        {/*                            </Grid>*/}
        {/*                        </Grid>*/}
        {/*                    })*/}
        {/*                }*/}
        {/*            </Grid>*/}
        {/*        </Grid>*/}
        {/*    </Grid>*/}
        {/*}*/}
        {/*<Grid container item justifyContent='center'>*/}
        {/*    <Grid item container justifyContent='flex-end' xs={8}>*/}
        {/*        <Grid item container>*/}
        {/*            <Typography variant='h6' fontFamily='Oswald'>*/}
        {/*                Recipe:*/}
        {/*            </Typography>*/}
        {/*        </Grid>*/}
        {/*        <Grid container item xs={11}>*/}
        {/*            {*/}
        {/*                currentCard?.instructions?.map((mixin: SanityMixingInstruction, index) => {*/}
        {/*                    return <Grid container item key={'mixin' + index}>*/}
        {/*                        <Grid item container>*/}
        {/*                            <Typography*/}
        {/*                                variant='body2'>{`${mixin?.action} ${mixin?.instruction ? mixin?.instruction : ""}`}</Typography>*/}
        {/*                        </Grid>*/}
        {/*                        <Grid item container style={{paddingLeft: "8px"}}>*/}
        {/*                            {*/}
        {/*                                mixin?.mixingGlass?.map((mixin: (SanityMixingGlass | SanityGarnish), index) => {*/}
        {/*                                    if (mixin?._type === "MixingGlass") {*/}
        {/*                                        return <Grid container item spacing={1} key={"mixingglass" + index}>*/}
        {/*                                            <Grid item container xs={2}*/}
        {/*                                                  justifyContent='flex-end'><Typography*/}
        {/*                                                variant='body2'>{mixin?.amount}oz</Typography></Grid> <Grid*/}
        {/*                                            item><Typography*/}
        {/*                                            variant='body2'>{mixin?.ingredient?.title}</Typography></Grid>*/}
        {/*                                        </Grid>*/}
        {/*                                    }*/}

        {/*                                })*/}
        {/*                            }*/}
        {/*                            {*/}
        {/*                                mixin?.mixingGlassGarnishes?.map((mixin: (SanityGarnish), index) => {*/}
        {/*                                    if (mixin) {*/}
        {/*                                        return <Grid container item key={"garnish" + index}>*/}
        {/*                                            <Grid item><Typography*/}
        {/*                                                variant='body2'>{mixin.title}</Typography></Grid>*/}
        {/*                                        </Grid>*/}
        {/*                                    }*/}

        {/*                                })*/}
        {/*                            }*/}
        {/*                        </Grid>*/}
        {/*                    </Grid>*/}
        {/*                })*/}
        {/*            }*/}
        {/*        </Grid>*/}
        {/*    </Grid>*/}
        {/*</Grid>*/}

    </Grid>)
}

export default DrinkCardBottom