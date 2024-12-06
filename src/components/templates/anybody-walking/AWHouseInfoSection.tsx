import {FunctionComponent, useContext, useEffect, useState} from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    List,
    ListItemButton,
    Typography
} from "@mui/material";
import {AWHouseInfoSectionType, SanityVerifiedHouseType} from './ballroomTypes';
import SanityContext from "../../../common/sanityIo/sanity-context/SanityContext";
import Grid from "@mui/material/Grid2";

interface IProps {
    sectionData: AWHouseInfoSectionType
}

const AWHouseInfoSection: FunctionComponent<IProps> = () => {
    const [allHouses, setAllHouses] = useState<SanityVerifiedHouseType[]>([])
    const [selectedHouse, setSelectedHouse] = useState<SanityVerifiedHouseType>()
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

    const sanityContext = useContext(SanityContext)

    useEffect(() => {
        sanityContext.fetchVerifiedHouses
        && sanityContext.fetchVerifiedHouses()
            .then((verifiedHouses) => {
                setAllHouses(verifiedHouses)
                setSelectedHouse(undefined)
            })
    }, [])

    const openDialog = (house: SanityVerifiedHouseType) => {
        setSelectedHouse(house)
        setIsDialogOpen(true)
    }

    const closeDialog = () => {
        setIsDialogOpen(false)
    }

    return (
        <Grid container>
            <Grid container justifyItems='flex-start'>
                <Typography variant="h3" color="textSecondary">House Info</Typography>
            </Grid>
            <Grid container size={{xs: 12}}>
                <List>
                    {allHouses.map((theHouse: SanityVerifiedHouseType, index) => {
                        return <ListItemButton component='a' key={index} onClick={() => openDialog(theHouse)}>
                            <Typography variant="body1" color="textSecondary"
                                        >{theHouse.houseName}</Typography>
                        </ListItemButton>
                    })}
                </List>
            </Grid>
            <Dialog
                onClose={closeDialog}
                maxWidth="xs"
                open={isDialogOpen}
            >
                <DialogTitle color="textSecondary">House of <Typography variant='h6' color="primary"
                                                                        display='inline'>{selectedHouse?.houseName}</Typography> Information</DialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={2} direction='column'>
                        <Grid container direction='column' border='1px solid #D3D3D3' padding={2} size={{xs: 12}}>
                            <Typography color="primary" variant='body2'>House Father</Typography>
                            <Grid container>
                                <Grid container size={{xs: 12}} alignItems='center'>
                                    <Typography color="textSecondary"
                                                display='inline'>Name:</Typography>
                                    <Typography variant='body2'
                                                color="textSecondary"
                                                display='inline'>{selectedHouse?.houseFather}</Typography>
                                </Grid>
                                <Grid container size={{xs: 12}} alignItems='center'>
                                    <Typography color="textSecondary"
                                                display='inline'>Status:</Typography>
                                    <Typography variant='body2'
                                                color="textSecondary"
                                                display='inline' style={{textTransform:'capitalize'}}>{selectedHouse?.houseFatherStatus?.toLowerCase()}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction='column' border='1px solid #D3D3D3' padding={2} size={{xs: 12}}>
                            <Typography color="primary" variant='body2'>House Mother</Typography>
                            <Grid container>
                                <Grid container size={{xs: 12}} alignItems='center'>
                                    <Typography color="textSecondary"
                                                display='inline'>Name:</Typography>
                                    <Typography variant='body2'
                                                color="textSecondary"
                                                display='inline'>{selectedHouse?.houseMother}</Typography>
                                </Grid>
                                <Grid container size={{xs: 12}} alignItems='center'>
                                    <Typography color="textSecondary"
                                                display='inline'>Status:</Typography>
                                    <Typography variant='body2'
                                                color="textSecondary"
                                                display='inline' style={{textTransform:'capitalize'}}>{selectedHouse?.houseMotherStatus?.toLowerCase()}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={closeDialog}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default AWHouseInfoSection