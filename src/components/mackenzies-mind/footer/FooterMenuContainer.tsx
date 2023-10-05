import React, {FunctionComponent, useContext} from 'react'
import {Divider, Grid, Typography} from '@mui/material'
import FooterMenuGroup from './FooterMenuGroup'
import {Theme, ThemeProvider} from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {SanityMenuContainer} from "../../../common/sanityIo/Types";
import PageContext from "../../page-context/PageContext";
import MailTo from "../../mail-to/MailTo";
import Logo from "../../transform-hw/logo/Logo";
import {COLORS} from "../../../theme/common/ColorPalette";
import DigitalResumeTheme from "../../../theme/DigitalResumeTheme";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: theme.palette.text.secondary,
    }
}))


interface IProps {
    pageFooterMenu?: SanityMenuContainer
    updateIsLoading?: (value: boolean) => void
}

const FooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {

    const classes = useStyles(DigitalResumeTheme)

    const pageContext = useContext(PageContext)
    // const width = useWidth()

    return (
        <ThemeProvider theme={DigitalResumeTheme}><Grid container item className={classes.root} spacing={5}>
            <Grid container item xs={12} md={4}
                //       style={width in ['xs','sm',''] ? {
                //     borderLeft: `4px solid ${TheWebsiteTheme.palette.primary.main}`,
                //     backgroundColor: "rgba(117,117,117,.5)",
                //     borderRight: `4px solid ${TheWebsiteTheme.palette.primary.main}`,
                // } : {}}
            >
                {
                    props.pageFooterMenu?.subMenus?.map((menuGroup: any, index: number) => {
                        return (
                            <Grid key={index} item xs={6}>
                                <FooterMenuGroup menuGroup={menuGroup}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container xs={12} md={4} justifyContent='center'>
                {props.pageFooterMenu?.logoImageSrc ?
                    <Logo isCenter logoImageSrc={props.pageFooterMenu.logoImageSrc} height={108}/> :
                    <Grid container item justifyContent='center' alignContent='center'>
                        <Typography component='div'
                                    align='center'
                                    color='primary'
                                    style={{
                                        fontFamily: "Oswald"
                                        , fontWeight: "300", color: COLORS.DARKERGRAY
                                    }} variant='h2'> James <Typography display='inline'
                                                                       style={{
                                                                           fontFamily: "Oswald"

                                                                           , fontWeight: "300",
                                                                       }}
                                                                       variant='h2'
                                                                       color='primary'>Terrell</Typography> Singleton<Typography
                            display='inline' style={{
                            fontFamily: "Oswald"

                            , fontWeight: "300",
                        }} variant='h2'
                            color='primary'>.</Typography></Typography>
                    </Grid>}
                <Grid item container justifyContent='center' style={{
                    paddingBottom: "16px",
                    marginTop: "12px",
                }}>

                    <Grid item>
                        <Divider style={{
                            width: "70px",
                            backgroundColor: "white"
                        }}/>
                    </Grid>

                </Grid>
                <Grid item container>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item>
                            <Typography color='inherit' style={{width: "180px"}} align='center' variant='subtitle1'
                                        gutterBottom>{pageContext.page?.address}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item>
                            <Typography color='inherit' align='center'
                                        variant='subtitle1'>{pageContext.page?.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        {<Grid item>
                            <MailTo color={"#383838"} email={pageContext.page?.email ?? ""}
                                    subject={"Information Request"}
                                    body={""}><Typography
                                color='inherit'>{pageContext.page?.email}</Typography></MailTo>
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={4} alignContent='flex-start' spacing={2}>

            </Grid>
        </Grid></ThemeProvider>
    )
}

export default FooterMenuContainer