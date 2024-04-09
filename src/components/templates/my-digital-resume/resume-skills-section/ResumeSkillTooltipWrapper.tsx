import {FunctionComponent, PropsWithChildren, ReactElement, useContext, useEffect, useState} from 'react'
import {Box, CircularProgress, Grid, IconButton, Tooltip, Typography, useTheme} from "@mui/material";
import {ResumeSkillType} from "../../../BlockContentTypes";
import ColoredPng from "../../../colored-png/ColoredPng";
import SanityContext from "../../../../common/sanityIo/sanity-context/SanityContext";
import {motion} from 'framer-motion'
import {Close} from "@mui/icons-material";
import LinkedExperiences from "./LinkedExperiences";
import LinkedPortfolioEntries from "./LinkedPortfolioEntries";

interface IProps {
    resumeSkill: ResumeSkillType
    isTipOpen: boolean
}

const ResumeSkillTooltipWrapper: FunctionComponent<PropsWithChildren<IProps>> = (props: PropsWithChildren<IProps>) => {
    const customizedThemeContext = useTheme()
    const sanityContext = useContext(SanityContext)

    const [isTipOpen, setIsTipOpen] = useState<boolean>(false)
    const closeTip = () => {
        setIsTipOpen(false)
    }
    const openTip = () => {
        setIsTipOpen(true)
    }

    useEffect(() => {
        if(isTipOpen !== props.isTipOpen){
            setIsTipOpen(props.isTipOpen)
        }

        }, [props.isTipOpen])


    // const smDown = useMediaQuery(customizedThemeContext.breakpoints.down('sm'))
    return <Grid container item
                 >
        {props.resumeSkill.description ?
            <motion.div
                whileHover={{
                    color: customizedThemeContext.palette.primary.main
                }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            ><Tooltip
                open={isTipOpen}
                onClose={closeTip}
                onOpen={openTip}
                componentsProps={{
                    tooltip:
                        {
                            style:
                                {
                                    color: customizedThemeContext.palette.text.secondary,
                                    backgroundColor: customizedThemeContext.palette.primary.main
                                }
                        }
                }}
                // disableHoverListener={smDown}
                title={
                    <motion.div
                        style={{
                            backgroundColor: customizedThemeContext.palette.primary.main,
                            padding: "16px",
                            borderRadius: "2px",
                            overflow: "hidden"
                        }}
                        whileHover={{
                            scale: 1.5,
                            padding: "16px",
                            color: customizedThemeContext.palette.primary.main
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <Grid container item
                              paddingTop={"2px"}
                              paddingBottom={"4px"}
                              position='relative'
                              spacing={1}
                        >
                            <Grid container item
                                  color='white'
                                  position='absolute'
                                  top={-20}
                                  right={-22}
                                  width='100%'
                                  paddingTop={customizedThemeContext.spacing(1.5)}
                                  paddingRight={customizedThemeContext.spacing(.75)}
                                  justifyContent='flex-end'
                            >
                                <Grid item>
                                    <IconButton size='small' color='inherit'
                                                onClick={() => {
                                                    closeTip()
                                                }}
                                    >
                                        <Close color='inherit'/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                            {<Grid item xs={12} container justifyContent='space-between' marginTop={1}>
                                {props.resumeSkill.iconPngSrc && <Grid item>
                                    <ColoredPng size={56} color='white'
                                                maskUrl={
                                                    sanityContext.placeholderOrImage
                                                    && sanityContext.placeholderOrImage(props.resumeSkill.iconPngSrc, 56, 56)
                                                }
                                    />
                                </Grid>}
                                {props.resumeSkill.proficiency &&
                                    <Grid item justifyContent='center' justifyItems='center' alignItems='center'>
                                        <Grid item container justifyContent='center'>

                                            <Typography
                                                variant='subtitle2' color='white'>Proficiency</Typography>
                                        </Grid>
                                        <Grid item container justifyContent='center' position='relative'>
                                            <Box position='absolute' top={"10px"} left={"16px"}>
                                                <Typography
                                                    variant='caption'
                                                    color='white'>{(props.resumeSkill.proficiency?.valueOf() ?? 0) * 100}%</Typography>

                                            </Box>
                                            <CircularProgress
                                                style={{color: "white"}}
                                                variant='determinate'
                                                value={(props.resumeSkill.proficiency?.valueOf() ?? 0) * 100}/>
                                        </Grid>
                                    </Grid>
                                }
                            </Grid>
                            }
                            <Grid item xs={12} container alignItems='center'>
                                <Grid item>
                                    <Grid item>
                                        <Grid item>
                                            <Typography
                                                variant='body1' color='white'
                                                fontWeight={600}>{props.resumeSkill.title}</Typography>
                                        </Grid>
                                        <Grid item container>
                                            <LinkedExperiences resumeSkill={props.resumeSkill}/>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant='subtitle1'
                                                color='whitesmoke'>{props.resumeSkill.description}</Typography>
                                        </Grid>
                                        <Grid item container>
                                            <LinkedPortfolioEntries resumeSkill={props.resumeSkill}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {
                                    props.resumeSkill.versions && props.resumeSkill.versions.length > 0
                                    && props.resumeSkill.versions[0].length > 0
                                    && <Grid container item>
                                        <Box style={{
                                            borderTop: `1px solid #d2d2d2`,
                                            marginTop: '8px',
                                            paddingTop: '8px',
                                            width: "100%"
                                        }}>
                                            <Typography
                                                display='inline'
                                                variant='subtitle1' color='white'>{`Versions: `}</Typography>
                                            {
                                                props.resumeSkill.versions.map((versionNumber, index) => {
                                                    return <Typography display='inline' key={index}
                                                                       variant='subtitle1'
                                                                       color='white'>{versionNumber}{(index <= ((props.resumeSkill.versions?.length ?? -1) - 2)) ? ' | ' : ''}</Typography>
                                                })
                                            }
                                        </Box>
                                    </Grid>
                                }
                            </Grid>
                        </Grid>
                    </motion.div>
                }>
                <Grid container item onClick={openTip}>{props.children as ReactElement}</Grid>
            </Tooltip>
            </motion.div>
            :
            <>{props.children as ReactElement}</>
        }
    </Grid>
}

export default ResumeSkillTooltipWrapper