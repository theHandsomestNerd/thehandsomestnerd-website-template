import React, {FunctionComponent} from 'react'

import makeStyles from "@mui/styles/makeStyles";
import { Theme} from "@mui/material/styles";
import {Grid, Typography} from "@mui/material";
import {COLORS} from "../../../../theme/common/ColorPalette";
import {ResumeSkillSet} from "../../../BlockContentTypes";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps {
    skillset: ResumeSkillSet
}

const ResumeSkillSetItem: FunctionComponent<IProps> = (props:IProps) => {
    const classes = useStyles()

    React.useEffect(()=>{
    }, [])

    return (<Grid item container xs={11} sm={6} md={6} alignContent='flex-start'
                  role='skilldivider'
                  style={{
                      // borderBottom: `1px solid ${index2 >= (props.sectionData?.skillsets?.length ?? 0) - 2 ? 'transparent' : COLORS.LIGHTGRAY}`
                  }}>
        <Grid container item>
            <Typography display='inline'
                        role='skillheader'
                        variant='body2'>{props.skillset.title}</Typography>
        </Grid>
        <Grid container item>
            {
                props.skillset.skills?.map((skill, index) => {
                    return <Typography role='subskill' key={index} display='inline'
                                       variant='body1'>{skill.title}{index !== (props.skillset.skills?.length ?? 0) - 1 ? ',' : ''}&nbsp;</Typography>
                })
            }
        </Grid>
    </Grid>)
}

export default ResumeSkillSetItem