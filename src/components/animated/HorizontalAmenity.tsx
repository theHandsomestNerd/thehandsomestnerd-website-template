import{FunctionComponent, useContext} from 'react'
import {Card, Grid, Typography, useTheme} from "@mui/material";
import {motion, useAnimationControls} from "framer-motion";
import {ServiceAmenityType} from "../BlockContentTypes";
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    amenity: ServiceAmenityType
}

const HorizontalAmenity: FunctionComponent<IProps> = (props: IProps) => {
    const sanityContext = useContext(SanityContext)
    const controls = useAnimationControls()

    const animateFlipIcon = async () => {
        await controls.start({rotateY: 180}, {duration: .5})
    }

    const animateUnFlipIcon = async () => {
        await controls.start({rotateY: 0}, {duration: .2})
    }

    const theme = useTheme()

    return (
        <motion.div onHoverStart={animateFlipIcon} onHoverEnd={animateUnFlipIcon}>
            <Grid item container spacing={1}>
                <Grid item maxWidth={64} style={{position: "relative"}}>
                    <Card style={{
                        position: "absolute",
                        bottom: 12,
                        opacity: .5,
                        width: "36px",
                        height: "36px",
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: "50%"
                    }}></Card>
                    <motion.div
                        animate={controls}
                    >
                        <img width={56} src={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.amenity.imageSrc, 56, 56)}/>
                    </motion.div>
                </Grid>
                <Grid item maxWidth={250}>
                    <Grid item>
                        <Typography variant='body2' gutterBottom noWrap>{props.amenity.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>{props.amenity.description}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </motion.div>)
}

export default HorizontalAmenity
