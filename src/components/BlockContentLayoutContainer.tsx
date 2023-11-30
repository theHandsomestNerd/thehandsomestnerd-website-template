import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Card, Grid, Link, useTheme} from '@mui/material'
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {
    AnimatedAboutUsSectionType, AnimatedPortfolioSectionType, AnimatedServicesSectionType, HeadlineCTASectionType,
    HeroAnimatedContentSectionType,
    HowItWorksSectionType, MapSectionType,
    PortfolioSectionType,
    ResumeBioSectionType,
    ResumeContactUsSectionType,
    ResumeEducationSectionType,
    ResumeExperienceSectionType,
    ResumeFeedbackSectionType,
    ResumePortfolioSectionType,
    ResumeSkillSectionType,
    ThwAboutProprietorSectionType,
    ThwContactUsSectionType,
    ThwHeroContentSectionType,
    ThwMottoSectionType,
    ThwPositivePsychologySectionType,
    ThwServiceItemType,
    ThwServicesSectionType,
    ThwWhyChooseUsSectionType,
    WebDevAboutUsSectionType,
    WebDevHeroContentSectionType,
    WebDevStatsCounterSectionType,
    WebDevTestimonialsSectionType,
} from "./BlockContentTypes";
import useThwCommonStyles from "../common/sanityIo/ThwCommonStyles";
import ThwPositivePsychology from "./templates/transform-hw/ThwPositivePsychology";
import ThwMottoSection from "./templates/transform-hw/ThwMottoSection";
import AboutTheProprietorSection from "./templates/transform-hw/AboutTheProprietorSection";
import ThwServicesSection from "./templates/transform-hw/ThwServicesSection";
import ThwWhyChooseUsSection from "./templates/transform-hw/ThwWhyChooseUsSection";
import ThwContactUsSection from "./templates/transform-hw/ThwContactUsSection";
import {SanityHomePage} from "./block-content-ui/static-pages/cmsStaticPagesClient";
import ThwServicesEducationPage from "./templates/transform-hw/service-education-page/ThwServiceEducationPage";
import ResumeBioSection from "./templates/my-digital-resume/resume-bio-section/ResumeBioSection";
import MMHeroContentSection from "./templates/mackenzies-mind/MMHeroContentSection";
import ResumeSkillsSection from "./templates/my-digital-resume/resume-skills-section/ResumeSkillsSection";
import ResumeExperienceSection from "./templates/my-digital-resume/resume-experience-section/ResumeExperienceSection";
import ResumeEducationSection from "./templates/my-digital-resume/resume-education-section/ResumeEducationSection";
import ResumeFeedbackSection from "./templates/my-digital-resume/resume-feedback-section/ResumeFeedbackSection";
import ResumeContactUsSection from "./templates/my-digital-resume/ResumeContactUsSection";
import ResumePortfolioSection from "./templates/my-digital-resume/resume-portfolio-section/ResumePortfolioSection";
import WebDevHeroContentSection from "./templates/web-dev-site/WebDevHeroContentSection";
import WebDevStatsCounterSection from "./templates/web-dev-site/WebDevStatsCounterSection";
import WebDevAboutUsSection from "./templates/web-dev-site/WebDevAboutUsSection";
import WebDevServicesSection from "./templates/web-dev-site/WebDevServicesSection";
import WebDevPortfolioSection from "./templates/web-dev-site/WebDevPortfolioSection";
import WebDevTestimonialsSection from "./templates/web-dev-site/WebDevTestimonialsSection";
import WebDevHowItWorksSection from "./templates/web-dev-site/WebDevHowItWorksSection";
import HeroAnimatedContentSection from "./animated/HeroAnimatedContentSection";
import AnimatedAboutUsSection from "./animated/AnimatedAboutUsSection";
import AnimatedServicesSection from './animated/AnimatedServicesSection'
import AnimatedPortfolioSection from "./animated/AnimatedPortfolioSection";
import HeadlineCTASection from "./animated/HeadlineCTASection";
import MapSection from "./animated/MapSection";

export type BlockContentLayoutContainerProps = {
    content?: any,
    homePage: SanityHomePage
}

