import React, {FunctionComponent, useContext} from 'react'
import {Divider, Grid, Typography, useMediaQuery, useTheme} from '@mui/material'
import FooterMenuGroup from './FooterMenuGroup'
import makeStyles from '@mui/styles/makeStyles';
import {SanityMenuContainer} from "../../../../common/sanityIo/Types";
import PageContext from "../../../page-context/PageContext";
import MailTo from "../../../mail-to/MailTo";
import Logo from "../../../logo/Logo";
import AlternatingText from "../../../logo/AlternatingText";
import SocialMediaBlock from "../../my-digital-resume/social-media-block/SocialMediaBlock";
import {urlFor} from "../../../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityImageAsset} from "../../../BlockContentTypes";
import {COLORS, convertToHexCode} from "../../../../theme/common/ColorPalette";

interface IProps {
    pageFooterMenu?: SanityMenuContainer
    updateIsLoading?: (value: boolean) => void
    isSocialMediaBlock?:boolean
    backgroundColor?:string
}

const FooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {

    const theme = useTheme()

    const pageContext = useContext(PageContext)
    const useStyles = makeStyles(({
        root: {
            color: theme.palette.getContrastText(convertToHexCode(props.backgroundColor)),
        }
    }))
    const classes = useStyles(theme)

    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <Grid container item className={classes.root}

        >
            <Grid container item xs={12} md={4}
                  sx={mdDown ? {
                      paddingLeft: "16px",
                      paddingTop: "16px",
                      paddingBottom: "16px",
                      borderLeft: `4px solid ${theme.palette.primary.main}`,
                      backgroundColor: COLORS.TRANSPARENTERWHITE,
                      borderRight: `4px solid ${theme.palette.primary.main}`,
                  } : {                      }}
                  justifyContent={mdDown?'center':'flex-start'}
            >
                {
                    props.pageFooterMenu?.subMenus?.map((menuGroup: any, index: number) => {
                        return (
                            <Grid key={index} item xs={6} sm={12} md={6} container justifyContent={mdUp?'flex-start':'center'}>
                                <Grid item><FooterMenuGroup menuGroup={menuGroup}/></Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container xs={12} md={4} justifyContent='center' sx={{paddingTop: mdDown?2:0}}>
                {props.pageFooterMenu?.logoImageSrc ?
                    <Logo isCenter logoImageSrc={props.pageFooterMenu.logoImageSrc} height={108}/> :
                    <Grid container item justifyContent='center' alignContent='center'>
                        <AlternatingText isLarge={true} logoText={props.pageFooterMenu?.logoText}
                                         logoAccentText={props.pageFooterMenu?.logoAccentText}/>
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
                                        gutterBottom>{pageContext.page?.businessContact?.address}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item>
                            <Typography color='inherit' align='center'
                                        variant='subtitle1'>{pageContext.page?.businessContact?.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        {<Grid item>
                            <MailTo color={"inherit"} email={pageContext.page?.businessContact?.email ?? ""}
                                    subject={"Information Request"}
                                    body={""}><Typography
                                color='inherit'>{pageContext.page?.businessContact?.email}</Typography></MailTo>
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
            {
                <Grid item container xs={12} md={4} spacing={2} alignItems='center' alignContent='center'>
                {!mdDown &&
                    props.isSocialMediaBlock && <Grid container item justifyContent='flex-end' xs={6} md={12}>
                        <Typography variant='body2'>Social Media</Typography>
                    </Grid>}
                <Grid container item xs={12} md={12} sx={{
                    paddingTop: "4px !important",
                    marginTop: mdDown ? 4 : 0,
                    borderTop: props.isSocialMediaBlock?"1px solid " + theme.palette.primary.main:"0px solid transparent"
                }}>
                    {mdDown &&
                        props.isSocialMediaBlock &&
                        <Grid container item justifyContent='flex-end'>
                            <Typography variant='body2'>Social Media</Typography>
                        </Grid>}
                    {
                        props.isSocialMediaBlock && <SocialMediaBlock
                            bgColor={true}
                            theBackgroundColor={'white'}
                            iconColor={'rgba(0,0,0,0.85)'}
                            // isBackgroundColor={true}
                            color='primary'
                            spacing={1}
                            facebook={pageContext.page?.businessContact?.facebook}
                            twitter={pageContext.page?.businessContact?.twitter}
                            instagram={pageContext.page?.businessContact?.instagram}
                            linkedIn={pageContext.page?.businessContact?.linkedIn}
                            github={pageContext.page?.businessContact?.linkedIn}
                        />}
                </Grid>
            </Grid>}
        </Grid>
    )
}

export default FooterMenuContainer