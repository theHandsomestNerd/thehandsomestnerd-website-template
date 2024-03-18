import React, {FunctionComponent} from 'react'
import {motion, useAnimation, Variants} from "framer-motion";
import {useInView} from "react-intersection-observer";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
    root: {
    },
}))

interface IProps { shapeVariants:Variants, opacity?: number, image: any }

const AnimatedAbstractShape: FunctionComponent<IProps> = (props:IProps) => {
    const shapeControls = useAnimation();
    const [shapeRef, shapeInView] = useInView();

    React.useEffect(() => {
        if (shapeInView) {
            shapeControls.start("onScreen");
        }
        else {
            shapeControls.start("offScreen");
        }
    }, [shapeControls, shapeInView]);

    return (<motion.div
        ref={shapeRef}
        style={{position:"absolute", opacity: props.opacity ? props.opacity: 1}}
        variants={props.shapeVariants}
        initial="offScreen"
        animate={shapeControls}>
        <img alt='abstract shape' src={props.image}/>
    </motion.div>)
}

export default AnimatedAbstractShape