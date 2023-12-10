import React, {FunctionComponent} from 'react'
import shape3 from "./services-v1-shape3-dark-blue.png";
import shape9 from "./services-v1-shape9-dark-blue.png";
import shape11 from "./services-v1-shape11-dark-blue.png";
import shape4 from "./services-v1-shape4-cyan.png";
import shape7 from "./services-v1-shape7-dark-blue.png";
import shape8 from "./services-v1-shape8-cyan.png";
import shape5 from "./services-v1-shape5-dark-blue.png";
import shape2 from "./services-v1-shape2-dark-blue.png";
import shape6 from "./services-v1-shape6-dark-blue.png";
import shape10 from "./services-v1-shape10-dark-blue.png";
import {Grid, useTheme} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import AnimatedAbstractShape from "./AnimatedAbstractShape";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
}

const AbstractShapesBackground: FunctionComponent<IProps> = (props: IProps) => {
    const theme = useTheme()
    const shape2Variants = {
        onScreen: {top: 0, transition: {duration: .65}},
        offScreen: {top: -440, transition: {duration: .65}}
    };

    const shape3Variants = {
        onScreen: {bottom: -5, transition: {duration: .5}},
        offScreen: {bottom: -500, transition: {duration: .5}}
    };

    const shape4Variants = {
        onScreen: {bottom: -5, transition: {duration: .75}},
        offScreen: {bottom: -300, transition: {duration: .75}}
    };

    const shape5Variants = {
        onScreen: {top: 0, transition: {duration: .65}},
        offScreen: {top: -900, transition: {duration: .65}}
    };

    const shape6Variants = {
        onScreen: {right: 0, top: 0, transition: {duration: .75}},
        offScreen: {right: 0, top: -720, transition: {duration: .75}}
    };

    const shape7Variants = {
        onScreen: {right: 0, top: 0, transition: {duration: 1}},
        offScreen: {right: 0, top: -250, transition: {duration: 1}}
    };

    const shape8Variants = {
        onScreen: {right: 0, top: 0, transition: {duration: .65}},
        offScreen: {right: 0, top: -250, transition: {duration: .65}}
    };

    const shape9Variants = {
        onScreen: {bottom: 0, transition: {duration: .85}},
        offScreen: {bottom: -900, transition: {duration: .85}}
    };

    const shape10Variants = {
        onScreen: {top: 0, right: 0, bottom: 0, transition: {duration: .65}},
        offScreen: {top: -980, right: 0, bottom: 0, transition: {duration: .65}}
    };

    const shape11Variants = {
        onScreen: {bottom: 0, transition: {duration: .55}},
        offScreen: {bottom: -800, transition: {duration: .55}}
    };

    return (<Grid container item
                  style={{
                      backgroundColor: theme.palette.primary.dark,
                      zIndex: 0,
                      width: "100%",
                      height: "100%",
                      position: "absolute"
                  }}>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape3Variants} image={shape3}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape9Variants} image={shape9} opacity={.35}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape11Variants} image={shape11} opacity={.15}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape4Variants} opacity={.5} image={shape4}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape7Variants} image={shape7}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape8Variants} image={shape8} opacity={.35}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape5Variants} image={shape5}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape2Variants} image={shape2} opacity={.6}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape6Variants} image={shape6}/>
        </Grid>
        <Grid item>
            <AnimatedAbstractShape shapeVariants={shape10Variants} image={shape10} opacity={.6}/>
        </Grid>
    </Grid>)
}

export default AbstractShapesBackground