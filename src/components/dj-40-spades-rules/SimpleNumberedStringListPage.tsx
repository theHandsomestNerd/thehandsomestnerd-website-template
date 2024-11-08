import {FunctionComponent, useContext} from 'react'
import {Grid, List, ListItem, ListItemText, Typography} from "@mui/material";
import {ListSectionType} from "../BlockContentTypes";
import {convertToHexCode} from "../../theme/common/ColorPalette";
import PageContext from "../page-context/PageContext";
import SanityContext from '../../common/sanityIo/sanity-context/SanityContext';

interface SimpleNumberedStringListPageProps {
    sectionData: ListSectionType
}

const SimpleNumberedStringListPage: FunctionComponent<SimpleNumberedStringListPageProps> = (props: SimpleNumberedStringListPageProps) => {
    const sanityContext = useContext(SanityContext)
    const pageContext = useContext(PageContext)

    return (
        <Grid container item
              style={{
                  width: "100vw",
                  backgroundColor: convertToHexCode(props.sectionData.backgroundColor),
                  color: "white",
                  position: "relative",
                  zIndex: 2,
                  border: "3px solid white",
                  padding: "16px"
              }}>
            <Grid container item
                  style={{
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundImage: `url('${sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(pageContext.page?.backgroundImageSrc)}')`,
                      opacity: .1,
                      position: "absolute",
                      zIndex: 1,
                      top: 0,
                      left: 0
                  }}/>
            <Grid container item style={{zIndex: 2}} justifyContent='center'>
                <Grid item container justifyContent='center' alignContent='center'>
                    <Typography variant='h3'>{props.sectionData.title}</Typography>
                </Grid>
                <Grid container item spacing={1} justifyContent='center' sx={{maxWidth: "550px"}}>
                    <List sx={{listStyle: "decimal", paddingLeft: 4}}>
                        {
                            props.sectionData.textListItems.map((aRule: string, index: number) => {
                                return <ListItem sx={{display: "list-item"}} key={index}>
                                    <ListItemText primary={aRule}/>
                                </ListItem>
                            })
                        }
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SimpleNumberedStringListPage