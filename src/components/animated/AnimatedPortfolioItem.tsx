import{FunctionComponent, useContext} from 'react'
import {Box, Button, Grid, IconButton, Typography, useTheme} from "@mui/material";
import {ArrowRightAlt} from "@mui/icons-material";
import {AnimatedPortfolioItemType} from "../BlockContentTypes";
import {motion, useAnimationControls} from 'framer-motion';
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";
import {v4 as uuidv4} from 'uuid'


interface IProps { portfolioItem?:AnimatedPortfolioItemType, action:(item:AnimatedPortfolioItemType|undefined)=>void }

const AnimatedPortfolioItem: FunctionComponent<IProps> = (props:IProps) => {
    const theme = useTheme()
    const sanityContext = useContext(SanityContext)

    const controls = useAnimationControls()

    const animateServiceHover = async () => {
        controls.start({scale: 1.01, opacity:1}, {duration: .5})
    }

    const animateServiceNoHover = async () => {
        controls.start({scale: 1, opacity:.9}, {duration: .25})
    }

    return (<Grid
                  role='portfoliobutton'
                  key={uuidv4()}
                  container item xs={12} md={6} lg={4} alignContent='flex-start'
                  justifyContent='center' overflow='hidden' borderRadius={theme.shape.borderRadius}>
        <motion.div initial={{scale:1}} animate={controls} style={{width: "100%"}} onHoverStart={async () => {
            animateServiceHover()
        }} onHoverEnd={async () => {
            animateServiceNoHover()
        }}><Button style={{
            backgroundImage: `url(${sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.portfolioItem?.coverImage,300, 250)})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            margin: "8px",
            height: "500px"
        }} fullWidth onClick={() => props.action(props.portfolioItem)}>
            <Grid item container style={{position: "relative", height: "100%"}}>
                {/*{portfolioItem?.inceptionDate && <Grid container item justifyContent='center'>*/}
                {/*    <Typography display='inline'*/}
                {/*                variant='body1'*/}
                {/*    >{dateUtils.MonthYear(portfolioItem?.inceptionDate)}</Typography>*/}
                {/*</Grid>}*/}
                <Grid container item sx={{position: "absolute", bottom: -20}}
                      justifyContent='center'>
                    <Grid item xs={11} container justifyContent='space-between' sx={{
                        backgroundColor: theme.palette.background.paper,
                        marginBottom: "16px",
                        padding: theme.spacing(4, 3),
                        borderRadius: "4px"
                    }}>
                        <Grid container item xs={10}>
                            <Grid container item alignItems='center'>
                                <Box sx={{
                                    height: 3,
                                    width: 26,
                                    marginRight: "2px",
                                    backgroundColor: theme.palette.primary.main
                                }}>

                                </Box>
                                <Typography
                                    fontSize={'large'}
                                    textTransform={'uppercase'}
                                    variant='h6'
                                    align='left'>{props.portfolioItem?.preTitle}</Typography>
                            </Grid>
                            <Grid container item>
                                <Typography color='textPrimary'
                                            fontSize={'large'}
                                            variant='body2' align='left'
                                            gutterBottom>{props.portfolioItem?.title}</Typography>
                            </Grid>
                            <Grid container item style={{paddingRight: "8px"}}>
                                <Typography fontSize={'medium'} color='textPrimary'
                                            variant='body1' align='left'
                                            gutterBottom>{props.portfolioItem?.detailDescription}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={2} sm={2} justifyContent='flex-end'
                              alignContent='center' alignItems='center'>
                            <IconButton
                                color='primary'
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.dark
                                    },
                                    width: "50px",
                                    height: "50px",
                                    border: "1px solid black",
                                }}><ArrowRightAlt color='secondary'/></IconButton>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Button></motion.div>
    </Grid>)
}

export default AnimatedPortfolioItem