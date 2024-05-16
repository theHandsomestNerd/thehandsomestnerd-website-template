import {SanitySectionTitlesEnum} from "./sections/transform-hw/sectionTitles";

export default {
    name: 'contentContainer',
    title: 'Content Container',
    type: 'object',
    fields: [
        {
            title: 'Content',
            description: 'Content',
            name: 'content',
            type: 'array',
            of: [
                // {type:"heroContentSection"},
                // {type:"whySwitchSection"},
                // {type:"aboutAndaCardSection"},
                // {type:"cryptoInYourPocketSection"},
                {
                    name: 'column1BlockContent',
                    title: 'Custom 1 Column Section',
                    type: 'reference',
                    to: [{type: 'column1BlockContent'}]
                },
                {
                    name: 'column2BlockContent',
                    title: 'Custom 2 Column Section',
                    type: 'reference',
                    to: [{type: 'column2BlockContent'}]
                },
                {
                    name: 'FlashCardSection',
                    title: 'Flash Card Section',
                    type: 'reference',
                    to: [{type: 'FlashCardSection'}]
                },
                {
                    name: 'SimpleTextListSection',
                    title: 'Simple Text List Section',
                    type: 'reference',
                    to: [{type: 'SimpleStringListSection'}]
                },
                {
                    name: 'AWBallSection',
                    title: 'AW Ball Section',
                    type: 'reference',
                    to: [{type: 'AWBallSection'}]
                },
                {
                    name: 'AWBallToolsSection',
                    title: 'AW Ball Tools Section',
                    type: 'reference',
                    to: [{type: 'AWBallToolsSection'}]
                },
                {
                    name: 'AWBallSummarySection',
                    title: 'AW Ball Summary Section',
                    type: 'reference',
                    to: [{type: 'AWBallSummarySection'}]
                },
                {
                    name: 'AWSingleBallPageSection',
                    title: 'AW Single Ball Page Section',
                    type: 'reference',
                    to: [{type: 'AWSingleBallPageSection'}]
                },
                {
                    name: 'ContactUs Section',
                    title: 'ContactUs Section',
                    type: 'reference',
                    to: [{type: 'ContactUs'}]
                },
                {name: 'header', title: 'Header Menu', type: 'reference', to: [{type: 'menuContainer',}]},
                {name: 'footer', title: 'Footer Menu', type: 'reference', to: [{type: 'menuContainer',}]},
                {
                    name: 'Headline with CTA',
                    title: 'Headline with CTA',
                    type: 'reference',
                    to: [{type: 'HeadlineCTASection',}]
                },
                {name: 'Map Section', title: 'Map Section', type: 'reference', to: [{type: 'MapSection',}]},
                {
                    name: 'HeroAnimatedContentSection',
                    title: 'Animated Hero Content',
                    type: 'reference',
                    to: [{type: 'HeroAnimatedContentSection'}]
                },
                {
                    name: 'AnimatedAboutUsSection',
                    title: 'Animated About Us Section',
                    type: 'reference',
                    to: [{type: 'AnimatedAboutUsSection'}]
                },
                {
                    name: 'AnimatedServicesSection',
                    title: 'Animated Services Section',
                    type: 'reference',
                    to: [{type: 'AnimatedServicesSection'}]
                },
                {
                    name: 'Resume Bio Section',
                    title: 'Resume Bio Section',
                    type: 'reference',
                    to: [{type: 'ResumeBioSection'}]
                },
                {
                    name: 'Resume Skill Section',
                    title: 'Resume Skill Section',
                    type: 'reference',
                    to: [{type: 'ResumeSkillSection'}]
                },
                {
                    name: 'Resume Experience Section',
                    title: 'Resume Experience Section',
                    type: 'reference',
                    to: [{type: 'ResumeExperienceSection'}]
                },
                {
                    name: 'Resume Education Section',
                    title: 'Resume Education Section',
                    type: 'reference',
                    to: [{type: 'ResumeEducationSection'}]
                },
                {
                    name: 'Resume Feedback Section',
                    title: 'Resume Feedback Section',
                    type: 'reference',
                    to: [{type: 'ResumeFeedbackSection'}]
                },
                {
                    name: 'Resume ContactUs Section',
                    title: 'Resume ContactUs Section',
                    type: 'reference',
                    to: [{type: 'ResumeContactUsSection'}]
                },
                {
                    name: 'Resume Portfolio Section',
                    title: 'Resume Portfolio Section',
                    type: 'reference',
                    to: [{type: 'ResumePortfolioSection'}]
                },
                {
                    name: 'Animated Portfolio Section',
                    title: 'Animated Portfolio Section',
                    type: 'reference',
                    to: [{type: 'AnimatedPortfolioSection'}]
                },
                {
                    name: 'WebDevHeroContentSection',
                    title: "Web Dev Hero Image + Content section",
                    type: 'reference',
                    to: [{type: 'WebDevHeroContentSection'}]
                },
                {
                    name: 'WebDevStatsCounterSection',
                    title: "Web Dev Stats Counter section",
                    type: 'reference',
                    to: [{type: 'WebDevStatsCounterSection'}]
                },
                {
                    name: 'WebDevAboutUsSection',
                    title: "Web Dev About Us section",
                    type: 'reference',
                    to: [{type: 'WebDevAboutUsSection'}]
                },
                {
                    name: 'WebDevPricingSection',
                    title: "Web Dev pricing section",
                    type: 'reference',
                    to: [{type: 'WebDevPricingSection'}]
                },
                {
                    name: 'ServicesSection',
                    title: "Services section",
                    type: 'reference',
                    to: [{type: 'ServicesSection'}]
                },
                {
                    name: 'PortfolioSection',
                    title: "Portfolio section",
                    type: 'reference',
                    to: [{type: 'PortfolioSection'}]
                },
                {
                    name: 'Testimonials Section',
                    title: 'Testimonials Section',
                    type: 'reference',
                    to: [{type: 'TestimonialsSection'}]
                },
                {
                    name: 'How it works Section',
                    title: 'How it works Section',
                    type: 'reference',
                    to: [{type: 'WebDevHowItWorksSection'}]
                },
                {
                    name: 'transformServiceItem',
                    title: 'Business Service',
                    type: 'reference',
                    to: [{type: 'transformServiceItem'}]
                },
                {
                    name: 'heroContentSection',
                    title: 'Hero + Content Section',
                    type: 'reference',
                    to: [{type: 'heroContentSection'}]
                },
                {
                    name: 'transformHeroContentSection',
                    title: SanitySectionTitlesEnum.HERO_CONTENT,
                    type: 'reference',
                    to: [{type: 'transformHeroContentSection'}]
                },
                {
                    name: 'mfbtHeroContentSection',
                    title: "MFBT Hero Image + Content section",
                    type: 'reference',
                    to: [{type: 'mfbtHeroContentSection'}]
                },
                {
                    name: 'mfbtAboutProprietorSection',
                    title: "MFBT 1/3 Image + 2/3 Content",
                    type: 'reference',
                    to: [{type: 'mfbtAboutProprietorSection'}]
                },
                {
                    name: 'mfbtPaymentMethods',
                    title: "MFBT 4 icons",
                    type: 'reference',
                    to: [{type: 'mfbtPaymentMethods'}]
                },
                {
                    name: 'transformPositivePsychologySection',
                    title: SanitySectionTitlesEnum.POSITIVE_PSYCHOLOGY,
                    type: 'reference',
                    to: [{type: 'transformPositivePsychologySection'}]
                },
                {
                    name: 'transformMottoSection',
                    title: SanitySectionTitlesEnum.MOTTO,
                    type: 'reference',
                    to: [{type: 'transformMottoSection'}]
                },
                {
                    name: 'transformAboutProprietorSection',
                    title: SanitySectionTitlesEnum.ABOUT_PROPRIETOR,
                    type: 'reference',
                    to: [{type: 'transformAboutProprietorSection'}]
                },
                {
                    name: 'transformServicesSection',
                    title: SanitySectionTitlesEnum.SERVICES,
                    type: 'reference',
                    to: [{type: 'transformServicesSection'}]
                },
                {
                    name: 'transformWhyChooseUsSection',
                    title: SanitySectionTitlesEnum.WHY_CHOOSE_US,
                    type: 'reference',
                    to: [{type: 'transformWhyChooseUsSection'}]
                },
                {
                    name: 'transformContactUsSection',
                    title: SanitySectionTitlesEnum.CONTACT_US,
                    type: 'reference',
                    to: [{type: 'transformContactUsSection'}]
                },
                {
                    name: 'whySwitchSection',
                    title: 'Image + 6 Bullets Section',
                    type: 'reference',
                    to: [{type: 'whySwitchSection'}]
                },
                {
                    name: 'aboutAndaCardSection',
                    title: 'Pink Image + Content',
                    type: 'reference',
                    to: [{type: 'aboutAndaCardSection'}]
                },
                {
                    name: 'cryptoInYourPocketSection',
                    title: 'Image + 3 Bullets + Banner w/CTA',
                    type: 'reference',
                    to: [{type: 'cryptoInYourPocketSection'}]
                },
                {
                    name: 'BartenderHeroSection',
                    title: 'Bartender Hero Image + Content Overlay',
                    type: 'reference',
                    to: [{type: 'BartenderHeroSection'}]
                },
                {name: 'drinkerySpecialsSection', title: 'Drinkery Specials Section', type: 'reference', to: [{type: 'DrinkerySpecialsSection'}]},
                {name: 'drinkeryTeamSection', title: 'Drinkery Staff Section', type: 'reference', to: [{type: 'DrinkeryTeamSection'}]},
                {name: 'drinkeryOtherSideSection', title: 'Drinkery Other Side Section', type: 'reference', to: [{type: 'DrinkeryOtherSideSection'}]},
                {name: 'drinkeryAlbumSection', title: 'Drinkery Album Section', type: 'reference', to: [{type: 'DrinkeryAlbumSection'}]},
                {name: 'HolidayHeadlineSection', title: 'Holiday Headline Section', type: 'reference', to: [{type: 'HolidayHeadlineSection'}]}
            ]
        }
    ]
}