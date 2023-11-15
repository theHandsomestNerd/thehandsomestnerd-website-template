import React, {FunctionComponent} from 'react'
import {StyledEngineProvider, ThemeProvider} from "@mui/material/styles";
import {Button, ButtonGroup, Chip, Grid, IconButton, Modal, Typography, useTheme} from '@mui/material'
import {ResumePortfolioItem, ResumePortfolioSectionType} from "../../../BlockContentTypes";
import TheWebsiteTheme from "../../../../theme/Theme";
import useThwCommonStyles from "../../../../common/sanityIo/ThwCommonStyles";
import {urlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";
import {Close} from "@mui/icons-material";
import dateUtils from "../../../../utils/dateUtils";

interface IProps {
    sectionData: ResumePortfolioSectionType
}

const ResumePortfolioSection: FunctionComponent<IProps> = (props: IProps) => {
    const globalClasses = useThwCommonStyles()
    const theme = useTheme()

    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [currentItem, setCurrentItem] = React.useState<ResumePortfolioItem>()

    const sendToModal = (portfolioItem: ResumePortfolioItem) => {
        setCurrentItem(portfolioItem)

        setIsOpen(true)
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TheWebsiteTheme
            }><Grid container item style={{padding: theme.spacing(4)}}
                    className={globalClasses.resumeSection} justifyContent={'center'}>
                <Grid
                    container item spacing={3} justifyContent='center'>
                    <Grid item container alignContent='flex-start' spacing={1}>
                        <Grid item container>
                            <Typography
                                variant='h6'
                            >{props.sectionData.title}</Typography>
                            <Typography
                                variant='h6'
                                color='primary'
                                display='inline'
                            >.
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <Typography variant='body1'>{props.sectionData.introduction}</Typography></Grid>
                    </Grid>
                    <Grid item container justifyContent={'center'} xs={10} justifySelf={'center'}>
                        {
                            props.sectionData.portfolioEntries?.map((portfolioItem: ResumePortfolioItem, index2: number) => {
                                return <Grid key={index2}
                                             role='portfoliobutton'
                                             style={{backgroundColor: index2 % 2 === 1 ? "whitesmoke" : "white"}}
                                             container item xs={6} sm={4} lg={4} xl={4} alignContent='flex-start'
                                             justifyContent='center'>
                                    <Button fullWidth onClick={(e) => sendToModal(portfolioItem)}>
                                        <Grid item container>
                                            <Grid container item spacing={2} justifyContent='center'>
                                                <Grid item xs={11} sm={11} container justifyContent='center'
                                                      style={{
                                                          backgroundImage: `url(${urlFor(portfolioItem?.coverImage ?? "").url() ?? ""})`,
                                                          backgroundSize: "cover",
                                                          backgroundPosition: "top center",
                                                          backgroundRepeat: "no-repeat",
                                                          width: "100%",
                                                          minHeight: "200px"
                                                      }}
                                                >
                                                </Grid>
                                            </Grid>
                                            <Grid container item justifyContent='center'
                                                  style={{marginTop: theme.spacing(2)}}>
                                                <Typography display='inline'
                                                            variant='body1'
                                                >{dateUtils.MonthYear(portfolioItem?.inceptionDate)}</Typography>
                                            </Grid>
                                            <Grid container item justifyContent='center' alignContent={'center'}>
                                                <Typography style={{minHeight: "60px"}}
                                                            variant='body2'>{portfolioItem?.title}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Button>
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
                                                <img alt={'imageGalleryEntry'} src={urlFor(image ?? "").url() ?? ""} width={"100%"}/>
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
            </Grid></ThemeProvider>
        </StyledEngineProvider>
    );
}

export default ResumePortfolioSection