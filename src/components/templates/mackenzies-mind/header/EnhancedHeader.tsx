import React, {FunctionComponent, useContext} from 'react'
import {Theme} from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {AppBar, Button, Card, Grid, Typography} from '@mui/material'
import clsx from "clsx";
import {COLORS} from "../../../../theme/common/ColorPalette";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";
import Header from "./Header";
import {HeaderSectionType} from "../../../BlockContentTypes";
import {urlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: COLORS.TRANSPARENTWHITE,
        transition: 'background-color .5s ease 0s',
        paddingLeft: "32px",
        paddingRight: "56px",
        paddingTop: "32px",
        height: "148px",
        position: "relative"
    },
    opaque: {
        backgroundColor: `${COLORS.LIGHTGRAY} !important`,
    }
}))

export type EnhancedHeaderProps = {
    pageHeader?: HeaderSectionType
    updateIsLoading?: (value: boolean) => void
}

const EnhancedHeader: FunctionComponent<EnhancedHeaderProps> = (props) => {
    const customizedTheme = useContext(CustomizedThemeContext)

    const classes = useStyles({
        paddingLeft: customizedTheme.customizedTheme.spacing(4),
    })

    return (
        <AppBar className={clsx({[classes.opaque]: true}, classes.root)}>{props.pageHeader?.headerMenuRef.title ?

            <Grid container item>
                <Grid container item spacing={4} justifyContent='space-between' wrap='nowrap'>
                    <Grid item xs={3}>
                        <Button fullWidth variant='contained'
                                href={props.pageHeader?.ctaButtonLink}><Typography variant='button' noWrap>{props.pageHeader?.ctaButtonText}</Typography></Button>
                    </Grid>
                    {
                        props.pageHeader.highlightedDetails.map((detail, index)=><Grid key={index}  xs={3}  container justifyContent='flex-end' alignItems='flex-end' alignContent='flex-end'>
                            <Grid  item container xs={12} sm={3} maxWidth={350} minWidth={270} spacing={1} wrap='nowrap' justifyContent='flex-end' alignItems='center'>
                                <Grid item maxWidth={64} style={{position: "relative"}}>

                                    <Card elevation={0} style={{
                                        width: "48px",
                                        height: "48px",
                                        backgroundColor: "#e3e3e3",
                                        borderRadius: "50%"
                                    }}>
                                        <Grid container justifyContent='center' alignContent='center' alignItems='center' style={{height:"100%", width:"100%"}}><Grid item>
                                            <img width={24} src={urlFor(detail.imageSrc ?? "").url() ?? ""} style={{paddingTop:"6px"}}/>
                                        </Grid></Grid>
                                    </Card>
                                    {/*<motion.div whileHover={{rotateY: 180}}*/}
                                    {/*            transition={{*/}
                                    {/*                duration: .5,*/}
                                    {/*            }}*/}
                                    {/*>*/}
                                    {/*</motion.div>*/}
                                </Grid>
                                <Grid item maxWidth={260}>
                                    <Grid item>
                                        <Typography variant='body1' color='textPrimary' noWrap>{detail.name}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography fontWeight='bold' fontSize='16px' variant='body2' color='textPrimary'>{detail.description}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
                <Grid container item>
                    {/*enhanced*/}
                    <Grid xs={12} container item style={{
                        // padding: "16px",
                        padding:"8px",
                        // maxWidth: "calc(100%-100px)",
                        // marginRight: "8px",
                        // width: "100%",
                        position: "relative",
                        top: "16px",
                        borderRadius: 4,
                        backgroundColor: "black"
                    }}>
                        <Header isSearch={props.pageHeader.isSearch} pageHeader={props.pageHeader.headerMenuRef}/>
                    </Grid>
                </Grid></Grid>
            : <></>
        }</AppBar>
    );
}

export default EnhancedHeader