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
    HeroAnimatedContentSectionType, ResumeBioSectionType,
    ResumeExperience,
    ResumeSkill,
    SanityHeroContentSlide,
    ServiceItemNoRefType
} from "../../../BlockContentTypes";
import ResumeExperienceItem from "../../my-digital-resume/resume-experience-section/ResumeExperienceItem";
import {COLORS} from "../../../../theme/common/ColorPalette";
import ResumeSkillReferences from "../../my-digital-resume/resume-skills-section/ResumeSkillReferences";
import PageContext from "../../../page-context/PageContext";
import ResumeBioSection from "../../my-digital-resume/resume-bio-section/ResumeBioSection";

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
    searchText?:string
}

const FullTextSearch: FunctionComponent<IProps> = (props: IProps) => {
    const customizedTheme = useContext(CustomizedThemeContext)
    const [searchText, setSearchText] = React.useState<string>()
    const myClasses = useStyles(customizedTheme)
    const [results, setResults] = React.useState<any[]>()
    const pageContext = useContext(PageContext)
    const searchCMS = async () => {
        console.log("about to search full text")
        if (searchText) {
            const cmsResponse = await cmsClient.fullTextSearch(searchText, pageContext.page?._id??"")
            console.log("results", cmsResponse)
            setResults(cmsResponse)
        }
    }
    const updateSearchText = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    return (<Grid container item>
        <Grid container item>

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
        {<Grid container item style={{overflow: "scroll", height: "800px"}} alignContent='flex-start'
               alignItems='flex-start'>
            <Grid item>

                {results?.length && <Typography
                    color='textSecondary'>{results?.length} {(results?.length ?? 1) > 1 ? "results" : "result"}</Typography>}
            </Grid>
            <Grid item container sx={{paddingX: "16px",}}>
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
                                    {/*                                 fontWeight={'bold'}>{convertedResumeSkill.title}</Typography></Grid>*/}
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

                            return <Grid container sx={{marginBottom: "16px"}}>
                                <Grid container item><Typography color='textSecondary'>Services:</Typography></Grid>
                                <Grid item sx={{paddingLeft: "16px"}} container>
                                    <Grid container item><Typography
                                        color='textSecondary'>{convertedAnimatedServicesSection.contentPreTitle}-{convertedAnimatedServicesSection.contentTitle}</Typography></Grid>
                                    {/*<Grid container item><Typography color='textSecondary'*/}
                                    {/*                                 fontWeight={'bold'}>{convertedResumeSkill.title}</Typography></Grid>*/}
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
                        case "ResumeExperience":
                            const convertedResumeExperience: ResumeExperience = theResult;

                            console.log(convertedResumeExperience)
                            return <Grid container sx={{
                                marginBottom: "16px",
                                backgroundColor: COLORS.LIGHTGRAY,
                                padding: "16px"
                            }}>
                                <Grid container>
                                    <Typography variant='h6' gutterBottom color='primary'>{convertedResumeExperience.title} Experience</Typography>
                                </Grid>
                                <ResumeExperienceItem experience={convertedResumeExperience}/>
                            </Grid>
                        case "ResumeSkill":
                            const convertedResumeSkill: ResumeSkill = theResult;

                            return <Grid container sx={{
                                marginBottom: "16px",
                                backgroundColor: COLORS.LIGHTGRAY,
                                padding: "16px"
                            }}>
                                <Grid container>
                                    <Typography variant='h6' gutterBottom color='primary'>Experience with {convertedResumeSkill.title}</Typography>
                                </Grid>
                                <ResumeSkillReferences skill={convertedResumeSkill}/>
                            </Grid>
                        case "ResumeBioSection":
                            const resumeBioSectionObj: ResumeBioSectionType = theResult;

                            return <Grid container sx={{
                                marginBottom: "16px",
                                backgroundColor: COLORS.LIGHTGRAY,
                                padding: "16px"
                            }}>
                                <Grid container>
                                    <Typography variant='h6' gutterBottom color='primary'>My Bio
                                        - {resumeBioSectionObj.title}</Typography>
                                </Grid>
                                <ResumeBioSection sectionData={resumeBioSectionObj} homePage={pageContext.page}/>
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