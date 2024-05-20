import {FunctionComponent, useContext} from 'react'
import {Grid, Typography, useMediaQuery, useTheme,} from "@mui/material";
import {SanityCocktailType} from "../../../../common/sanityIo/Types";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";


interface IProps {
    currentCard?: SanityCocktailType
    isDarkMode?: boolean
}

const FlashCardFront: FunctionComponent<IProps> = (props: IProps) => {
    const sanityContext = useContext(SanityContext)

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    return (<Grid container item  justifyContent='center' alignItems='center' alignContent='center'
                  spacing={1}>
        <Grid item container alignContent='center' justifyContent='center'>
            <Grid item>
                <Typography variant='h2' fontFamily='Covered By Your Grace' align='center'
                            sx={{
                                lineHeight: .7,
                                zIndex: 1000,
                                position: "relative",
                                color: props.isDarkMode ?
                                    "#dddddd"
                                    : theme.palette.text.primary
                            }}>{props.currentCard?.title}</Typography>
            </Grid>
        </Grid>
        <Grid item>
            {props.currentCard?.imageSrc &&
                <img alt={props.currentCard.title} style={{zIndex: 900, position: "relative"}}
                     src={sanityContext.cocktailUrlFor(props.currentCard?.imageSrc).url() ?? ""}
                     width={smDown?250:350} height={smDown?250:350}/>}
        </Grid>

    </Grid>)
}

export default FlashCardFront