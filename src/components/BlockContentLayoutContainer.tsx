import React, {FunctionComponent, useContext} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Card, Grid, Link, useTheme} from '@mui/material'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {
    AnimatedAboutUsSectionType,
    AnimatedPortfolioSectionType,
    AnimatedServicesSectionType, DrinkeryAlbumSectionType, DrinkeryOtherSideSectionType, DrinkerySpecialsSectionType,
    FlashCardSectionType,
    HeadlineCTASectionType,
    HeroAnimatedContentSectionType, HolidayHeadlineSectionType,
    HowItWorksSectionType, ListSectionType,
    MapSectionType,
    PortfolioSectionType,
    PricingSectionType,
    ResumeBioSectionType,
    ResumeContactUsSectionType,
    ResumeEducationSectionType,
    ResumeExperienceSectionType,
    ResumeFeedbackSectionType,
    ResumePortfolioSectionType,
    ResumeSkillSectionType, TeamSectionType,
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
import WebDevPricingSection from "./templates/web-dev-site/WebDevPricingSection";
import FlashCardsContentSection from './templates/cocktail-flash-cards/FlashCardsContentSection'
import TheDrinkerySpecials from "./templates/the-drinkery/TheDrinkerySpecials";
import TheDrinkeryStaffSection from "./templates/the-drinkery/TheDrinkeryStaffSection";
import TheDrinkeryOtherSideSection from "./templates/the-drinkery/TheDrinkeryOtherSideSection";
import TheDrinkeryAlbumSection from "./templates/the-drinkery/TheDrinkeryAlbumSection";
import HolidayHeadlineSection from "./holiday-headline-section/HolidayHeadlineSection";
import SanityContext from "../common/sanityIo/sanity-context/SanityContext";
import {SanityHomePage} from "../common/sanityIo/Types";
import {
    AWBallSectionType,
    AWBallSummarySectionType,
    AWSingleBallSectionType, SanityContactUs
} from './templates/anybody-walking/ballroomTypes';
import AWBallSearchSection from './templates/anybody-walking/AWBallSearchSection';
import AWSingleBallPageSection from './templates/anybody-walking/AWSingleBallPageSection';
import AWBallSummarySection from "./templates/anybody-walking/AWBallSummarySection";
import BallToolsSection from "./templates/anybody-walking/BallToolsSection";
import AWNewHouseFormSection from "./templates/anybody-walking/AWNewHouseFormSection";
import AWContactUs from "./templates/anybody-walking/AWContactUs";
import DJSpadesRulesContentSection from "./dj-40-spades-rules/41AcresSpadesContentSection";

export type BlockContentLayoutContainerProps = {
    content?: any,
    homePage: SanityHomePage
}

const BlockContentLayoutContainer: FunctionComponent<BlockContentLayoutContainerProps> = (props) => {
    const classes = useThwCommonStyles()
    const theme = useTheme()
    const sanityContext = useContext(SanityContext)


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
                                                projectId={sanityContext.theSanityClient.config().projectId}
                                                dataset={sanityContext.theSanityClient.config().dataset}
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
                                                projectId={sanityContext.theSanityClient.config().projectId}
                                                dataset={sanityContext.theSanityClient.config().dataset}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <BlockContent
                                                blocks={columnLayoutContainer.column2.content}
                                                serializers={blockSerializers}
                                                projectId={sanityContext.theSanityClient.config().projectId}
                                                dataset={sanityContext.theSanityClient.config().dataset}
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
                            <Link id={"MAP_SECTION"} underline="hover"><></>
                            </Link>
                            <MapSection
                                sectionData={mapSection}
                            />
                        </Grid>
                    case 'WebDevPricingSection':
                        const pricingSection: PricingSectionType = columnLayoutContainer

                        return <Grid key={'map-section'} container item>
                            <Link id={"PRICING_SECTION"} underline="hover"><></>
                            </Link>
                            <WebDevPricingSection
                                sectionData={pricingSection}
                            />
                        </Grid>
                    case 'FlashCardSection':
                        const flashCardSection: FlashCardSectionType = columnLayoutContainer

                        return <Grid key={index} container item xs={12}>
                            <FlashCardsContentSection
                                sectionData={flashCardSection}
                            />
                        </Grid>
                    case 'DrinkerySpecialsSection':
                        const drinkerySpecialsSection: DrinkerySpecialsSectionType = columnLayoutContainer

                        return <Grid key={'specials-section'} container item xs={12}>
                            <Link id={"SPECIALS"}><></></Link>
                            <TheDrinkerySpecials
                                sectionData={drinkerySpecialsSection}
                            />
                        </Grid>
                    case 'DrinkeryTeamSection':
                        const drinkeryStaffSection: TeamSectionType = columnLayoutContainer

                        return <Grid key={'staff-section'} container item xs={12}>
                            <Link id={"STAFF_SECTION"}><></></Link>
                            <TheDrinkeryStaffSection
                                sectionData={drinkeryStaffSection}
                            />
                        </Grid>
                    case 'DrinkeryOtherSideSection':
                        const drinkeryOtherSideSection: DrinkeryOtherSideSectionType = columnLayoutContainer

                        return <Grid key={'other-side-section'} container item xs={12}>
                            <Link id={"OTHER_SIDE_SECTION"}><></></Link>
                            <TheDrinkeryOtherSideSection
                                sectionData={drinkeryOtherSideSection}
                            />
                        </Grid>
                    case 'DrinkeryAlbumSection':
                        const drinkeryAlbumSection: DrinkeryAlbumSectionType = columnLayoutContainer

                        return <Grid key={'album-section'} container item xs={12}>
                            <Link id={"ALBUM_SECTION"}><></></Link>
                            <TheDrinkeryAlbumSection
                                sectionData={drinkeryAlbumSection}
                            />
                        </Grid>
                    case 'HolidayHeadlineSection':
                        const holidayHeadlineSection: HolidayHeadlineSectionType = columnLayoutContainer

                        return <Grid key={holidayHeadlineSection.slug.current+'-holiday-headline-section'} container item xs={12} justifyContent='center'>
                            <HolidayHeadlineSection
                                sectionData={holidayHeadlineSection}
                            />
                        </Grid>
                    case 'AWBallSection':
                        const awBallSection: AWBallSectionType = columnLayoutContainer

                        return <Grid key={'aw-ball-section'} container item xs={12} justifyContent='center'>
                            <AWBallSearchSection sectionData={awBallSection}/>
                        </Grid>
                     case 'AWNewHouseFormSection':
                        const awNewHouseFormSection: AWBallSectionType = columnLayoutContainer

                        return <Grid key={'aw-new-house-form-section'} container item xs={12} justifyContent='center'>
                            <AWNewHouseFormSection sectionData={awNewHouseFormSection}/>
                        </Grid>
                    case 'AWBallToolsSection':
                        const awBallToolsSection: AWBallSectionType = columnLayoutContainer

                        return <Grid key={'aw-ball-section'} container item xs={12} justifyContent='center'>
                            <BallToolsSection sectionData={awBallToolsSection}/>
                        </Grid>
                    case 'AWBallSummarySection':
                        const awBallSummarySection: AWBallSummarySectionType = columnLayoutContainer

                        return <Grid key={'aw-ball-summary-section'} container item xs={12} justifyContent='center'>
                            <AWBallSummarySection sectionData={awBallSummarySection}/>
                        </Grid>
                    case 'AWSingleBallPageSection':
                        const awSingleBallPageSection: AWSingleBallSectionType = columnLayoutContainer

                        return <Grid key={'aw-ball-section'} container item xs={12} justifyContent='center'>
                            <AWSingleBallPageSection sectionData={awSingleBallPageSection}/>
                        </Grid>
                    case 'SimpleStringListSection':
                        const simpleStringListSection: ListSectionType = columnLayoutContainer

                        return <Grid key={'spades-rules-list'} container item xs={12} justifyContent='center'>
                            <DJSpadesRulesContentSection sectionData={simpleStringListSection}/>
                        </Grid>
                    case 'ContactUs':
                        const awContactUsSection: SanityContactUs = columnLayoutContainer

                        return <Grid key={'aw-contact-us-section'} container item xs={12} justifyContent='center'>
                            <AWContactUs sectionData={awContactUsSection}/>
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
