import React, {FunctionComponent, useContext} from 'react'
import {Divider, Grid, Typography, useTheme} from '@material-ui/core'
import WebDevFooterMenuGroup from './WebDevFooterMenuGroup'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityMenuContainer, SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import DigitalResumeTheme, {COLORS, rainbow} from "../../../theme/DigitalResumeTheme";
import PageContext from "../../page-context/PageContext";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";
import MailTo from "../../mail-to/MailTo";
import Logo from "../../transform-hw/logo/Logo";
import FullWidthColoredPng from "../../fullwidth-colored-png/FullWidthColoredPng";
import {urlFor} from "../../block-content-ui/static-pages/cmsStaticPagesClient";
import WebDevSiteTheme from "../../../theme/WebDevSiteTheme";


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

    const mediaQueriesContext = useContext(MediaQueriesContext)
    const theme = useTheme()
    const pageContext = useContext(PageContext)

    return (
        <Grid container item className={classes.root} spacing={5}>
            <Grid item container xs={12} md={6}>

                {props.pageFooterMenu?.logoImageSrc ?
                    <Grid item xs={7}>
                        <FullWidthColoredPng color='white' height={108}
                                                           maskUrl={urlFor(props.pageFooterMenu.logoImageSrc).url() ?? ""}/></Grid> :
                    <Grid container item>
                        <Typography component='div' variant='h2'
                                    style={{...rainbow, color: "#383838"}}>The <Typography display='inline'
                                                                                           style={{...rainbow,}}
                                                                                           variant='h2'
                                                                                           color='primary'>Handsomest</Typography> Nerd<Typography
                            display='inline' style={{...rainbow,}} variant='h2'
                            color='primary'>.</Typography></Typography>
                    </Grid>}
                <Grid container item xs={7}>
                    {<Grid item>
                        <MailTo color={"white"} email={pageContext.page?.email ?? ""}
                                subject={"Information Request"}
                                body={""}><Typography
                            color='inherit'>{pageContext.page?.email}</Typography></MailTo>
                    </Grid>}
                </Grid>
                <Grid item container style={{paddingLeft: theme.spacing(1)}}>
                    <Grid container item spacing={1}>
                        <Grid item xs={5}>
                            <Typography color='inherit'  variant='subtitle1'
                                        style={{fontWeight: "400"}}
                                        gutterBottom>{pageContext.page?.address}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                        <Grid item>
                            <Typography color='inherit' align='center'
                                        variant='subtitle1'>{pageContext.page?.phone}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} md={6} style={mediaQueriesContext.smDown ? {
                borderLeft: `4px solid ${theme.palette.primary.main}`,
                backgroundColor: "rgba(117,117,117,.5)",
                borderRight: `4px solid ${theme.palette.primary.main}`,
            } : {}} justifyContent={!mediaQueriesContext.smDown ?'flex-end':'flex-start'}>
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