import {
    HeaderSectionType,
    HeroAnimatedContentSectionType,
    ResumeBioSectionType
} from "../../components/BlockContentTypes";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";

const AnimatedHeroSectionData:HeaderSectionType = {
    title:"Chow Works",
    backgroundColor: "DARKERGRAY",
    logoImgSrc:undefined,
    "highlightedDetails": [
        {
            "_type": "ServiceAmenityItem",
            "name": "Call for Anything",
            "description": "+088 57 00 24 51",
            "title": "Call for Anything"
        },
        {
            "title": "You may send an email",
            "_type": "ServiceAmenityItem",
            "name": "You may send an email",
            "description": "helpus24@gmail.com",
        },
        {
            "title": "Sunday - Closed",
            "_type": "ServiceAmenityItem",
            "name": "Sunday - Closed",
            "description": "Mon - Sat(9.00 - 6.00)",
        }
    ],
    "ctaButtonLink": "/contactUs",
    "isSearch": true,
    "name": "Chow Works Header",
    "ctaButtonText": "Contact Us",
    "isEnhanced": true,
    "headerMenuRef": {
        "slug": {
            "current": "chow-works-header-menu",
            "_type": "slug"
        },
        "subMenus": [
            {
                _type:"menuItem",
                "title": "About Us",
                "displayText": "About Us",
                "url": "#ANIMATED_ABOUT_US",
            },
            {
                _type:"menuItem",
                "displayText": "Services",
                "url": "#ANIMATED_SERVICES",
                "title": "Services",
            },
            {
                _type:"menuItem",
                "displayText": "Portfolio",
                "title": "Portfolio",
                "url": "#ANIMATED_PORTFOLIO",
            },
            {
                _type:"menuItem",
                "title": "Contact Us",
                "displayText": "Contact Us",
                "url": "#MAP_SECTION",
            }
        ],
        "title": "Chow Works",
        "logoText": "Chow Works",
    },
}

export default AnimatedHeroSectionData