// @ts-ignore
import React, {FunctionComponent, useContext} from "react";
import {Document, Font, Link, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {
    ResumeBioSectionType,
    ResumeEducationSectionType,
    ResumeExperienceSectionType,
    ResumePortfolioSectionType,
    ResumeSkillSectionType
} from "../BlockContentTypes";
import RalewayFont from "../../fonts/raleway/static/Raleway-Regular.ttf"
import CustomizedThemeContext from "../customized-theme-provider/CustomizedThemeContext";
import dateUtils from "../../utils/dateUtils";
import {COLORS} from "../../theme/common/ColorPalette";
import {SanityTransformHwHomePage} from "../../common/sanityIo/Types";


Font.register({family: 'Raleway', src: RalewayFont, fontStyle: 'normal', fontWeight: 'normal'});


// Create Document Component


interface IProps {
    homePage?: SanityTransformHwHomePage
}

// const PDF_COLORS = {
//     primary: "#d20027"
// }

const ResumeDocumentPDF: FunctionComponent<IProps> = (props: IProps) => {

    const theme = useContext(CustomizedThemeContext)
    // Create styles
    const styles = StyleSheet.create({
        page: {
            // flexDirection: 'row',
            // backgroundColor: '#E4E4E4'
            fontFamily: "Raleway",
            padding: "16px"
        },
        section: {
            // margin: 10,
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            // flexGrow: 1
        },
        subtitle: {
            fontSize: "10px"
        },
        body: {
            fontSize: "12px"
            // color:"red",
        },
        body2: {
            fontSize: "14px"
            // color:"red",
        },
        h5: {
            fontSize: "32px",
            fontWeight: "bold"
        },
        container: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "flex-start"
        },
        resumeSkillset: {
            // marginBottom: "8px",
            flexBasis: "50%",
            paddingTop: "8px",
            paddingBottom: "4px",
            paddingLeft: "8px",
            paddingRight: "8px",
            // flex: "1 "
        },
        resumeExperience: {
            // marginBottom: "8px",
            // flexBasis:"50%",
            paddingLeft: "8px",
            paddingTop: "8px"
            // flex: "1 "
        },
        chip: {
            backgroundColor: COLORS.ALMOST_BLACK,
            borderRadius: "32px",
            color: "white",
            marginRight: "4px",
            marginBottom: "2px",
            paddingHorizontal: "12px",
            paddingVertical: "2px",
            fontWeight: 500
        }
    });


    return (<Document>
        <Page size="A4" style={styles.page} key={'page'}>
            {props?.homePage?.pageContent.content?.map((columnLayoutContainer: any, pageIdx: number) => {
                switch (columnLayoutContainer._type) {
                    case 'ResumeBioSection':
                        const resumeBioSection: ResumeBioSectionType = columnLayoutContainer

                        return (
                            <View key={'resume-bio-section-' + pageIdx}>
                                <View style={{textAlign: 'center', marginBottom: "8px"}}>
                                    <View style={styles.body2}>
                                        <Text>{resumeBioSection.title}</Text>
                                    </View>
                                    <View style={styles.body}>
                                        <Text>{props.homePage?.businessContact?.email}</Text>
                                    </View>
                                    <View style={styles.body}>
                                        <Text>{props.homePage?.businessContact?.phone}</Text>
                                    </View>
                                    <View style={styles.body}>
                                        <Text>LinkedIn:{props.homePage?.businessContact?.linkedIn}</Text>
                                    </View>
                                    <View style={styles.body}>
                                        <Text>Github: {props.homePage?.businessContact?.github}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.body}>{resumeBioSection.introduction}</Text>
                                </View>
                            </View>
                        );
                    case 'ResumeSkillSection':
                        const resumeSkillSection: ResumeSkillSectionType = columnLayoutContainer
                        // console.log(resumeSkillSection)
                        return (
                            <View style={styles.section}>
                                <View><Text>{resumeSkillSection.title}</Text></View>
                                <View><Text style={styles.body}>{resumeSkillSection.introduction}</Text></View>
                                <View style={styles.container}>{
                                    resumeSkillSection.skillsets?.map((skillset, skillsetIndx) => {
                                        return <View key={skillsetIndx} style={styles.resumeSkillset}>
                                            <Text style={styles.body2}>{skillset.title}</Text>
                                            <View style={styles.container}>
                                                {
                                                    skillset.skills?.map((theSkill, index) => {
                                                        return <View key={index}><Text
                                                            style={styles.body}>{theSkill.title}{index !== (skillset.skills?.length ?? 0) - 1 ? "," : ""} </Text></View>
                                                    })
                                                }
                                            </View>
                                        </View>
                                    })
                                }</View>
                            </View>
                        );
                    case 'ResumeExperienceSection':
                        const resumeExperienceSection: ResumeExperienceSectionType = columnLayoutContainer

                        return (
                            <View style={styles.section}>
                                <View><Text>{resumeExperienceSection.title}</Text></View>
                                <View><Text style={styles.body}>{resumeExperienceSection.introduction}</Text></View>
                                <View style={styles.container}>{
                                    resumeExperienceSection.experiences?.map((experience, expIdx) => {
                                        return <View key={expIdx} style={styles.resumeExperience}>
                                            <Text style={styles.body2}>{experience.companyName}</Text>
                                            <Text style={styles.subtitle}>{experience.companySubtitle}</Text>
                                            <Text style={styles.body}>{experience.title}</Text>
                                            <Text
                                                style={styles.body}>{dateUtils.YearMonth(new Date(experience.dateStart as string))}-{dateUtils.YearMonth(new Date(experience.dateEnd as string))} </Text>
                                            <Text
                                                style={styles.body}>{dateUtils.getLengthOfTime(new Date(experience.dateStart as string), new Date(experience.dateEnd as string)).result}</Text>
                                            <View style={{
                                                borderLeft: "1px solid black",
                                                paddingLeft: "8px",
                                                marginLeft: "4px",
                                                marginTop: "2px",
                                                marginBottom: "2px"
                                            }}><Text style={styles.body}>{experience.description}</Text></View>
                                            <View style={styles.container}>
                                                {
                                                    experience.skillsUsed?.map((theSkill, index) => {
                                                        return <View key={index}
                                                                     style={styles.chip}>{theme.customizedTheme?.palette.primary.main}<Text
                                                            style={styles.subtitle}>{theSkill.title}</Text></View>
                                                    })
                                                }
                                            </View>
                                        </View>
                                    })
                                }</View>
                            </View>
                        );
                    case 'ResumeEducationSection':
                        const resumeEducationSection: ResumeEducationSectionType = columnLayoutContainer

                        return (
                            <View style={styles.section}>
                                <View><Text>{resumeEducationSection.title}</Text></View>
                                <View><Text style={styles.body}>{resumeEducationSection.introduction}</Text></View>
                                {
                                    resumeEducationSection.educationExperiences?.map((theEducation, educationIdx) => {
                                        return <View style={{padding: "8px"}} key={educationIdx}>
                                            <View>
                                                <Text style={styles.body2}>{theEducation.institutionName}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.body}>{theEducation.qualification}</Text>
                                            </View>
                                        </View>
                                    })
                                }
                            </View>
                        );
                    // case 'ResumeFeedbackSection':
                    //     const resumeFeedbackSection: ResumeFeedbackSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'ResumeFeedbackSection'} container item xs={12} justifyContent='center'>
                    //             <Link
                    //                 id={"FEEDBACK"}
                    //                 style={{position: "relative", top: -80}}
                    //                 underline="hover"><></>
                    //             </Link>
                    //
                    //             <ResumeFeedbackSection
                    //                 sectionData={resumeFeedbackSection}
                    //             />
                    //         </Grid>
                    //     );
                    case 'ResumePortfolioSection':
                        const resumePortfolioSection: ResumePortfolioSectionType = columnLayoutContainer

                        return (
                            <View style={styles.section}>
                                <View>
                                    <View><Text>{resumePortfolioSection.title}</Text></View>
                                    <View><Text style={styles.body}>{resumePortfolioSection.introduction}</Text></View>
                                    {
                                        resumePortfolioSection.portfolioEntries?.map((entry, entryIdx) => {
                                            return <View style={{padding: "8px"}} key={entryIdx}>
                                                <View>
                                                    <Text style={styles.body2}>{entry.title}</Text>
                                                </View>
                                                <View>
                                                    <Link src={entry.linkToProd ?? ""}
                                                          style={styles.body}><Text>{entry.linkToProd}</Text></Link>
                                                </View>
                                            </View>
                                        })
                                    }
                                </View>
                            </View>
                        );
                    // case 'ResumeContactUsSection':
                    //     const resumeContactUsSection: ResumeContactUsSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'ResumeContactUsSection'} container item xs={12} justifyContent='center'>
                    //             <Link id={"CONTACT"} style={{position: "relative", top: -80}} underline="hover"><></>
                    //             </Link>
                    //
                    //             <ResumeContactUsSection
                    //                 sectionData={resumeContactUsSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'column1BlockContent':
                    //     return <Grid key={'column1BlockContent'} container justifyContent='center' alignItems='stretch'>
                    //         <Grid item>
                    //             <Card className={classes.root} style={{paddingTop: '80px'}}>
                    //                 <Grid container item xs={12} className={classes.layoutContainer}>
                    //                     <Grid item xs={12}>
                    //                         <BlockContent
                    //                             blocks={columnLayoutContainer.content}
                    //                             serializers={blockSerializers}
                    //                             projectId={sanityClient.config().projectId}
                    //                             dataset={sanityClient.config().dataset}
                    //                         />
                    //                     </Grid>
                    //                 </Grid>
                    //             </Card>
                    //         </Grid>
                    //     </Grid>
                    // case 'column2BlockContent':
                    //     return <Grid key={'column2BlockContent'} container justifyContent='center' alignItems='stretch'>
                    //         <Grid item>
                    //             <Card className={classes.root} style={{paddingTop: '80px'}}>
                    //                 <Grid container item xs={12} className={classes.layoutContainer}>
                    //                     <Grid item xs={6}>
                    //                         <BlockContent
                    //                             blocks={columnLayoutContainer.column1.content}
                    //                             serializers={blockSerializers}
                    //                             projectId={sanityClient.config().projectId}
                    //                             dataset={sanityClient.config().dataset}
                    //                         />
                    //                     </Grid>
                    //                     <Grid item xs={6}>
                    //                         <BlockContent
                    //                             blocks={columnLayoutContainer.column2.content}
                    //                             serializers={blockSerializers}
                    //                             projectId={sanityClient.config().projectId}
                    //                             dataset={sanityClient.config().dataset}
                    //                         />
                    //                     </Grid>
                    //                 </Grid>
                    //             </Card></Grid>
                    //     </Grid>
                    // case 'transformHeroContentSection':
                    //     const thwHeroSection: ThwHeroContentSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'transformHeroContentSection'} container item xs={12}>
                    //             <Link id={"TOP_OF_PAGE"} underline="hover"><></>
                    //             </Link>
                    //             <MMHeroContentSection
                    //                 sectionData={thwHeroSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'transformServiceItem':
                    //     const thwServiceEducationPage: ThwServiceItemType = columnLayoutContainer
                    //
                    //     // const fetchedServiceItem =
                    //
                    //     return (
                    //         <Grid key={'transformServiceItem'} container item xs={12}>
                    //             <Link id={"TOP_OF_PAGE"} underline="hover"><></>
                    //             </Link>
                    //             <ThwServicesEducationPage
                    //                 serviceData={thwServiceEducationPage}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'transformPositivePsychologySection':
                    //     const thwPositivePsychologySection: ThwPositivePsychologySectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'transformPositivePsychologySection'} container item xs={12}
                    //               justifyContent='center'
                    //               style={{backgroundColor: theme.palette.background.paper}}>
                    //             <Link
                    //                 id={"ABOUT_US"}
                    //                 style={{position: "relative", top: -80}}
                    //                 underline="hover"><></>
                    //             </Link>
                    //             <ThwPositivePsychology
                    //                 sectionData={thwPositivePsychologySection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'transformMottoSection':
                    //     const thwMottoSection: ThwMottoSectionType = columnLayoutContainer
                    //
                    //     return <Grid key={'transformMottoSection'} container item xs={12} justifyContent='center'
                    //                  style={{backgroundColor: theme.palette.background.paper}}>
                    //         <ThwMottoSection
                    //             sectionData={thwMottoSection}
                    //         />
                    //     </Grid>
                    // case 'transformAboutProprietorSection':
                    //     const thwProprietorSection: ThwAboutProprietorSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'transformAboutProprietorSection'} container item xs={12} justifyContent='center'
                    //               style={{backgroundColor: theme.palette.background.paper}}>
                    //             <Link
                    //                 id={"ABOUT_PROPRIETOR"}
                    //                 style={{position: "relative", top: -80}}
                    //                 underline="hover"><></>
                    //             </Link>
                    //             <AboutTheProprietorSection
                    //                 sectionData={thwProprietorSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'transformServicesSection':
                    //     const thwServicesSection: ThwServicesSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'transformServicesSection'} container item xs={12} justifyContent='center'
                    //               style={{backgroundColor: theme.palette.background.paper}}>
                    //             <Link
                    //                 id={"SERVICES"}
                    //                 style={{position: "relative", top: -80}}
                    //                 underline="hover"><></>
                    //             </Link>
                    //             <ThwServicesSection
                    //                 sectionData={thwServicesSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'transformWhyChooseUsSection':
                    //     const thwWCUSection: ThwWhyChooseUsSectionType = columnLayoutContainer
                    //
                    //     return <Grid key={'transformWhyChooseUsSection'} container item xs={12} justifyContent='center'
                    //                  style={{backgroundColor: theme.palette.background.paper}}>
                    //         <ThwWhyChooseUsSection
                    //             sectionData={thwWCUSection}
                    //         />
                    //     </Grid>
                    // case 'transformContactUsSection':
                    //     const thwCUSection: ThwContactUsSectionType = columnLayoutContainer
                    //
                    //     return <Grid key={'transformContactUsSection'} container item xs={12} justifyContent='center'
                    //                  style={{backgroundColor: theme.palette.background.paper}}>
                    //         <ThwContactUsSection
                    //             sectionData={thwCUSection}
                    //         />
                    //     </Grid>
                    // case 'WebDevHeroContentSection':
                    //     const webDevHeroSection: WebDevHeroContentSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'webDevHeroContentSection'} container item xs={12}>
                    //             <Link id={"TOP_OF_PAGE"} underline="hover"><></>
                    //             </Link>
                    //             <WebDevHeroContentSection
                    //                 sectionData={webDevHeroSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'WebDevStatsCounterSection':
                    //     const webDevStatsCounterSection: WebDevStatsCounterSectionType = columnLayoutContainer
                    //
                    //     return <Grid key={'webDevStatsCounterSection'} container item xs={12}>
                    //         <WebDevStatsCounterSection
                    //             sectionData={webDevStatsCounterSection}
                    //         />
                    //     </Grid>
                    // case 'WebDevAboutUsSection':
                    //     const webDevAboutUsSection: WebDevAboutUsSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'webDevAboutUsSection'} container item xs={12}>
                    //             <Link id={"ABOUT_US"} underline="hover"><></>
                    //             </Link>
                    //             <WebDevAboutUsSection
                    //                 sectionData={webDevAboutUsSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'ServicesSection':
                    //     const webDevServicesSection: PortfolioSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'webDevServicesSection'} container item xs={12}>
                    //             <Link id={"SERVICES"} underline="hover"><></>
                    //             </Link>
                    //
                    //             <WebDevServicesSection
                    //                 sectionData={webDevServicesSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'PortfolioSection':
                    //     const webDevPortfolioSection: PortfolioSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'webDevPortfolioSection'} container item xs={12}>
                    //             <Link id={"PORTFOLIO"} underline="hover"><></>
                    //             </Link>
                    //
                    //             <WebDevPortfolioSection
                    //                 sectionData={webDevPortfolioSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'TestimonialsSection':
                    //     const webDevTestimonialsSection: WebDevTestimonialsSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'webDevTestimonialsSection'} container item xs={12}>
                    //             <Link id={"TESTIMONIALS"} underline="hover"><></>
                    //             </Link>
                    //
                    //             <WebDevTestimonialsSection
                    //                 sectionData={webDevTestimonialsSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'WebDevHowItWorksSection':
                    //     const webDevHowItWorksSection: HowItWorksSectionType = columnLayoutContainer
                    //
                    //     return (
                    //         <Grid key={'webDevHowItWorksSection'} container item xs={12}>
                    //             <Link id={"HOW_IT_WORKS"} underline="hover"><></>
                    //             </Link>
                    //             <WebDevHowItWorksSection
                    //                 sectionData={webDevHowItWorksSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'HeroAnimatedContentSection':
                    //     const heroAnimatedContentSection: HeroAnimatedContentSectionType = columnLayoutContainer
                    //     return (
                    //         <Grid key={'animated-hero'} container item xs={12}>
                    //             <Link id={"ANIMATED_HERO"} underline="hover"><></>
                    //             </Link>
                    //             <HeroAnimatedContentSection
                    //                 sectionData={heroAnimatedContentSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'AnimatedAboutUsSection':
                    //     const animatedAboutusSection: AnimatedAboutUsSectionType = columnLayoutContainer
                    //     return (
                    //         <Grid key={'animated-about-us'} container item xs={12}>
                    //             <Link id={"ANIMATED_ABOUT_US"} underline="hover"><></>
                    //             </Link>
                    //             <AnimatedAboutUsSection
                    //                 sectionData={animatedAboutusSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'AnimatedServicesSection':
                    //     const animatedServicesSection: AnimatedServicesSectionType = columnLayoutContainer
                    //     return (
                    //         <Grid key={'animated-services'} container item xs={12}>
                    //             <Link id={"ANIMATED_SERVICES"} underline="hover"><></>
                    //             </Link>
                    //             <AnimatedServicesSection
                    //                 sectionData={animatedServicesSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'AnimatedPortfolioSection':
                    //     const animatedPortfolioSection: AnimatedPortfolioSectionType = columnLayoutContainer
                    //     return (
                    //         <Grid key={'animated-portfolio'} container item xs={12}>
                    //             <Link id={"ANIMATED_PORTFOLIO"} underline="hover"><></>
                    //             </Link>
                    //             <AnimatedPortfolioSection
                    //                 sectionData={animatedPortfolioSection}
                    //             />
                    //         </Grid>
                    //     );
                    // case 'HeadlineCTASection':
                    //     const headlineSection: HeadlineCTASectionType = columnLayoutContainer
                    //
                    //     return <Grid key={'headline-section'} container item style={{zIndex: 1000}}>
                    //         <HeadlineCTASection
                    //             sectionData={headlineSection}
                    //         />
                    //     </Grid>
                    // case 'MapSection':
                    //     const mapSection: MapSectionType = columnLayoutContainer
                    //
                    //     return <Grid key={'map-section'} container item>
                    //         <Link id={"MAP_SECTION"} underline="hover"><></>
                    //         </Link>
                    //         <MapSection
                    //             sectionData={mapSection}
                    //         />
                    //     </Grid>
                    // case 'WebDevPricingSection':
                    //     const pricingSection: PricingSectionType = columnLayoutContainer
                    //
                    //     return <Grid key={'map-section'} container item>
                    //         <Link id={"PRICING_SECTION"} underline="hover"><></>
                    //         </Link>
                    //         <WebDevPricingSection
                    //             sectionData={pricingSection}
                    //         />
                    //     </Grid>
                    default:
                        return <View><Text></Text></View>
                    // return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
                }
            })}
            {/*// <View style={styles.section}>*/}
            {/*//     <Text>Section #1</Text>*/}
            {/*// </View>*/}
            {/*// <View style={styles.section}>*/}
            {/*//     <Text>Section #2</Text>*/}
            {/*// </View>*/}
        </Page>
    </Document>)
}

export default ResumeDocumentPDF