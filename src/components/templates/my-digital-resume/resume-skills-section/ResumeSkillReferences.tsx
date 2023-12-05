import React, {FunctionComponent} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import {Theme} from "@mui/material/styles";
import {Grid, Typography} from "@mui/material";
import {ResumeSkill} from "../../../BlockContentTypes";
import cmsClient from "../../../block-content-ui/cmsClient";
import ResumeExperienceItem from "../resume-experience-section/ResumeExperienceItem";
import {ResumePortfolioItem} from "../../../BlockContentTypes";
import ResumePortfolioEntry from "../resume-portfolio-section/ResumePortfolioEntry";
import PortfolioItemModal from "../resume-portfolio-section/PortfolioItemModal";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps {
    skill?: ResumeSkill
}

const ResumeSkillReferences: FunctionComponent<IProps> = (props:IProps) => {
    const classes = useStyles()

    const [referenceResults, setReferenceResults] = React.useState<[]>()

    const searchCMS = async () => {
        console.log("about to search full text")
        if (props.skill) {
            const cmsResponse = await cmsClient.skillReferenceSearch(props.skill)
            console.log("results", cmsResponse)
            setReferenceResults(cmsResponse)
        }
    }

    React.useEffect(()=>{
        // find the rerences of this skill
        searchCMS().then()

    }, [])
    
    const [currentItem, setCurrentItem] = React.useState<ResumePortfolioItem>()

    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    return (<Grid container item spacing={2}>
        {
            referenceResults?.map((searchResult:any)=>{
                 switch (searchResult?._type) {
                     case "ResumeExperience":
                         return <ResumeExperienceItem experience={searchResult} />
                     case "ResumePortfolioItem":
                         return <ResumePortfolioEntry portfolioItem={searchResult}/>
                     case "ResumeSkillSection":
                         return <></>
                     default:
                         return <Grid item container><Typography>{searchResult._type}</Typography></Grid>
                 }
            })
        }

    </Grid>)
}

export default ResumeSkillReferences