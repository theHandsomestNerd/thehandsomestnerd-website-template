import {
    AnimatedAboutUsSectionType,
    HeroAnimatedContentSectionType, PortfolioSectionType,
    ResumeBioSectionType, WebDevAboutUsSectionType, WebDevStatsCounterSectionType
} from "../../components/BlockContentTypes";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";

const webDevStatsSectionType:PortfolioSectionType = {
    "servicesList": [
        {
            "contentText": "An application may or may not have a frontend User Interface and is usually connected to some type of database or datastore. Your application can use many of the latest technologies to display video or audio, play games, or notify customers via email or text of important reminders. I will guide you through every step of the process from application design to delivery. ",
            "slug": {
                "_type": "slug",
                "current": "application-development"
            },
            "imageSrc": {
                "_type": "image",
                "asset": {
                    "_ref": "image-acd934d26df79ba2a7edfd119c2e7a52eea405c4-650x650-png",
                    "_type": "reference"
                }
            },
            "contentTitle": "Application Development",
            "name": "Application Development",
            "learnMoreText": "Learn More",
        },
        {
            "learnMoreText": "Learn More",
            "contentText": "This is a custom site built web application with your specific requirements in mind. Your site can allow for booking, payment, customer analytics, admin content management and other custom features. Best of all your site will be best viewed with mobile in mind first. I will guide you through every step of the process from site design to delivery. ",
            "name": "Web Development",
            "imageSrc": {
                "asset": {
                    "_ref": "image-bc72a5f5eddfe2f678b3707d338ea872ec1f5578-650x650-png",
                    "_type": "reference"
                },
                "_type": "image"
            },
            "slug": {
                "_type": "slug",
                "current": "web-development"
            },
            "contentTitle": "Web Development"
        },
        {
            "learnMoreText": "Learn More",
            "contentText": "Let me help you find tech solutions to your business problems. \n\nDo you need Point of Sale for your business? \nDo you want to remind or notify your customers? \nDo you want to improve your web presence? \nAre you considering a website or an application built? \nSocial Media Accounts and domain specific email address Setup.\nWhat should you do and not do with your business social media account?\nNot sure if you need a custom application or if there is already a solution built for you? ",
            "contentTitle": "Tech Consulting",
            "imageSrc": {
                "_type": "image",
                "asset": {
                    "_ref": "image-07e8d8e6546732a01d3eb895897f8e77599d2f8d-650x650-png",
                    "_type": "reference"
                }
            },
            "slug": {
                "current": "technology-consulting",
                "_type": "slug"
            },
            "name": "Technology Consulting",
        }
    ],
    "contentPreTitle": "Services",
    "contentTexts": [
        "You can learn about our services below. "
    ],
    "name": "Services web dev",
    "contentTitle": "Our Services"
}

export default webDevStatsSectionType