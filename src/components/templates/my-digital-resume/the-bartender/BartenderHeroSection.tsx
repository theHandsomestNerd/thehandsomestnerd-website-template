import {FunctionComponent, useContext} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {BartenderHeroSectionType} from "../../../BlockContentTypes";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import CssFadeToColor from "../../../css-fade-to-color/CssFadeToColor";
import {CssFadeToColorDirectionEnum} from "../../../css-fade-to-color/CssFadeToColorDirectionEnum";
import {Email, LocalBar, LocationOn, Phone} from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
    contactIcons: {
        paddingLeft: "16px",
        color: "gray"
    }
}))

interface IProps {
    sectionData: BartenderHeroSectionType
}

const BartenderHeroSection: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()
    const theme = useTheme()
    const sanityContext = useContext(SanityContext)

    const mdDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (<Grid container item sx={{backgroundColor: "black", position: "relative", minWidth: "350px"}}>
        <Grid item style={{position: "relative", height: "500px"}}>
            <CssFadeToColor toColor='black' direction={CssFadeToColorDirectionEnum.RIGHT}/>
            {<img height={500}
                  src={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.sectionData.imageSrc, 300, 500)}/>
            }
        </Grid>

        <Grid container item sx={{
            height: "100%"
        }}>
            <Grid item container justifyItems='center' justifyContent='center'
                  alignItems={mdDown ? 'flex-end' : 'center'} alignContent={mdDown ? 'flex-end' : 'center'}
                  sx={{
                      position: "absolute",
                      right: 64,
                      // backgroundColor:"red",
                      paddingBottom: "8px",
                      top: 0,
                      // bottom: 0,
                      width: "350px",
                      height: "100%"
                  }}
            >
                <Grid item style={{
                    border: "3px solid white",
                    backgroundColor: "rgba(0,0,0,.35)",
                    position: "relative",
                }}
                >
                    <Grid item container
                          style={{
                              fontSize: "125px",
                              opacity: .55
                          }}
                    >
                        <LocalBar fontSize='inherit'
                                  style={{
                                      position: "absolute",
                                      bottom: 0,
                                      right: 0
                                  }}/>
                    </Grid>
                    <Grid item container>
                        <Typography color='white' variant='h3'
                                    style={{padding: "8px"}}>{props.sectionData.name}</Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item style={{
                            border: "3px solid white",
                            padding: theme.spacing(1, 3),
                            position: "relative",
                            left: "-3px"
                        }}>
                            <Typography color='white' variant='h6'>{props.sectionData.careerTitle}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item style={{padding: "16px"}}>
                            <Typography color='white' variant='caption'>{props.sectionData.textContent}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.contactIcons}>
                        <Grid item alignItems='center' container spacing={1}>
                            <Grid item><Email color='inherit'/></Grid>
                            <Grid item><Typography color='white' variant='h6' gutterBottom>
                                {props.sectionData.bartender?.email}
                            </Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.contactIcons}>
                        <Grid item alignItems='center' container spacing={1}>
                            <Grid item><Phone color='inherit'/></Grid>
                            <Grid item><Typography color='white' variant='h6' gutterBottom>
                                {props.sectionData.bartender?.phone}
                            </Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.contactIcons}>
                        <Grid item alignItems='center' container spacing={1}>
                            <Grid item><LocationOn color='inherit'/></Grid>
                            <Grid item><Typography color='white' variant='h6' gutterBottom>
                                {props.sectionData.bartender?.address}
                            </Typography></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>)
}

export default BartenderHeroSection