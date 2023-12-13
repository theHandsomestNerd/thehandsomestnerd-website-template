import React, {FunctionComponent} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {Grid, Typography} from "@mui/material";
import {ResumePortfolioItem, ResumeSkill} from "../../../BlockContentTypes";
import cmsClient from "../../../block-content-ui/cmsClient";
import ResumeExperienceItem from "../resume-experience-section/ResumeExperienceItem";
import ResumePortfolioEntry from "../resume-portfolio-section/ResumePortfolioEntry";
import ResumeSkillSetItem from "./ResumeSkillSetItem";

interface IProps {
    skill?: ResumeSkill
}

const ResumeSkillReferences: FunctionComponent<IProps> = (props: IProps) => {
    const [referenceResults, setReferenceResults] = React.useState<[]>()

    const searchCMS = async () => {
        console.log("about to search full text")
        if (props.skill) {
            const cmsResponse = await cmsClient.skillReferenceSearch(props.skill)
            console.log("results", cmsResponse)
            setReferenceResults(cmsResponse)
        }
    }

    React.useEffect(() => {
        // find the rerences of this skill
        searchCMS().then()

    }, [])
    
    const [currentItem, setCurrentItem] = React.useState<ResumePortfolioItem>()

    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    return (<Grid container item spacing={2}>
        {
            referenceResults?.map((searchResult: any) => {
                switch (searchResult?._type) {
                    case "ResumeExperience":
                        return <ResumeExperienceItem experience={searchResult}/>
                    case "ResumePortfolioItem":
                        return <ResumePortfolioEntry portfolioItem={searchResult}/>
                    case "ResumeSkillSection":
                        return <></>
                    case "ResumeSkillset":
                        return <Grid container item><ResumeSkillSetItem skillset={searchResult}/></Grid>
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