import React, {FunctionComponent, useContext} from 'react'
import {Grid, Typography, useTheme} from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import ThwServiceItem from "../ThwServiceItem";
import PageContext from "../../../page-context/PageContext";

interface IProps {
    thisServiceSlug?: string
}

const OtherServices: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)
    const theme = useTheme()

    return (<Grid container item>
        <Grid container item justifyContent='center' style={{marginBottom: theme.spacing(4)}}>
            <Typography variant='h4' color='secondary'>Other Services</Typography>
        </Grid>
        <Grid container item spacing={3} justifyContent='center'>
            {
                pageContext.page?.servicesAvailable?.map((service) => {
                    return <ThwServiceItem key={uuidv4()} showAmenities service={service} hideLearnMoreButton
                                           hideCtaButton/>
                })
            }
        </Grid></Grid>)
}

export default OtherServices