import{FunctionComponent, useContext} from 'react'
import {Grid, useTheme} from "@mui/material";
import AnimatedAbstractShape from "./AnimatedAbstractShape";
import SanityContext from '../../../common/sanityIo/sanity-context/SanityContext';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface IProps {
    imagesArray: SanityImageSource[]
}

const AbstractShapesBackground: FunctionComponent<IProps> = (props:IProps) => {
    const theme = useTheme()
    const shape0Variants = {
        onScreen: {top: 0, transition: {duration: .65}},
        offScreen: {top: -440, transition: {duration: .65}}
    };

    const shape1Variants = {
        onScreen: {bottom: -5, transition: {duration: .5}},
        offScreen: {bottom: -500, transition: {duration: .5}}
    };

    const shape2Variants = {
        onScreen: {bottom: -5, transition: {duration: .75}},
        offScreen: {bottom: -300, transition: {duration: .75}}
    };

    const shape3Variants = {
        onScreen: {top: 0, transition: {duration: .65}},
        offScreen: {top: -900, transition: {duration: .65}}
    };

    const shape4Variants = {
        onScreen: {right: 0, top: 0, transition: {duration: .75}},
        offScreen: {right: 0, top: -720, transition: {duration: .75}}
    };

    const shape5Variants = {
        onScreen: {right: 0, top: 0, transition: {duration: 1}},
        offScreen: {right: 0, top: -250, transition: {duration: 1}}
    };

    const shape6Variants = {
        onScreen: {right: 0, top: 0, transition: {duration: .65}},
        offScreen: {right: 0, top: -250, transition: {duration: .65}}
    };

    const shape7Variants = {
        onScreen: {bottom: 0, transition: {duration: .85}},
        offScreen: {bottom: -900, transition: {duration: .85}}
    };

    const shape8Variants = {
        onScreen: {bottom: 0, transition: {duration: .55}},
        offScreen: {bottom: -800, transition: {duration: .55}}
    };

    const shape9Variants = {
        onScreen: {top: 0, right: 0, bottom: 0, transition: {duration: .65}},
        offScreen: {top: -980, right: 0, bottom: 0, transition: {duration: .65}}
    };

    const sanityContext = useContext(SanityContext)

    return (<Grid container item
                  style={{
                      backgroundColor: theme.palette.primary.dark,
                      zIndex: 0,
                      width: "100%",
                      height: "100%",
                      position: "absolute"
                  }}>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape1Variants} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[1])}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape7Variants} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[7])} opacity={.35}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape8Variants} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[8])} opacity={.15}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape2Variants} opacity={.5} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[2])}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape5Variants} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[5])}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape6Variants} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[6])} opacity={.35}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape3Variants} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[3])}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape0Variants} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[0])} opacity={.6}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape4Variants} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[4])}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape9Variants} image={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.imagesArray[9])} opacity={.6}/>
        </Grid>
    </Grid>)
}

export default AbstractShapesBackground