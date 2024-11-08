import {FunctionComponent, PropsWithChildren, useContext, useEffect, useState} from 'react'
import {Box, CircularProgress, Grid, IconButton, Tooltip, Typography, useTheme} from "@mui/material";
import {motion} from 'framer-motion'
import {Close} from "@mui/icons-material";
import LinkedExperiences from "./LinkedExperiences";
import LinkedPortfolioEntries from "./LinkedPortfolioEntries";
import ColoredPng from '../../../colored-png/ColoredPng';
import { ResumeSkillType } from '../../../BlockContentTypes';
import SanityContext from '../../../../common/sanityIo/sanity-context/SanityContext';

interface TooltipProps {
    resumeSkill: ResumeSkillType
    isOpenTooltip?: boolean
}

const ResumeSkillTooltipWrapper: FunctionComponent<PropsWithChildren<TooltipProps>>
    = ({resumeSkill,isOpenTooltip,children}: PropsWithChildren<TooltipProps>) => {
    const theme = useTheme()
    const sanityContext: any = useContext(SanityContext)

    const [isToolTipOpen, setIsToolTipOpen] = useState<boolean>(false)
    const handleCloseTip = () => setIsToolTipOpen(false);
    const handleOpenTip = () => setIsToolTipOpen(true)

    useEffect(() => {
        setIsToolTipOpen(!!isOpenTooltip)
    }, [isOpenTooltip])

    return <Grid container item role="skillTooltip"
    >
        <div>
            <Tooltip
                open={isToolTipOpen}
                onClose={handleCloseTip}
                onOpen={handleOpenTip}
                componentsProps={{
                    tooltip:
                        {
                            style:
                                {
                                    color: theme.palette.text.secondary,
                                    backgroundColor: theme.palette.primary.main
                                }
                        }
                }}
                title={
                    <motion.div
                        style={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.getContrastText(theme.palette.primary.main),
                            padding: "16px",
                            borderRadius: "2px",
                            overflow: "hidden"
                        }}
                        whileHover={{
                            scale: 1.5,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <Grid container item
                              position='relative'
                              spacing={1}
                        >
                            <Grid container item
                                  position='absolute'
                                  top={-20}
                                  right={-22}
                                  paddingTop={theme.spacing(2)}
                                  paddingRight={theme.spacing(.75)}
                                  justifyContent='flex-end'
                            >
                                <Grid item>
                                    <IconButton size='small' color='inherit'
                                                onClick={() => {
                                                    handleCloseTip()
                                                }}
                                    >
                                        <Close color='inherit'/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                            {<Grid item xs={12} container justifyContent='space-between' marginTop={1}>
                                {resumeSkill.iconPngSrc && <Grid item>
                                    <ColoredPng size={56} color='white'
                                                maskUrl={
                                                    sanityContext.placeholderOrImage
                                                    && sanityContext.placeholderOrImage(resumeSkill.iconPngSrc, 56, 56)
                                                }
                                    />
                                </Grid>}
                                {resumeSkill.proficiency &&
                                    <Grid container justifyContent='left' justifyItems='center' alignItems='center'>
                                        <Grid item container>
                                            <Typography
                                                variant='subtitle2' color='inherit'>Proficiency</Typography>
                                        </Grid>
                                        <Grid item position='relative'>
                                            <Grid item position='absolute' top={"10px"} left={"12px"}>
                                                <Typography
                                                    variant='caption'
                                                >
                                                    {resumeSkill.proficiency * 100}%
                                                </Typography>
                                            </Grid>
                                            <CircularProgress
                                                style={{color: "inherit"}}
                                                variant='determinate'
                                                value={resumeSkill.proficiency.valueOf() * 100}/>
                                        </Grid>
                                    </Grid>
                                }
                            </Grid>
                            }
                            <Grid item xs={12} container alignItems='center'>
                                <Grid item>
                                    <Grid item>
                                        <Typography
                                            variant='body1'
                                            fontWeight={600}>{resumeSkill.title}</Typography>
                                        <Grid item container>
                                            <LinkedExperiences resumeSkill={resumeSkill}/>
                                        </Grid>
                                        <Typography
                                            variant='subtitle1'
                                        >{resumeSkill.description}</Typography>
                                        <Grid item container>
                                            <LinkedPortfolioEntries resumeSkill={resumeSkill}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {
                                    resumeSkill.versions && resumeSkill.versions.length > 0
                                    && <Grid container item>
                                        <Box style={{
                                            borderTop: `1px solid ${theme.palette.getContrastText(theme.palette.primary.main)}`,
                                            marginTop: '8px',
                                            paddingTop: '8px',
                                            width: "100%"
                                        }}>
                                            <Typography variant='subtitle1'>
                                                Versions: {resumeSkill.versions.filter(Boolean).join(' | ')}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                    </motion.div>
                }>
                <Grid container item onClick={handleOpenTip}>{children}</Grid>
            </Tooltip>
        </div>
    </Grid>
}

export default ResumeSkillTooltipWrapper