const BlockContentLayoutContainer: FunctionComponent<BlockContentLayoutContainerProps> = (props) => {
    const classes = useThwCommonStyles()
    const theme= useTheme()

    return (
        <Grid container item>
            {props?.content?.map((columnLayoutContainer: any, index: number) => {
                switch (columnLayoutContainer._type) {
                    case 'column1BlockContent':
                        return <Grid key={'column1BlockContent'} container justifyContent='center' alignItems='stretch'>
                            <Grid item>
                                <Card className={classes.root} style={{paddingTop: '80px'}}>
                                    <Grid container item xs={12} className={classes.layoutContainer}>
                                        <Grid item xs={12}>
                                            <BlockContent
                                                blocks={columnLayoutContainer.content}
                                                serializers={blockSerializers}
                                                projectId={sanityClient.config().projectId}
                                                dataset={sanityClient.config().dataset}
                                            />
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    case 'column2BlockContent':
                        return <Grid key={'column2BlockContent'} container justifyContent='center' alignItems='stretch'>
                            <Grid item>
                                <Card className={classes.root} style={{paddingTop: '80px'}}>
                                    <Grid container item xs={12} className={classes.layoutContainer}>
                                        <Grid item xs={6}>
                                            <BlockContent
                                                blocks={columnLayoutContainer.column1.content}
                                                serializers={blockSerializers}
                                                projectId={sanityClient.config().projectId}
                                                dataset={sanityClient.config().dataset}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <BlockContent
                                                blocks={columnLayoutContainer.column2.content}
                                                serializers={blockSerializers}
                                                projectId={sanityClient.config().projectId}
                                                dataset={sanityClient.config().dataset}
                                            />
                                        </Grid>
                                    </Grid>
                                </Card></Grid>
                        </Grid>
                    case 'transformHeroContentSection':
                        const thwHeroSection: ThwHeroContentSectionType = columnLayoutContainer

                        return (
                            <Grid key={'transformHeroContentSection'} container item xs={12}>
                                <Link id={"TOP_OF_PAGE"} underline="hover"><></>
                                </Link>
                                <MMHeroContentSection
                                    sectionData={thwHeroSection}
                                />
                            </Grid>
                        );
                    case 'transformServiceItem':
                        const thwServiceEducationPage: ThwServiceItemType = columnLayoutContainer

                        // const fetchedServiceItem =

                        return (
                            <Grid key={'transformServiceItem'} container item xs={12}>
                                <Link id={"TOP_OF_PAGE"} underline="hover"><></>
                                </Link>
                                <ThwServicesEducationPage
                                    serviceData={thwServiceEducationPage}
                                />
                            </Grid>
                        );
                    case 'transformPositivePsychologySection':
                        const thwPositivePsychologySection: ThwPositivePsychologySectionType = columnLayoutContainer

                        return (
                            <Grid key={'transformPositivePsychologySection'} container item xs={12}
                                  justifyContent='center'
                                  style={{backgroundColor: theme.palette.background.paper}}>
                                <Link
                                    id={"ABOUT_US"}
                                    style={{position: "relative", top: -80}}
                                    underline="hover"><></>
                                </Link>
                                <ThwPositivePsychology
                                    sectionData={thwPositivePsychologySection}
                                />
                            </Grid>
                        );
                    case 'transformMottoSection':
                        const thwMottoSection: ThwMottoSectionType = columnLayoutContainer

                        return <Grid key={'transformMottoSection'} container item xs={12} justifyContent='center'
                                     style={{backgroundColor: theme.palette.background.paper}}>
                            <ThwMottoSection
                                sectionData={thwMottoSection}
                            />
                        </Grid>
                    case 'transformAboutProprietorSection':
                        const thwProprietorSection: ThwAboutProprietorSectionType = columnLayoutContainer

                        return (
                            <Grid key={'transformAboutProprietorSection'} container item xs={12} justifyContent='center'
                                  style={{backgroundColor: theme.palette.background.paper}}>
                                <Link
                                    id={"ABOUT_PROPRIETOR"}
                                    style={{position: "relative", top: -80}}
                                    underline="hover"><></>
                                </Link>
                                <AboutTheProprietorSection
                                    sectionData={thwProprietorSection}
                                />
                            </Grid>
                        );
                    case 'transformServicesSection':
                        const thwServicesSection: ThwServicesSectionType = columnLayoutContainer

                        return (
                            <Grid key={'transformServicesSection'} container item xs={12} justifyContent='center'
                                  style={{backgroundColor: theme.palette.background.paper}}>
                                <Link
                                    id={"SERVICES"}
                                    style={{position: "relative", top: -80}}
                                    underline="hover"><></>
                                </Link>
                                <ThwServicesSection
                                    sectionData={thwServicesSection}
                                />
                            </Grid>
                        );
                    case 'transformWhyChooseUsSection':
                        const thwWCUSection: ThwWhyChooseUsSectionType = columnLayoutContainer

                        return <Grid key={'transformWhyChooseUsSection'} container item xs={12} justifyContent='center'
                                     style={{backgroundColor: theme.palette.background.paper}}>
                            <ThwWhyChooseUsSection
                                sectionData={thwWCUSection}
                            />
                        </Grid>
                    case 'transformContactUsSection':
                        const thwCUSection: ThwContactUsSectionType = columnLayoutContainer

                        return <Grid key={'transformContactUsSection'} container item xs={12} justifyContent='center'
                                     style={{backgroundColor: theme.palette.background.paper}}>
                            <ThwContactUsSection
                                sectionData={thwCUSection}
                            />
                        </Grid>
                    case 'ResumeBioSection':
                        const resumeBioSection: ResumeBioSectionType = columnLayoutContainer

                        return (
                            <Grid key={'ResumeBioSection'} container item xs={12} justifyContent='center'>
                                <Link
                                    id={"TOP_OF_PAGE"}
                                    style={{position: "relative", top: -80}}
                                    underline="hover"><></>
                                </Link>
                                <Link id={"BIO"} style={{position: "relative", top: -80}} underline="hover"><></>
                                </Link>

                                <ResumeBioSection
                                    homePage={props.homePage}
                                    sectionData={resumeBioSection}
                                />
                            </Grid>
                        );
                    case 'ResumeSkillSection':
                        const resumeSkillSection: ResumeSkillSectionType = columnLayoutContainer

                        return (
                            <Grid key={'ResumeSkillSection'} container item xs={12} justifyContent='center'>
                                <Link id={"SKILLS"} style={{position: "relative", top: -80}} underline="hover"><></>
                                </Link>

                                <ResumeSkillsSection
                                    sectionData={resumeSkillSection}
                                />
                            </Grid>
                        );
                    case 'ResumeExperienceSection':
                        const resumeExperienceSection: ResumeExperienceSectionType = columnLayoutContainer

                        return (
                            <Grid key={'ResumeExperienceSection'} container item xs={12} justifyContent='center'>
                                <Link
                                    id={"EXPERIENCE"}
                                    style={{position: "relative", top: -80}}
                                    underline="hover"><></>
                                </Link>

                                <ResumeExperienceSection
                                    sectionData={resumeExperienceSection}
                                />
                            </Grid>
                        );
                    case 'ResumeEducationSection':
                        const resumeEducationSection: ResumeEducationSectionType = columnLayoutContainer

                        return (
                            <Grid key={'ResumeEducationSection'} container item xs={12} justifyContent='center'>
                                <Link
                                    id={"EDUCATION"}
                                    style={{position: "relative", top: -80}}
                                    underline="hover"><></>
                                </Link>

                                <ResumeEducationSection
                                    sectionData={resumeEducationSection}
                                />
                            </Grid>
                        );
                    case 'ResumeFeedbackSection':
                        const resumeFeedbackSection: ResumeFeedbackSectionType = columnLayoutContainer

                        return (
                            <Grid key={'ResumeFeedbackSection'} container item xs={12} justifyContent='center'>
                                <Link
                                    id={"FEEDBACK"}
                                    style={{position: "relative", top: -80}}
                                    underline="hover"><></>
                                </Link>

                                <ResumeFeedbackSection
                                    sectionData={resumeFeedbackSection}
                                />
                            </Grid>
                        );
                    case 'ResumePortfolioSection':
                        const resumePortfolioSection: ResumePortfolioSectionType = columnLayoutContainer

                        return (
                            <Grid key={'ResumePortfolioSection'} container item xs={12} justifyContent='center'>
                                <Link
                                    id={"PORTFOLIO"}
                                    style={{position: "relative", top: -80}}
                                    underline="hover"><></>
                                </Link>

                                <ResumePortfolioSection
                                    sectionData={resumePortfolioSection}
                                />
                            </Grid>
                        );
                    case 'ResumeContactUsSection':
                        const resumeContactUsSection: ResumeContactUsSectionType = columnLayoutContainer

                        return (
                            <Grid key={'ResumeContactUsSection'} container item xs={12} justifyContent='center'>
                                <Link id={"CONTACT"} style={{position: "relative", top: -80}} underline="hover"><></>
                                </Link>

                                <ResumeContactUsSection
                                    sectionData={resumeContactUsSection}
                                />
                            </Grid>
                        );
                    case 'WebDevHeroContentSection':
                        const webDevHeroSection: WebDevHeroContentSectionType = columnLayoutContainer

                        return (
                            <Grid key={'webDevHeroContentSection'} container item xs={12}>
                                <Link id={"TOP_OF_PAGE"} underline="hover"><></>
                                </Link>
                                <WebDevHeroContentSection
                                    sectionData={webDevHeroSection}
                                />
                            </Grid>
                        );
                    case 'WebDevStatsCounterSection':
                        const webDevStatsCounterSection: WebDevStatsCounterSectionType = columnLayoutContainer

                        return <Grid key={'webDevStatsCounterSection'} container item xs={12}>
                            <WebDevStatsCounterSection
                                sectionData={webDevStatsCounterSection}
                            />
                        </Grid>
                    case 'WebDevAboutUsSection':
                        const webDevAboutUsSection: WebDevAboutUsSectionType = columnLayoutContainer

                        return (
                            <Grid key={'webDevAboutUsSection'} container item xs={12}>
                                <Link id={"ABOUT_US"} underline="hover"><></>
                                </Link>
                                <WebDevAboutUsSection
                                    sectionData={webDevAboutUsSection}
                                />
                            </Grid>
                        );
                    case 'ServicesSection':
                        const webDevServicesSection: PortfolioSectionType = columnLayoutContainer

                        return (
                            <Grid key={'webDevServicesSection'} container item xs={12}>
                                <Link id={"SERVICES"} underline="hover"><></>
                                </Link>

                                <WebDevServicesSection
                                    sectionData={webDevServicesSection}
                                />
                            </Grid>
                        );
                    case 'PortfolioSection':
                        const webDevPortfolioSection: PortfolioSectionType = columnLayoutContainer

                        return (
                            <Grid key={'webDevPortfolioSection'} container item xs={12}>
                                <Link id={"PORTFOLIO"} underline="hover"><></>
                                </Link>

                                <WebDevPortfolioSection
                                    sectionData={webDevPortfolioSection}
                                />
                            </Grid>
                        );
                    case 'TestimonialsSection':
                        const webDevTestimonialsSection: WebDevTestimonialsSectionType = columnLayoutContainer

                        return (
                            <Grid key={'webDevTestimonialsSection'} container item xs={12}>
                                <Link id={"TESTIMONIALS"} underline="hover"><></>
                                </Link>

                                <WebDevTestimonialsSection
                                    sectionData={webDevTestimonialsSection}
                                />
                            </Grid>
                        );
                    case 'WebDevHowItWorksSection':
                        const webDevHowItWorksSection: HowItWorksSectionType = columnLayoutContainer

                        return (
                            <Grid key={'webDevHowItWorksSection'} container item xs={12}>
                                <Link id={"HOW_IT_WORKS"} underline="hover"><></>
                                </Link>
                                <WebDevHowItWorksSection
                                    sectionData={webDevHowItWorksSection}
                                />
                            </Grid>
                        );
                    case 'HeroAnimatedContentSection':
                        const heroAnimatedContentSection: HeroAnimatedContentSectionType = columnLayoutContainer
                        return (
                            <Grid key={'animated-hero'} container item xs={12}>
                                <Link id={"ANIMATED_HERO"} underline="hover"><></>
                                </Link>
                                <HeroAnimatedContentSection
                                    sectionData={heroAnimatedContentSection}
                                />
                            </Grid>
                        );
                    case 'AnimatedAboutUsSection':
                        const animatedAboutusSection: AnimatedAboutUsSectionType = columnLayoutContainer
                        return (
                            <Grid key={'animated-about-us'} container item xs={12}>
                                <Link id={"ANIMATED_ABOUT_US"} underline="hover"><></>
                                </Link>
                                <AnimatedAboutUsSection
                                    sectionData={animatedAboutusSection}
                                />
                            </Grid>
                        );
                    case 'AnimatedServicesSection':
                        const animatedServicesSection: AnimatedServicesSectionType = columnLayoutContainer
                        return (
                            <Grid key={'animated-services'} container item xs={12}>
                                <Link id={"ANIMATED_SERVICES"} underline="hover"><></>
                                </Link>
                                <AnimatedServicesSection
                                    sectionData={animatedServicesSection}
                                />
                            </Grid>
                        );
                    case 'AnimatedPortfolioSection':
                        const animatedPortfolioSection: AnimatedPortfolioSectionType = columnLayoutContainer
                        return (
                            <Grid key={'animated-portfolio'} container item xs={12}>
                                <Link id={"ANIMATED_PORTFOLIO"} underline="hover"><></>
                                </Link>
                                <AnimatedPortfolioSection
                                    sectionData={animatedPortfolioSection}
                                />
                            </Grid>
                        );
                    case 'HeadlineCTASection':
                        const headlineSection: HeadlineCTASectionType = columnLayoutContainer

                        return <Grid key={'headline-section'} container item style={{zIndex: 1000}}>
                            <HeadlineCTASection
                                sectionData={headlineSection}
                            />
                        </Grid>
                     case 'MapSection':
                        const mapSection: MapSectionType = columnLayoutContainer

                        return <Grid key={'map-section'} container item>
                            <MapSection
                                sectionData={mapSection}
                            />
                        </Grid>
                    default:
                        return <Grid container item></Grid>
                    // return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
                }
            }) ?? <></>
            }

        </Grid>
    );
}

export default BlockContentLayoutContainer
