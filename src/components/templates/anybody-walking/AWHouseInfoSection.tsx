import {FunctionComponent, useContext, useEffect, useState} from 'react'
import {useTheme} from "@mui/material/styles";
import {Grid, List, ListItem, Typography} from "@mui/material";
import {AWHouseInfoSectionType, SanityHouse} from './ballroomTypes';
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    sectionData: AWHouseInfoSectionType
}


const AWHouseInfoSection: FunctionComponent<IProps> = () => {
    const theme = useTheme()

    const [allHouses, setAllHouses] = useState<SanityHouse[]>([])

    const sanityContext = useContext(SanityContext)

    useEffect(() => {
        sanityContext.fetchVerifiedHouses
        && sanityContext.fetchVerifiedHouses()
            .then((verifiedHouses) => {
                console.log("The Verified houses", verifiedHouses)
                setAllHouses(verifiedHouses)
            })
    }, [])

    return (
        <Grid
            container
            // alignItems="center"
            item
            justifyContent="center"
            style={{padding: theme.spacing(8.5, 4)}}
        >
            <Grid container item>
                <Grid container item justifyContent='center'>
                    <Typography variant="h3" color="textSecondary">House Info</Typography>
                </Grid>

            </Grid>
            <Grid container item xs={10}>
                <Grid container item>
                    <List>
                    {allHouses.map((theHouse: SanityHouse, index) => {
                        return <ListItem key={index}><Typography variant="body1" color="textSecondary"
                                                     gutterBottom>{theHouse.houseName}</Typography></ListItem>
                    })}
                    </List>
                </Grid>

            </Grid>
        </Grid>


    )
}

export default AWHouseInfoSection