import React, {FunctionComponent, useContext} from 'react'
import {Grid, List, useTheme} from '@mui/material'
import {ArrowLeft, ArrowRight} from "@mui/icons-material";
import {ThwServiceItemNoRefType} from "../../BlockContentTypes";
import AmenityContext from "../../amenity-context/AmenityContext";
import {useIsHorizontalOverflow} from "../../../utils/useIsHorizontalOverflow";

interface IProps {
    service: ThwServiceItemNoRefType
}

const AmenitiesSection: FunctionComponent<IProps> = (props: IProps) => {
    const ref = React.useRef(null);
    const isOverflow = useIsHorizontalOverflow(ref, () => {
    })

    const amenityContext = useContext(AmenityContext)
    const [elements, setElements] = React.useState<JSX.Element>()
    const theme = useTheme()

    React.useEffect(() => {
        const newElements = amenityContext.getElements && amenityContext.getElements(props.service.slug.current)
        if (newElements) {
            setElements(newElements)
        }
    }, [amenityContext.getElements && amenityContext.getElements(props.service.slug.current)])

    return (<Grid container item justifyContent='center'
                  style={{
                      // minHeight: "max-content",
                      position: "relative"
                  }}
                  alignItems='stretch'>
        {
            isOverflow ?
                <Grid
                    container
                    xs={3}
                    alignItems='center'
                    alignContent='center'
                    item
                    style={{
                        position: "absolute",
                        left: 16,
                        height: "100%",
                        zIndex: "1000",
                        pointerEvents: 'none'
                    }}
                >
                    <ArrowLeft/>
                </Grid> : <></>
        }
        <Grid xs={10} item container>
            <Grid item container justifyContent='flex-start'>

                <List

                    style={{
                        paddingTop: theme
                            .spacing(2),
                        width: "100%",
                        height: "130px",
                    }}
                >
                    <Grid container ref={ref} direction='column' alignItems='center' alignContent='flex-start' style={{
                        paddingLeft: isOverflow ? theme
                            .spacing(2) : theme
                            .spacing(0),
                        overflowY: "hidden",
                        overflowX: "scroll",
                        height: "100%",
                        width: "100%",


                    }}>
                        {elements}
                    </Grid>

                </List>
            </Grid>
        </Grid>
        {
            isOverflow ? <Grid container xs={3} item style={{
                position: "absolute",
                right: 16,
                height: "100%",
                zIndex: "1000",
                pointerEvents: 'none'
            }}
                               justifyContent='flex-end' alignContent='center'>
                <ArrowRight/>
            </Grid> : <></>
        }
    </Grid>)
}

export default AmenitiesSection