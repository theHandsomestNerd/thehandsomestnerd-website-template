import React, {ChangeEvent, FunctionComponent, useContext} from 'react'
import {Grid, TextField, Typography} from "@mui/material";
import LoadingButton from "../../../loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../../loading-button/ButtonGroupMemberEnum";
import {Search} from "@mui/icons-material";
import cmsClient from "../../../block-content-ui/cmsClient";
import CustomizedThemeContext from "../../../customized-theme-provider/CustomizedThemeContext";
import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {
    AnimatedAboutUsSectionType,
    HeroAnimatedContentSectionType,
    SanityHeroContentSlide,
    ServiceItemNoRefType
} from "../../../BlockContentTypes";

export const useStyles = makeStyles((theme: Theme) => ({
    endAdornedInput: {
        "& .MuiFilledInput-adornedEnd": {
            border: "1px solid red",
            // marginRight: '-12px',
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
        },
        "& .MuiOutlinedInput-adornedEnd": {
            border: "1px solid white",
            // paddingRight: 0,
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
        },
        "& .MuiInputBase-input": {
            borderRightWidth: 0,
            "&:hover": {
                borderBottomColor: "white"
            },
        },
        "& .MuiButton-containedSecondary": {
            border: 0,
            borderLeft: '1px solid white'
        },
    },
}))

interface IProps {
}

const FullTextSearch: FunctionComponent<IProps> = (props: IProps) => {
    const customizedTheme = useContext(CustomizedThemeContext)
    const [searchText, setSearchText] = React.useState<string>()
    const myClasses = useStyles(customizedTheme)
    const [results, setResults] = React.useState<any[]>()
    const searchCMS = async () => {
        console.log("about to search full text")
        if (searchText) {
            const cmsResponse = await cmsClient.fullTextSearch(searchText)
            console.log("results", cmsResponse)
            setResults(cmsResponse)
        }
    }
    const updateSearchText = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    return (<Grid container item>
        <Grid container>

            <TextField fullWidth
                       key={'full-text-search-field'}
                       label={<Typography>Search</Typography>}
                       variant='outlined'
                       style={{paddingRight: "0", height: "60px"}}
                       type='search'
                       value={searchText}
                       onChange={updateSearchText}
                       className={myClasses.endAdornedInput}
                       InputProps={{
                           sx: {backgroundColor: "white"},
                           // notched: true,
                           endAdornment:
                               <LoadingButton
                                   width={64}
                                   // isLoading={isLoading}
                                   groupiness={ButtonGroupMemberEnum.RIGHT}
                                   // disabled={!!(email.length === 0 || data || isError || (email && (email.length > 0) && !isEmail(email)))}
                                   clickHandler={searchCMS}
                                   color='primary'
                                   variant='contained'><Search/></LoadingButton>
                           ,
                       }}/>
        </Grid>
        {<Grid container>
            <Grid item>

                {results?.length && <Typography
                    color='textSecondary'>{results?.length} {(results?.length ?? 1) > 1 ? "results" : "result"}</Typography>}
            </Grid>
            <Grid item container sx={{paddingX: "16px"}}>
                {results?.map((theResult: any) => {
                    switch (theResult?._type) {
                        case "ServiceItem":
                            const convertedServiceItem: ServiceItemNoRefType = theResult;
                            return <Grid container sx={{marginBottom: "16px"}}>
                                <Grid container item><Typography color='textSecondary'>Service We
                                    Provide:</Typography></Grid>
                                <Grid item sx={{paddingLeft: "16px"}}>
                                    <Grid container item><Typography color='textSecondary'
                                                                     fontWeight={'bold'}>{convertedServiceItem.contentTitle}</Typography></Grid>
                                    <Grid container item><Typography
                                        color='textSecondary'>{convertedServiceItem.contentText}</Typography></Grid>
                                </Grid>
                            </Grid>
                        case "HeroAnimatedContentSection":
                            const convertedAnimatedHeroSection: HeroAnimatedContentSectionType = theResult;

                            return <Grid container sx={{marginBottom: "16px"}}>
                                <Grid container item><Typography color='textSecondary'>Animated Slide
                                    Show:</Typography></Grid>
                                <Grid item sx={{paddingLeft: "16px"}} container>
                                    {/*<Grid container item><Typography color='textSecondary'*/}
                                    {/*                                 fontWeight={'bold'}>{convertedAnimatedServicesSection.title}</Typography></Grid>*/}
                                    {convertedAnimatedHeroSection.contentSlides.map((slide: SanityHeroContentSlide) => {
                                        return <Grid container item sx={{
                                            borderLeft: "1px solid whitesmoke",
                                            marginBottom: "8px",
                                            paddingLeft: "8px"
                                        }}>
                                            <Grid item container>
                                                <Typography color='textSecondary'
                                                            fontWeight={'bold'}>{`${
                                                    slide
                                                        .contentWelcomeMessage
                                                } - ${slide.contentTitle}`}</Typography>
                                            </Grid>
                                            <Grid item container>
                                                <Typography color='textSecondary'
                                                            variant={'body1'}>{slide.contentText}</Typography>
                                            </Grid>
                                        </Grid>
                                    })}
                                </Grid>
                            </Grid>
                        case "AnimatedServicesSection":
                            const convertedAnimatedServicesSection: AnimatedAboutUsSectionType = theResult;

                            console.log(convertedAnimatedServicesSection)
                            return <Grid container sx={{marginBottom: "16px"}}>
                                <Grid container item><Typography color='textSecondary'>Services:</Typography></Grid>
                                <Grid item sx={{paddingLeft: "16px"}} container>
                                    <Grid container item><Typography
                                        color='textSecondary'>{convertedAnimatedServicesSection.contentPreTitle}-{convertedAnimatedServicesSection.contentTitle}</Typography></Grid>
                                    {/*<Grid container item><Typography color='textSecondary'*/}
                                    {/*                                 fontWeight={'bold'}>{convertedAnimatedServicesSection.title}</Typography></Grid>*/}
                                    {convertedAnimatedServicesSection.contentTexts.map((textContent: string) => {
                                        return <Grid container item sx={{
                                            borderLeft: "1px solid whitesmoke",
                                            marginBottom: "8px",
                                            paddingLeft: "8px"
                                        }}>
                                            <Grid item container>
                                                <Typography color='textSecondary'
                                                            fontWeight={'bold'}>{textContent}</Typography>
                                            </Grid>
                                        </Grid>
                                    })}
                                </Grid>
                            </Grid>
                        default:
                            return <Grid container sx={{marginBottom: "16px"}}><Typography
                                color='textSecondary'>{theResult?._type}</Typography></Grid>
                    }

                })}


            </Grid>

        </Grid>}
    </Grid>)
}

export default FullTextSearch