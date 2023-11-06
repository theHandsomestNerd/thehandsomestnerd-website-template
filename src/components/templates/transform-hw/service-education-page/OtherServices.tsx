import React, {FunctionComponent, useContext} from 'react'
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Typography} from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import ThwServiceItem from "../ThwServiceItem";
import TheWebsiteTheme from "../../../../theme/Theme";
import PageContext from "../../../page-context/PageContext";

interface IProps {
    thisServiceSlug?: string
}

const OtherServices: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)

    return (<Grid container item>
        <Grid container item justifyContent='center' style={{marginBottom: TheWebsiteTheme.spacing(4)}}>
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