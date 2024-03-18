import React, {FunctionComponent, useContext} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Button, ButtonGroup, Chip, Grid, IconButton, Modal, Typography, useTheme} from "@mui/material";
import {Close} from "@mui/icons-material";
import {ResumePortfolioItem} from "../../../BlockContentTypes";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";

export const useStyles = makeStyles(() => ({
    hover: {
        "&:hover":{
            backgroundColor: "whitesmoke"
        }
    }
}))

interface IProps {
    currentItem?: ResumePortfolioItem,
    isOpen?: boolean
    setIsOpen: (open: boolean) => void
}

const PortfolioItemModal: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()
    const classes = useStyles()
    const sanityContext = useContext(SanityContext)


    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const setOpenWrapper = (theValue:boolean)=>{
        setIsOpen(theValue)
        // props.setIsOpen(theValue)
    }

    React.useEffect(() => {
        // if (props.isOpen) {
            setIsOpen(!!props.isOpen)
        // }
    }, [props.isOpen])

    return (<Modal open={isOpen} onClick={() => setIsOpen(false)} sx={{paddingBottom: 4, overflow:"scroll"}}>
        <Grid container item justifyContent='center' alignContent='center' alignItems='center'
              style={{ position: "relative"}}>

            <IconButton
                className={classes.hover}
                style={{position: "absolute", top: 0, right: 0,
                    width: "64px",
                    height: "64px",
                    backgroundColor: "white"}}
                onClick={() => setIsOpen(false)}
                size="large"><Close fontSize={'large'}/></IconButton>
            <Grid container sm={8} item style={{
                backgroundColor: "white",
                padding: theme.spacing(4),
                minHeight: "600px",
                // overflowY: "scroll",
                maxWidth: "100%"
            }} spacing={2}>
                <Grid item container><Typography variant='h3'>{props.currentItem?.detailTitle}</Typography>
                </Grid>
                <Grid item container><Typography
                    variant='body1'>{props.currentItem?.detailDescription}</Typography></Grid>
                <Grid item container spacing={1}>
                    {props.currentItem?.skillsHighlighted?.map((skill, index) => (<Grid item key={index}>
                        <Chip color='primary' label={skill.title}/>
                    </Grid>))}
                </Grid>
                <Grid item container>{props.currentItem?.inceptionDate?.toString()}</Grid>
                <Grid item container justifyContent='center'>
                    <Grid item container justifyContent='center'>
                        {props.currentItem?.imageGallery?.map((image) => (
                            <Grid item container xs={11} justifyContent='center'>
                                <Grid item>
                                    <img alt={'imageGalleryEntry'} src={sanityContext.urlFor(image ?? "").url() ?? ""}
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