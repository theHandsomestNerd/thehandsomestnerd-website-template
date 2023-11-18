import React, {FunctionComponent, useContext} from 'react'
import {Card, Grid, Typography} from "@mui/material";
import {motion, useAnimationControls} from "framer-motion";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import {ServiceAmenityType} from "../BlockContentTypes";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    amenity: ServiceAmenityType
}

const HorizontalAmenity: FunctionComponent<IProps> = (props: IProps) => {
    const customizedThemeContext = useContext(CustomizedThemeContext)

    const controls = useAnimationControls()

    const animateFlipIcon = async () => {
        await controls.start({rotateY: 180},{duration: .5})
    }

    const animateUnFlipIcon = async () => {
        await controls.start({rotateY: 0}, {duration: .2})
    }

    return (
        <motion.div onHoverStart={animateFlipIcon} onHoverEnd={animateUnFlipIcon}>
            <Grid item container xs={12} sm={6}
                  maxWidth={350} spacing={1}>
                <Grid item maxWidth={64} style={{position: "relative"}}>
                    <Card style={{
                        position: "absolute",
                        bottom: 12,
                        opacity: .5,
                        width: "36px",
                        height: "36px",
                        backgroundColor: customizedThemeContext.customizedTheme.palette.primary.main,
                        borderRadius: "50%"
                    }}></Card>
                    <motion.div
                        animate={controls}
                    >
                        <img width={56} src={urlFor(props.amenity.imageSrc ?? "").url() ?? ""}/>
                    </motion.div>
                </Grid>
                <Grid item maxWidth={250}>
                    <Grid item>
                        <Typography variant='body2' gutterBottom>{props.amenity.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>{props.amenity.description}</Typography>
                    </Grid>
                </Grid>
            </Grid></motion.div>)
}

export default HorizontalAmenity
