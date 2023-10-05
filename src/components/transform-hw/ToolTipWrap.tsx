import React, {FunctionComponent, PropsWithChildren, ReactElement, useContext} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid, Tooltip, Typography} from '@mui/material'
import {ServiceAmenityType} from "../BlockContentTypes";
import AmenityContext from "../amenity-context/AmenityContext";
import widthUtils from "../../utils/widthUtils";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    amenity: ServiceAmenityType
    serviceTitle: string
}

const ToolTipWrap: FunctionComponent<PropsWithChildren & IProps> = (props: PropsWithChildren & IProps) => {
    const amenityContext = useContext(AmenityContext)

    const smDown = widthUtils.useIsWidthDown('sm')

    return <Grid container xs={6} item
                                               onClick={() => {
                                                   amenityContext.openSnackbar && amenityContext.openSnackbar(props.serviceTitle,props.amenity)
                                               }}>
        <Tooltip disableHoverListener={smDown} title={
            <Grid container style={{maxWidth: "160px"}}>
                <Typography
                    variant='subtitle1' color='textSecondary'>{props.amenity.title}</Typography>
                <Typography
                    variant='subtitle2' color='textSecondary'>{props.amenity.description}</Typography>
            </Grid>
        }>
            {props.children as ReactElement}
        </Tooltip>
    </Grid>
}

export default ToolTipWrap