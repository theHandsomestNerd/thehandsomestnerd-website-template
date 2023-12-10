import {
    FooterSectionType,
    HeaderSectionType,
    HeroAnimatedContentSectionType,
    ResumeBioSectionType
} from "../../components/BlockContentTypes";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";

const FooterSectionData:FooterSectionType = {
    _type: "FooterSection",
    "footerMenuRef": {
        "logoAccentText": ".",
        "slug": {
            "current": "chow-works-footer",
            "_type": "slug"
        },
        "logoText": "Chow Works",
        "title": "Chow Works Footer",
        "subMenus": [
            {
                "title": "Quick Links",
                "_type": "menuGroup",
                "menuGroupTitle": "Quick Links",
                "links": [
                    {
                        "url": "#ANIMATED_ABOUT_US",
                        "_type": "menuItem",
                        "displayText": "About Us"
                    },
                    {
                        "_type": "menuItem",
                        "displayText": "Services",
                        "url": "#ANIMATED_SERVICES",
                    },
                    {
                        "_type": "menuItem",
                        "displayText": "Portfolio",
                        "url": "#ANIMATED_PORTFOLIO",
                    },
                    {
                        "displayText": "Contact Us",
                        "url": "#MAP_SECTION",
                        "_type": "menuItem"
                    }
                ]
            }
        ],
        // "theme": {
        //     "_ref": "9827f3c2-f642-41ce-a002-9180c45ce22d",
        //     "_type": "reference"
        // }
    },
    "name": "Chow Works Footer",
    "backgroundImgSrc": {
        "_type": "image",
        "asset": {
            "_ref": "image-cf05be1b9150feb68f92fe6b3f50fda7bde6b7d3-1920x670-jpg",
            "_type": "reference"
        }
    },
    "backgroundColor": "LIGHT_GRAY",
    "topPadding": "56px",
    "isSocialMediaBlock": true,
}

export default FooterSectionData