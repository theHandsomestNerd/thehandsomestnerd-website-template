import{FunctionComponent, useContext} from 'react'
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {Grid, List, ListItem, ListItemText, Typography} from "@mui/material";
import {ListSectionType} from "../BlockContentTypes";
import SanityContext from '../../common/sanityIo/sanity-context/SanityContext';
import PageContext from '../page-context/PageContext';


export const useStyles = makeStyles((theme: Theme) => ({
    contentSection: {
        // height: '500px',
        // marginTop: '16px',
        backgroundColor: 'transparent',
    },
    contentBullets: {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: '26px',
    }
}))

interface IProps {
    sectionData: ListSectionType
}

const DJSpadesRulesContentSection: FunctionComponent<IProps> = (props: IProps) => {
    const sanityContext = useContext(SanityContext)
    const pageContext = useContext(PageContext)

    return (
        <Grid container item
              style={{ width: "100vw", backgroundColor: "#19468D", color: "white", position: "relative", zIndex: 2, border:"3px solid white", padding: "16px"}}>
            <Grid container item
                  style={{height: "100%", width: "100%", backgroundSize: "cover", backgroundImage: `url('${sanityContext.urlFor(pageContext.page?.backgroundImageSrc).url() ?? ""}')`, opacity: .1, position: "absolute", zIndex: 1}}>

            </Grid>
            <Grid container item style={{zIndex: 2}} justifyContent='center'>

                <Grid item container justifyContent='center' alignContent='center'>
                    <Typography variant='h3'>Spades Rules - DJ's 40th edition</Typography>
                </Grid>
                <Grid container item spacing={1} justifyContent='center' sx={{maxWidth:"550px"}}>
                    <List sx={{ listStyle: "decimal", paddingLeft: 4 }}>
                        {
                            props.sectionData.textListItems.map((aRule:string, index:number) => {
                                return <ListItem sx={{ display: "list-item" }} key={index}>
                                    <ListItemText primary={aRule} />
                                </ListItem>
                            })
                        }
                    </List>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default DJSpadesRulesContentSection