import {FunctionComponent, useState} from 'react'
import {Chip, Grid, List, ListItem, Switch, Typography, useTheme} from "@mui/material";
import {ResumeExperienceType} from "../../../BlockContentTypes";
import dateUtils from "../../../../utils/dateUtils";
import ResumeSkillTooltipWrapper from "../resume-skills-section/ResumeSkillTooltipWrapper";
import {FormatListBulleted, Notes} from "@mui/icons-material";
import {sortBy} from "lodash";


interface IProps {
    experience: ResumeExperienceType
}

const ResumeExperienceItem: FunctionComponent<IProps> = (props: IProps) => {

    const theme = useTheme()
    const [isTooltipOpen, setIsToolTipOpen] = useState<number>()

    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (<Grid
        item
        container
        alignContent='flex-start'
        role={'experiencedivider'}
        xs={12}
    >
        <Grid container item role={'experienceheader'} alignContent='center' alignItems='center'>
            <Grid item xs={12} md={4}>
                <Typography display='inline'
                            variant='body2'>{props.experience.companyName}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} container sx={{paddingTop: "4px", paddingBottom: "4px"}}>
                <Typography variant='subtitle1'>{props.experience.companySubtitle}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Typography
                    variant='body1'>{props.experience.title}</Typography>
            </Grid>
        </Grid>
        <Grid container item>
            <Grid container item>
                <Grid item>
                    <Typography display='inline'
                                variant='body1'
                                fontWeight={'bold'}>{dateUtils.monthYear(props.experience.dateStart)}</Typography>

                    <Typography fontWeight={'bold'} display='inline'
                                variant='body1' style={{margin: theme.spacing(0, 1)}}>—</Typography>

                    {
                        !props.experience.isPresentPosition ? <Typography
                                fontWeight='bold'
                                display='inline'
                                variant='body1'
                            >
                                {dateUtils.monthYear(props.experience.dateEnd)}
                            </Typography>
                            : <Typography
                                fontWeight='bold'
                                display='inline'

                                variant='body1'
                            >
                                present
                            </Typography>
                    }

                </Grid>
            </Grid>
            <Grid container item xs={6}>
                <Typography
                    variant='body1'
                    fontStyle={'italic'}>
                    {
                        dateUtils.getLengthOfTime(props.experience.dateStart, props.experience.dateEnd, props.experience.isPresentPosition)
                    }
                </Typography>
            </Grid>
            <Grid container item xs={6} justifyContent='flex-end' alignContent='flex-end'>
                <FormatListBulleted
                    fontSize={'small'}
                    color={!checked ? "primary" : "secondary"}/>
                <Switch checked={checked}
                        onChange={handleChange} size='small'/>
                <Notes color={checked ? "primary" : "secondary"}
                       fontSize={'small'}/>
            </Grid>
        </Grid>
        {
            checked ? <Grid container item>
                    <Typography
                        variant='body1' gutterBottom>{props.experience.description}</Typography>
                </Grid>
                : <Grid container item paddingLeft="16px">
                    <List sx={{listStyleType: 'disc'}}>
                        {
                            props.experience.bulletedDescription?.map((aBullet, index) => {
                                return <ListItem key={"bulleted-description" + index}
                                                 sx={{display: 'list-item'}}>{aBullet}</ListItem>
                            })
                        }
                    </List>
                </Grid>
        }
        <Grid container
              item
              spacing={1}
              style={{
                  overflowX: "scroll",
                  paddingBottom: theme.spacing(1)
              }} wrap='nowrap'>
            {
                props.experience
                && props.experience.skillsUsed
                && sortBy(props.experience.skillsUsed, ["title"])?.map((skill, index) => {
                        return <Grid item key={index} onClick={() => {
                            setIsToolTipOpen(index)
                        }}
                        >
                            <ResumeSkillTooltipWrapper resumeSkill={skill} isOpenTooltip={index === isTooltipOpen}>
                                <Chip role='experienceskill' size='small'
                                      color='primary'
                                      label={skill.title}/>
                            </ResumeSkillTooltipWrapper>
                        </Grid>
                    })
            }
        </Grid>
    </Grid>)
}

export default ResumeExperienceItem