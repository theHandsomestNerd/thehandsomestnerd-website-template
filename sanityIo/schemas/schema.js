// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import menuContainer from './menuContainer'
import menuGroup from './menuGroup'
import menuItem from './menuItem'
import homePage from './homePage'
import column1BlockContent from './column1BlockContent'
import column2BlockContent from './column2BlockContent'
import contentContainer from './contentContainer'
import lineBreak from './lineBreak'
import heroContentSection from './sections/aft/HeroContentSection'
import whySwitchSection from './sections/aft/why-switch/WhySwitchSection'
import whySwitchReason from './sections/aft/why-switch/WhySwitchReason'
import aboutAndaCardSection from './sections/aft/AboutAndaCardSection'
import cryptoInYourPocketSection from './sections/aft/CryptoInYourPocketSection'
import structuredDataProduct from './sections/aft/structured-data/StructuredDataProduct'
import structuredDataOffer from './sections/aft/structured-data/StructuredDataOffer'
import structuredDataSeller from './sections/aft/structured-data/StructuredDataSeller'
import structuredDataEvent from './sections/aft/structured-data/StructuredDataEvent'
import coldLead from "./coldLead";
import ThwHeroContentSection from "./sections/transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "./sections/transform-hw/ThwPositivePsychology";
import ThwMottoSection from "./sections/transform-hw/ThwMottoSection";
import ThwAboutProprietor from "./sections/transform-hw/ThwAboutProprietor";
import ThwServicesSection from "./sections/transform-hw/services/ThwServicesSection";
import transformServiceItem from "./sections/transform-hw/services/transformServiceItem";
import ThwWhyChooseUsSection from "./sections/transform-hw/why-choose-us/ThwWhyChooseUsSection";
import transformWhyChooseUsItem from "./sections/transform-hw/why-choose-us/transformWhyChooseUsItem";
import ThwContactUs from "./sections/transform-hw/ThwContactUsSection";
import ThwUnderConstructionPage from "./sections/transform-hw/ThwUnderConstructionPage";
import serviceAmenity from "./sections/transform-hw/services/serviceAmenity";
import proprietorService from "./sections/transform-hw/proprietorService";
import modal from "./modal/Modal";
import faq from "./modal/faq";
import ResumeFile from "./resume/resume-bio/ResumeFile";
import ResumeBioSection from "./resume/resume-bio/ResumeBioSection";
import ResumeSkillSet from "./resume/resume-skills/ResumeSkillSet";
import ResumeSkill from "./resume/resume-skills/ResumeSkill";
import ResumeSkillsSection from "./resume/resume-skills/ResumeSkillsSection";
import ResumeExperience from "./resume/resume-experience/ResumeExperience";
import ResumeExperienceSection from "./resume/resume-experience/ResumeExperienceSection";
import ResumeEducationSection from "./resume/resume-education/ResumeEducationSection";
import ResumeEducation from "./resume/resume-education/ResumeEducation";
import ResumeFeedback from "./resume/resume-feedback/ResumeFeedback";
import ResumeFeedbackSection from "./resume/resume-feedback/ResumeFeedbackSection";
import ResumeContactUsSection from "./resume/resume-contact-us/ResumeContactUsSection";
import ResumePortfolioItem from "./resume/resume-portfolio/ResumePortfolioItem";
import ResumePortfolioSection from "./resume/resume-portfolio/ResumePortfolioSection";
import WebDevHeroContentSection from "./web-dev/WebDevHeroContentSection";
import WebDevStatistic from "./web-dev/WebDevStatistic";
import WebDevStatsCounterSection from "./web-dev/WebDevStatsCounterSection";
import WebDevAboutUs from "./web-dev/WebDevAboutUs";
import ServiceItem from "./services/ServiceItem";
import ServiceAmenity from "./services/serviceAmenity";
import ServicesSection from "./services/ServicesSection";
import PortfolioSection from "./portfolio/PortfolioSection";
import PortfolioItem from "./portfolio/PortfolioItem";
import Testimonials from "./testimonials/Testimonials";
import TestimonialsSection from "./testimonials/TestimonialsSection";
import WebDevHowItWorksStep from "./web-dev/WebDevHowItWorksStep";
import WebDevHowItWorksSection from "./web-dev/WebDevHowItWorksSection";
import headerContentContainer from "./headerContentContainer";
import HeaderSection from "./sections/HeaderSection";
import DevelopmentHeaderSection from "./sections/DevelopmentHeaderSection";
import FooterSection from "./web-dev/FooterSection";
import DevelopmentFooterSection from "./web-dev/DevelopmentFooterSection";
import footerContentContainer from "./footerContentContainer";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        menuContainer,
        menuGroup,
        menuItem,
        homePage,
        blockContent,
        contentContainer,
        lineBreak,
        column1BlockContent,
        column2BlockContent,
        // HomePageSections
        heroContentSection,
        whySwitchSection,
        whySwitchReason,
        aboutAndaCardSection,
        cryptoInYourPocketSection,
        // structured Data
        structuredDataProduct,
        structuredDataOffer,
        structuredDataSeller,
        structuredDataEvent,
        coldLead,
        // transform hw sections
        ThwHeroContentSection,
        ThwPositivePsychology,
        ThwMottoSection,
        ThwAboutProprietor,
        ThwServicesSection,
        transformServiceItem,
        ThwWhyChooseUsSection,
        transformWhyChooseUsItem,
        ThwContactUs,
        ThwUnderConstructionPage,
        serviceAmenity,
        proprietorService,
        modal,
        faq,

        ResumeBioSection,
        ResumeFile,
        ResumeSkillSet,
        ResumeSkill,
        ResumeSkillsSection,
        ResumeExperience,
        ResumeExperienceSection,
        ResumeEducationSection,
        ResumeEducation,
        ResumeFeedback,
        ResumeFeedbackSection,
        ResumeContactUsSection,
        ResumePortfolioItem,
        ResumePortfolioSection,
        WebDevHeroContentSection,
        WebDevStatistic,
        WebDevStatsCounterSection,
        WebDevAboutUs,
        ServicesSection,
        ServiceItem,
        ServiceAmenity,
        PortfolioSection,
        PortfolioItem,
        Testimonials,
        TestimonialsSection,
        WebDevHowItWorksStep,
        WebDevHowItWorksSection,
        HeaderSection,
        DevelopmentHeaderSection,
        headerContentContainer,
        FooterSection,
        DevelopmentFooterSection,
        footerContentContainer
    ]),
})
