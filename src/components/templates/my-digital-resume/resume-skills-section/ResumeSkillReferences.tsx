import React, {FunctionComponent, useContext} from 'react'
import {Grid, Typography} from "@mui/material";
import {ResumePortfolioItem, ResumeSkill} from "../../../BlockContentTypes";
import cmsClient from "../../../block-content-ui/cmsClient";
import ResumeExperienceItem from "../resume-experience-section/ResumeExperienceItem";
import ResumePortfolioEntry from "../resume-portfolio-section/ResumePortfolioEntry";
import ResumeSkillSetItem from "./ResumeSkillSetItem";
import PageContext from "../../../page-context/PageContext";

interface IProps {
    skill?: ResumeSkill
}

const ResumeSkillReferences: FunctionComponent<IProps> = (props: IProps) => {
    const [referenceResults, setReferenceResults] = React.useState<[]>()

    const pageContext = useContext(PageContext)

    const searchCMS = async () => {
        // console.log("about to search full text")
        if (props.skill) {
            const cmsResponse = await cmsClient.skillReferenceSearch(props.skill, pageContext.page?._id ?? "")

            setReferenceResults(cmsResponse)
        }
    }

    React.useEffect(() => {
        // find the rerences of this skill
        searchCMS().then()
    }, [])


    return (<Grid container item spacing={2}>
        {
            referenceResults?.map((searchResult: any, index) => {


                switch (searchResult?._type) {
                    case "ResumeExperience":
                        return <Grid container item>
                            <Grid container>
                                {<Typography color='textPrimary' variant='subtitle2'
                                             textTransform={'uppercase'} sx={{
                                    borderLeft: "1px solid red",
                                    paddingLeft: "4px"
                                }}>My Job Experience</Typography>}
                            </Grid>
                            <ResumeExperienceItem
                                experience={searchResult}/>
                        </Grid>
                    case "ResumePortfolioItem":
                        return <Grid xs={12} sm={6} lg={4} xl={4} item>
                            <Typography color='textPrimary'
                                        variant='subtitle2'
                                        fontWeight={'bold'}
                                        textTransform={'uppercase'} sx={{
                                borderLeft: "1px solid red",
                                paddingLeft: "4px",
                                marginBottom: "4px"
                            }}>My Portfolio item</Typography>
                            <ResumePortfolioEntry portfolioItem={searchResult}/>
                        </Grid>
                    case "ResumeSkillSection":
                        return <></>
                    case "ResumeSkillset":
                        return <Grid container item>
                            <Grid container>
                                {<Typography color='textPrimary' variant='subtitle2'
                                             fontWeight={'bold'}
                                             textTransform={'uppercase'} sx={{
                                    borderLeft: "1px solid red",
                                    paddingLeft: "4px"
                                }}>My Related
                                    Skills</Typography>}
                            </Grid>
                            <ResumeSkillSetItem skillset={searchResult}/>
                        </Grid>
                    // case "PortfolioItem":
                    //     return <>{searchResult.title}</>
                    default:
                        return <Grid item container><Typography>{searchResult._type}</Typography></Grid>
                }
            })
        }

    </Grid>)
}

export default ResumeSkillReferences