import React, {FunctionComponent} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {Button, ButtonGroup, Chip, Grid, IconButton, Modal, Typography, useTheme} from "@mui/material";
import {Close} from "@mui/icons-material";
import {urlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";
import {ResumePortfolioItem} from "../../../BlockContentTypes";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    currentItem?: ResumePortfolioItem,
    isOpen?: boolean
    setIsOpen: (open: boolean) => void
}

const PortfolioItemModal: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()

    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const setOpenWrapper = (theValue:boolean)=>{
        setIsOpen(theValue)
        props.setIsOpen(theValue)
    }

    React.useEffect(() => {
        // if (props.isOpen) {
            setIsOpen(!!props.isOpen)
        // }
    }, [props.isOpen])

    return (<Modal open={isOpen} onClick={() => setIsOpen(false)}>
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
                <Grid item container><Typography variant='h3'>{props.currentItem?.detailTitle}</Typography>
                </Grid>
                <Grid item container><Typography
                    variant='body1'>{props.currentItem?.detailDescription}</Typography></Grid>
                <Grid item container spacing={1}>
                    {props.currentItem?.skillsHighlighted?.map((skill) => (<Grid item>
                        <Chip color='primary' label={skill.title}/>
                    </Grid>))}
                </Grid>
                <Grid item container>{props.currentItem?.inceptionDate?.toString()}</Grid>
                <Grid item container justifyContent='center'>
                    <Grid item container justifyContent='center'>
                        {props.currentItem?.imageGallery?.map((image) => (
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
                        <Button variant='contained' color="primary" href={props.currentItem?.linkToProd}>
                            Go to this Project
                        </Button>
                        <Button variant='contained' color='secondary' onClick={() => setOpenWrapper(false)}>
                            Back to Resume
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>
    </Modal>)
}

export default PortfolioItemModal