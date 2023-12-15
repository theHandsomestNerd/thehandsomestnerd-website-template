import {
    AnimatedAboutUsSectionType,
    HeroAnimatedContentSectionType, HowItWorksSectionType, PortfolioSectionType, PricingSectionType,
    ResumeBioSectionType, ResumePortfolioSectionType, WebDevAboutUsSectionType, WebDevTestimonialsSectionType
} from "../../components/BlockContentTypes";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";

const WebDevPricingSectionData:PricingSectionType = {
    "plans": [
        {
            "cost": "$80/month",
            "learnMoreText": "Inquire",
            "title": "Basic",
            // "content": "6 hours of Development time for fixing minor bugs. ",
            "contentTexts": [
                "4 hours of development time\n",
                "minor bug fixes",
                "48 hr response time"
            ],
            "slug": {
                "current": "basic-pricing-plan",
                "_type": "slug"
            },
            "isEnabled": true,
            // "_type": "WebDevPricingPlan",
            // "_key": "1a15c4a89d2a",
            "name": "Basic"
        },
        {
            "title": "Silver",
            "contentTexts": [
                "6 hrs of development time",
                "minor bug fixes",
                "48 hr response time",
                ""
            ],
            // "_type": "WebDevPricingPlan",
            // "_key": "e860ab304d28",
            "cost": "$110/month",
            "learnMoreText": "Inquire",
            "learnMoreLink": "Inquire",
            "slug": {
                "current": "silver-pricing-plan",
                "_type": "slug"
            },
            "name": "Silver"
        },
        {
            "cost": "$180/month",
            "learnMoreText": "Inquire",
            // "_key": "1b1fccfed8e8",
            // "_type": "WebDevPricingPlan",
            "title": "Gold",
            "slug": {
                "current": "gold-pricing-plan",
                "_type": "slug"
            },
            "isEnabled": true,
            "name": "Gold",
            "contentTexts": [
                "10 hrs of development time",
                "features and bug fixes",
                "24 hour response time"
            ]
        }
    ],
    "contentTitle": "Plans",
    "contentTexts": [
        "These plans can only be booked as add-ons to a web development project. For a complete list of pricing please go to the quote page. "
    ],
    "name": "thn pricing",
    "contentPreTitle": "Maintenance",
}

export default WebDevPricingSectionData