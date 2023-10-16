import React, {FunctionComponent, useContext} from 'react'
import {Grid, Typography, useTheme} from '@mui/material'
import WebDevFooterMenuGroup from './WebDevFooterMenuGroup'
import {Theme} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {SanityMenuContainer} from "../../../common/sanityIo/Types";
import PageContext from "../../page-context/PageContext";
import MailTo from "../../mail-to/MailTo";
import FullWidthColoredPng from "../../fullwidth-colored-png/FullWidthColoredPng";
import {urlFor} from "../../block-content-ui/static-pages/cmsStaticPagesClient";
import WebDevSiteTheme from "../../../theme/WebDevSiteTheme";
import widthUtils from "../../../utils/widthUtils";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: theme.palette.text.primary,
    }
}))


interface IProps {
    pageFooterMenu?: SanityMenuContainer
    updateIsLoading?: (value: boolean) => void
}

const WebDevFooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(WebDevSiteTheme)

    const theme = useTheme()
    const pageContext = useContext(PageContext)

    const smDown = widthUtils.useIsWidthDown('sm')
    const mdDown = widthUtils.useIsWidthDown('md')

    return (
        <Grid container item className={classes.root} spacing={5}>
            <Grid item container xs={12} md={6}>
                {props.pageFooterMenu?.logoImageSrc ?
                    <Grid item container style={{paddingTop: smDown ? "4px" : "4px"}}>
                        <Grid item xs={12}><FullWidthColoredPng color='white' height={108}
                                                                isCenter={smDown}
                                                                maskUrl={urlFor(props.pageFooterMenu.logoImageSrc).url() ?? ""}/></Grid>
                    </Grid> :
                    <Grid container item>
                        <Typography component='div' variant='h2'
                                    style={{fontFamily:"Oswald"

, color: "#383838"}}>The <Typography display='inline'
                                                                                           style={{fontFamily:"Oswald"

,}}
                                                                                           variant='h2'
                                                                                           color='primary'>Handsomest</Typography> Nerd<Typography
                            display='inline' style={{fontFamily:"Oswald"

,}} variant='h2'
                            color='primary'>.</Typography></Typography>
                    </Grid>}
                <Grid container item justifyContent={smDown ? 'center' : 'flex-start'}>
                    {<Grid item>
                        <MailTo color={"white"} email={pageContext.page?.businessContact?.email ?? ""}
                                subject={"Information Request"}
                                body={""}><Typography
                            color='inherit'>{pageContext.page?.businessContact?.email}</Typography></MailTo>
                    </Grid>}
                </Grid>
                <Grid item container style={{paddingLeft: theme.spacing(1)}}>
                    <Grid container item spacing={1}
                          justifyContent={smDown ? 'center' : 'flex-start'}>
                        <Grid item justifyContent={mdDown ? 'center' : 'flex-start'}>
                            <Typography color='inherit' variant='subtitle1'
                                        align={smDown ? 'center' : 'left'}
                                        style={{fontWeight: "400", fontFamily: "Raleway", maxWidth: "150px"}}
                                        gutterBottom>{pageContext.page?.businessContact?.address}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1}
                          style={{paddingBottom: mdDown ? "24px" : "4px"}}
                          justifyContent={smDown ? 'center' : 'flex-start'}>
                        <Grid item>
                            <Typography color='inherit' align='center'
                                        variant='subtitle1'>{pageContext.page?.businessContact?.phone}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} md={6} style={smDown ? {
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                backgroundColor: "rgba(117,117,117,.5)",
                borderRight: `4px solid ${theme.palette.primary.main}`,
            } : {}} justifyContent={!smDown ? 'flex-end' : 'flex-start'}>
                {
                    props.pageFooterMenu?.subMenus?.map((menuGroup: any, index: number) => {
                        return (
                            <Grid key={index} item xs={6}>
                                <WebDevFooterMenuGroup menuGroup={menuGroup}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default WebDevFooterMenuContainer