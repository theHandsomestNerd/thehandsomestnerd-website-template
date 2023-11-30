import React, {FunctionComponent} from 'react'
import {Box, Button, ButtonGroup, Chip, Grid, IconButton, Modal, Typography, useTheme} from '@mui/material'
import {ArrowRightAlt, Close} from "@mui/icons-material";
import {AnimatedPortfolioItemType, AnimatedPortfolioSectionType} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import BulletedHeader from "./BulletedHeader";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import AnimatedPortfolioItem from "./AnimatedPortfolioItem";

export const useStyles = makeStyles((theme: Theme) => ({
    iconButton: {
        // root:{
        "&:hover": {
            backgroundColor: theme.palette.primary.dark
            // }
        }
    },
}))


interface IProps {
    sectionData: AnimatedPortfolioSectionType
}

const AnimatedPortfolioSection: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()
    const classes = useStyles()

    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [currentItem, setCurrentItem] = React.useState<AnimatedPortfolioItemType>()

    const sendToModal = (portfolioItem: AnimatedPortfolioItemType|undefined) => {
        setCurrentItem(portfolioItem)

        setIsOpen(true)
    }

    return (
        <Grid container item style={{padding: theme.spacing(2,4,12,4), borderBottom: "1px solid lightgray"}}
              justifyContent={'center'}>
            <Grid
                container item spacing={3} justifyContent='center'>
                <Grid item container alignContent='flex-start' spacing={1}>
                    <Grid item container>
                        <BulletedHeader isCenter={true} heroBullet={props.sectionData.heroBullet}
                                        textContent={props.sectionData.preTitle}/>
                    </Grid>
                    <Grid item container justifyContent='center'>
                        <Typography
                            variant='h6' align='center'
                        >{props.sectionData.title}</Typography>
                    </Grid>
                    {/*<Typography variant='body1'>{props.sectionData.preTitle}</Typography></Grid>*/}
                </Grid>
                <Grid item container justifyContent={'center'} xs={12} justifySelf={'center'}>
                    {
                        props.sectionData.portfolioEntries?.map((portfolioItem: AnimatedPortfolioItemType, index2: number) => {
                            return <AnimatedPortfolioItem action={()=>sendToModal(portfolioItem)} portfolioItem={portfolioItem}/>
                        })
                    }
                </Grid>
            </Grid>
            <Modal open={isOpen}>
                <Grid container item justifyContent='center' alignContent='center' alignItems='center'
                      style={{width: "100vw", height: "100vh", position: "relative"}} onClick={()=>{
                    setIsOpen(false)
                }}>
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
                    }} spacing={1}>
                        <Grid container item sx={{
                            backgroundImage: `url(${urlFor(currentItem?.coverImage ?? "").url() ?? ""})`,
                            backgroundSize: "cover",
                            backgroundPosition: "top center",
                            backgroundRepeat: "no-repeat",
                            // width: "100%",
                            // margin: "8px",
                            height: "300px"
                        }}>
                        </Grid>
                        <Grid item container justifyContent='flex-end'>{currentItem?.inceptionDate?.toString()}</Grid>
                        <Grid item container><Typography color='primary' variant='body1' textTransform={'uppercase'}>{currentItem?.preTitle}</Typography>
                        </Grid>
                        <Grid item container><Typography variant='h3'>{currentItem?.detailTitle}</Typography>
                        </Grid>
                        <Grid item container spacing={1}>
                            {currentItem?.skillsHighlighted?.map((skill) => (<Grid item>
                                <Chip color='primary' label={skill.title}/>
                            </Grid>))}
                        </Grid>
                        <Grid item container><Typography
                            variant='body1'>{currentItem?.detailDescription}</Typography></Grid>
                        <Grid item container justifyContent='center'>
                            <Grid item container justifyContent='center'>
                                {currentItem?.imageGallery?.map((image) => (
                                    <Grid item container xs={11} justifyContent='center'>
                                        <Grid item>
                                            <img alt={'imageGalleryEntry'} src={urlFor(image ?? "").url() ?? ""}
                                                 width={"100%"}/>
                                        </Grid>
                                    </Grid>))}
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='center'>
                            <ButtonGroup fullWidth style={{marginTop: theme.spacing(4)}}>
                                <Button variant='contained' color='secondary' onClick={() => setIsOpen(false)}>
                                    Back
                                </Button>
                                <Button variant='contained' color="primary" href={currentItem?.linkToProd}>
                                    Go to this Project
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Modal>
        </Grid>
    );
}

export default AnimatedPortfolioSection