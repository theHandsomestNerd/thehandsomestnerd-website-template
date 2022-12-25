// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import {createSuperPane} from 'sanity-super-pane'
// eslint-disable-next-line import/no-unresolved
import S from '@sanity/desk-tool/structure-builder'
import {SanitySectionTitlesEnum} from "../schemas/sections/transform-hw/sectionTitles";

export default () =>
    S.list()
        .title('Base')
        .items([
            S.listItem()
                .title('Page')
                .child(createSuperPane('homePage', S)),
            S.listItem()
                .title('Header')
                .child(createSuperPane('HeaderSection', S)),
            S.listItem()
                .title('Development Header')
                .child(createSuperPane('DevelopmentHeaderSection', S)),
            S.listItem()
                .title('Footer')
                .child(createSuperPane('FooterSection', S)),
            S.listItem()
                .title('Development Footer')
                .child(createSuperPane('DevelopmentFooterSection', S)),
            S.listItem()
                .title('Web Dev Hero Section')
                .child(createSuperPane('WebDevHeroContentSection', S)),
            S.listItem()
                .title('Web Dev Stats Counter Section')
                .child(createSuperPane('WebDevStatsCounterSection', S)),
            S.listItem()
                .title('Web Dev About Us Section')
                .child(createSuperPane('WebDevAboutUsSection', S)),
            S.listItem()
                .title('Portfolio')
                .child(createSuperPane('PortfolioItem', S)),
            S.listItem()
                .title('Portfolio Section')
                .child(createSuperPane('PortfolioSection', S)),
            S.listItem()
                .title("Services Section")
                .child(createSuperPane('ServicesSection', S)),
            S.listItem()
                .title("Service Item")
                .child(createSuperPane('ServiceItem', S)),
            S.listItem()
                .title("How it works Section")
                .child(createSuperPane('WebDevHowItWorksSection', S)),
            S.listItem()
                .title("How it works Item")
                .child(createSuperPane('WebDevHowItWorksStep', S)),
            S.listItem()
                .title("Service Amenity")
                .child(createSuperPane('ServiceAmenityItem', S)),
            S.listItem()
                .title('Testimonials')
                .child(createSuperPane('Testimonials', S)),
            S.listItem()
                .title('Testimonials Section')
                .child(createSuperPane('TestimonialsSection', S)),
            S.listItem()
                .title('Resume Bio Section')
                .child(createSuperPane('ResumeBioSection', S)),
            S.listItem()
                .title('Resume Skill Section')
                .child(createSuperPane('ResumeSkillSection', S)),
            S.listItem()
                .title('Resume Skill')
                .child(createSuperPane('ResumeSkill', S)),
             S.listItem()
                .title('Resume Experience Section')
                .child(createSuperPane('ResumeExperienceSection', S)),
            S.listItem()
                .title('Resume Experience')
                .child(createSuperPane('ResumeExperience', S)),
            S.listItem()
                .title('Resume Education')
                .child(createSuperPane('ResumeEducation', S)),
             S.listItem()
                .title('Resume Education Section')
                .child(createSuperPane('ResumeEducationSection', S)),
            S.listItem()
                .title('Resume Portfolio')
                .child(createSuperPane('ResumePortfolioItem', S)),
             S.listItem()
                .title('Resume Portfolio Section')
                .child(createSuperPane('ResumePortfolioSection', S)),
            S.listItem()
                .title('Resume Feedback')
                .child(createSuperPane('ResumeFeedback', S)),
             S.listItem()
                .title('Resume Feedback Section')
                .child(createSuperPane('ResumeFeedbackSection', S)),
            S.listItem()
                .title('Resume Contact Us Section')
                .child(createSuperPane('ResumeContactUsSection', S)),
            S.listItem()
                .title('Modal')
                .child(createSuperPane('modal', S)),
             S.listItem()
                .title('Menu Container')
                .child(createSuperPane('menuContainer', S)),
            S.listItem()
                .title('Menu Group')
                .child(createSuperPane('menuGroup', S)),
            S.listItem()
                .title('Menu Item')
                .child(createSuperPane('menuItem', S)),
            S.listItem()
                .title('Page Section: Custom 1 column')
                .child(createSuperPane('column1BlockContent', S)),
            S.listItem()
                .title('Page Section: Custom 2 column')
                .child(createSuperPane('column2BlockContent', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.HERO_CONTENT)
                .child(createSuperPane('transformHeroContentSection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.POSITIVE_PSYCHOLOGY)
                .child(createSuperPane('transformPositivePsychologySection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.MOTTO)
                .child(createSuperPane('transformMottoSection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.ABOUT_PROPRIETOR)
                .child(createSuperPane('transformAboutProprietorSection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.SERVICES)
                .child(createSuperPane('transformServicesSection', S)),
            S.listItem()
                .title("THW Service Item")
                .child(createSuperPane('transformServiceItem', S)),
            S.listItem()
                .title("THW Service Amenity")
                .child(createSuperPane('transformServiceAmenityItem', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.WHY_CHOOSE_US)
                .child(createSuperPane('transformWhyChooseUsSection', S)),
            S.listItem()
                .title("THW Why Choose Us Item")
                .child(createSuperPane('transformWhyChooseUsItem', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.CONTACT_US)
                .child(createSuperPane('transformContactUsSection', S)),
            S.listItem()
                .title(SanitySectionTitlesEnum.UNDER_CONSTRUCTION)
                .child(createSuperPane('transformUnderConstructionPage', S)),
            S.listItem()
                .title('Page Section: Hero + Content')
                .child(createSuperPane('heroContentSection', S)),
            S.listItem()
                .title('Page Section: Image + 6 Bullets')
                .child(createSuperPane('whySwitchSection', S)),
            S.listItem()
                .title('Page Section: Pink Image + Content')
                .child(createSuperPane('aboutAndaCardSection', S)),
            S.listItem()
                .title('Page Section: Image + 3 Bullets + Banner w/CTA')
                .child(createSuperPane('cryptoInYourPocketSection', S)),
            S.listItem()
                .title('Structured Data Product')
                .child(createSuperPane('structuredDataProduct', S)),
            S.listItem()
                .title('Structured Data Event')
                .child(createSuperPane('structuredDataEvent', S)),
            S.listItem()
                .title('Cold Lead')
                .child(createSuperPane('coldLead', S)),
            S.listItem()
                .title('Media Tags')
                .child(createSuperPane('media.tag', S))
        ]);
