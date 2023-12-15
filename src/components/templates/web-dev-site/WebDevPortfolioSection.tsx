import React, {FunctionComponent, useContext} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Button, ButtonGroup, Chip, Grid, IconButton, Modal, Typography, useMediaQuery, useTheme} from '@mui/material'
import {ResumePortfolioItem, ResumePortfolioSectionType} from "../../BlockContentTypes";
import {COLORS} from "../../../theme/common/ColorPalette";
import {urlFor} from "../../block-content-ui/static-pages/cmsStaticPagesClient";
import {Close} from "@mui/icons-material";
import firebaseAnalyticsClient from "../../../common/firebase/FirebaseAnalyticsClient";
import PageContext from "../../page-context/PageContext";
import CustomizedThemeContext from "../../customized-theme-provider/CustomizedThemeContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: '#131313',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
}))

interface IProps {
    sectionData: ResumePortfolioSectionType
    index?: number
}

const COLOR_ROTATION = ["#d9dde9", "#333784"]
const COLOR_ROTATION_FONT: any[] = ["textSecondary", "textPrimary",]

const WebDevPortfolioSection: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()
    const classes = useStyles()

    const customizedThemeContext = useContext(CustomizedThemeContext)

    const xsOnly = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.only('xs'))
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [currentItem, setCurrentItem] = React.useState<ResumePortfolioItem>()

    const sendToModal = (portfolioItem: ResumePortfolioItem) => {
        setCurrentItem(portfolioItem)

        setIsOpen(true)
    }
    const pageContext = useContext(PageContext)

    const LearnMoreButton = (props: any) => {
        return <Grid item container md={8}>
            {props.learnMoreText && props.learnMoreText.length > 0 &&
                <Button fullWidth
                        onClick={() => {

                            sendToModal(props.portfolioItem)
                            return firebaseAnalyticsClient.ctaClick(props.service.slug?.current ?? "", props.service.learnMoreText, pageContext.analyticsId,)
                        }
                        } color={props.index % 2 === 0 ? 'primary' : 'secondary'} href={props.portfolioItem.prodLink}
                        variant='outlined'><Typography variant='button'
                                                       noWrap>{props.learnMoreText}</Typography></Button>}
        </Grid>
    }

    const mdDown = useMediaQuery(customizedThemeContext.customizedTheme.breakpoints.down('md'))
    return (

                <Grid container item
                      className={classes.root}>
                    <Grid
                        container item spacing={3} justifyContent='center'>
                        <Grid item container alignContent='flex-start' spacing={1} xs={11}>
                            <Grid item container>
                                <Typography variant='subtitle2'
                                            color='secondary'
                                            style={{color: COLORS.AQUA, fontFamily: "Elaine Sans", lineHeight: 1}}
                                >{props.sectionData?.preTitle}</Typography>
                            </Grid>
                            <Grid item container>
                                <Typography
                                    variant='h2'
                                    color='primary'
                                    style={{fontFamily: "Elaine Sans"}}
                                >{props.sectionData.title}
                                </Typography>
                            </Grid>
                            <Grid item container xs={8}>
                                <Typography color='primary' variant='body1'
                                            style={{fontFamily: "Raleway"}}>{props.sectionData.introduction}</Typography></Grid>
                        </Grid>
                        <Grid item container justifyContent={xsOnly ? 'center' : 'flex-start'} xs={11}>
                            {
                                props.sectionData.portfolioEntries?.map((portfolioItem: ResumePortfolioItem, index2: number) => {
                                    return <Grid container item key={index2}>
                                        <Grid container item direction={index2%2 == 0?"row":"row-reverse"}>
                                            <Grid container item md={6} style={{
                                                backgroundImage: `url('${urlFor(portfolioItem.coverImage ?? "").url()}')`,
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
                                                minHeight: "400px"
                                            }}></Grid>
                                            <Grid container item md={6}
                                                  style={{
                                                      padding: theme.spacing(mdDown ? 4 : 6),
                                                      backgroundColor: COLOR_ROTATION[(index2 + 1 ?? 1) % 2]
                                                  }}>
                                                <Grid item container>
                                                    {portfolioItem.skillsHighlighted?.map((skill, skillIndex: number) => {
                                                            return <Grid container key={skillIndex} item wrap='nowrap'
                                                                         style={{
                                                                             width: "max-content",
                                                                             // padding: "0 !important",
                                                                             // backgroundColor: "red",
                                                                             color:COLORS.AQUA,
                                                                         }}>
                                                                <Grid item container>
                                                                    <Typography variant='subtitle2'
                                                                                color='inherit'
                                                                                noWrap
                                                                                style={{
                                                                                    textTransform: "uppercase",
                                                                                    fontWeight: 900,
                                                                                    fontFamily: "Elaine Sans",
                                                                                    letterSpacing: ".15em"
                                                                                }}
                                                                    >{skill.title}</Typography>
                                                                </Grid>
                                                                <Grid item container>
                                                                    {
                                                                        (skillIndex < (portfolioItem.skillsHighlighted?.length ?? 0) - 1) &&

                                                                        <Typography variant='subtitle1'
                                                                                    color='inherit'>•</Typography>
                                                                    }
                                                                </Grid>
                                                            </Grid>
                                                        }
                                                    )
                                                    }
                                                </Grid>
                                                <Grid container item>
                                                    <Grid item xs={6}><Typography
                                                        gutterBottom
                                                        variant='h3' style={{fontFamily: "Elaine Sans"}}
                                                        color={COLOR_ROTATION_FONT[(index2 + 1 ?? 1) % 2]}>{portfolioItem?.title}</Typography></Grid>
                                                    <Grid container item>
                                                        <Typography variant='body1'
                                                                    gutterBottom
                                                                    style={{fontFamily: "Raleway", marginBottom: "16px"}}
                                                                    color={COLOR_ROTATION_FONT[(index2 + 1 ?? 1) % 2]}
                                                        >{portfolioItem.detailDescription}</Typography>
                                                    </Grid>
                                                    <Grid container item>
                                                        {<LearnMoreButton learnMoreText={"Learn More"}
                                                                          portfolioItem={portfolioItem}
                                                                          index={index2}/>}
                                                    </Grid>


                                                </Grid>
                                            </Grid>
                                        </Grid>


                                        {/*<Button onClick={(e) => sendToModal(portfolioItem)}>*/}


                                        {/*    <Grid*/}
                                        {/*        item container*/}
                                        {/*        style={{*/}
                                        {/*            borderBottom: `1px solid ${index2 >= (props.sectionData.portfolioEntries?.length ?? 0) - 2 ? "transparent" : COLORS.LIGHTGRAY}`,*/}
                                        {/*        }} xs={12}>*/}
                                        {/*        <Grid container item spacing={2} justifyContent='center'>*/}
                                        {/*            <Grid item xs={11} sm={12} container justifyContent='center'>*/}
                                        {/*                <img src={urlFor(portfolioItem?.coverImage ?? "").url() ?? ""}*/}
                                        {/*                     style={{minHeight: 120, minWidth: 120, maxHeight: 300, maxWidth: 300}}*/}
                                        {/*                     height={"100%"}/>*/}
                                        {/*            </Grid>*/}
                                        {/*        </Grid>*/}
                                        {/*        <Grid container item justifyContent='center' style={{marginTop: theme.spacing(2)}}>*/}
                                        {/*            <Typography*/}
                                        {/*                variant='body2'>{portfolioItem?.title}</Typography>*/}
                                        {/*        </Grid>*/}
                                        {/*        <Grid container item justifyContent='center'>*/}
                                        {/*            <Typography display='inline'*/}
                                        {/*                        variant='body1'*/}
                                        {/*            >{dateUtils.MonthYear(portfolioItem?.inceptionDate)}</Typography>*/}
                                        {/*        </Grid>*/}
                                        {/*    </Grid>*/}
                                        {/*</Button>*/}
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Grid>
                    <Modal open={isOpen}>
                        <Grid container item justifyContent='center' alignContent='center' alignItems='center'
                              style={{width: "100vw", height: "100vh", position: "relative"}}>
                            <IconButton
                                color='secondary'
                                style={{position: "absolute", top: 0, right: 0}}
                                onClick={() => setIsOpen(false)}
                                size="large"><Close fontSize={'large'}/></IconButton>
                            <Grid container sm={8} item style={{
                                backgroundColor: "white",
                                padding: theme.spacing(4),
                                maxHeight: "800px",
                                overflowY: "scroll",
                                maxWidth: "100%"
                            }} spacing={2}>
                                <Grid item container><Typography variant='h3'>{currentItem?.detailTitle}</Typography>
                                </Grid>
                                <Grid item container><Typography
                                    variant='body1'>{currentItem?.detailDescription}</Typography></Grid>
                                <Grid item container spacing={1}>
                                    {currentItem?.skillsHighlighted?.map((skill) => (<Grid item>
                                        <Chip color='primary' label={skill.title}/>
                                    </Grid>))}
                                </Grid>
                                <Grid item container>{currentItem?.inceptionDate?.toString()}</Grid>
                                <Grid item container justifyContent='center'>
                                    <Grid item container justifyContent='center'>
                                        {currentItem?.imageGallery?.map((image) => (
                                            <Grid item container xs={11} justifyContent='center'>
                                                <Grid item>
                                                    <img src={urlFor(image ?? "").url() ?? ""} width={"100%"}/>
                                                </Grid>
                                            </Grid>))}
                                    </Grid>
                                </Grid>
                                <Grid item container justifyContent='center'>
                                    <ButtonGroup fullWidth style={{marginTop: theme.spacing(4)}}>
                                        <Button variant='contained' color="primary" href={currentItem?.linkToProd}>
                                            Go to this Project
                                        </Button>
                                        <Button variant='contained' color='secondary' onClick={() => setIsOpen(false)}>
                                            Back to Resume
                                        </Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Modal>
                </Grid>
    );
}

export default WebDevPortfolioSection