import {HeaderSectionType, HolidayHeadlineSectionType} from "../../components/BlockContentTypes";
import {SanityMenuContainer} from "../../common/sanityIo/Types";

const drinkeryHeaderData: SanityMenuContainer = {
    "subMenus": [
        {
            "links": [
                {
                    "_type": "menuItem",
                    "displayText": "Weekly Specials",
                    "url": "/the-drinkery/home",
                },
                {
                    "url": "/the-drinkery/theOtherSide",
                    "_type": "menuItem",
                    "displayText": "The Other Side"
                },
                {
                    "url": "/the-drinkery/album",
                    "_type": "menuItem",
                    "displayText": "Album"
                },
                {
                    "url": "https://www.google.com/maps/place/The+Drinkery/@39.3002778,-76.6188889,15z/data=!4m8!3m7!1s0x89c804bd65c4e447:0xdbdf3901ca402f3!8m2!3d39.3002778!4d-76.6188889!9m1!1b1!16s%2Fg%2F1tksp9_s?entry=ttu",
                    "isOutlinedButton": true,
                    "_type": "menuItem",
                    "displayText": "Leave a Google Review"
                }
            ],
            "title": "Quick Links",
            "_type": "menuGroup",
            "slug": {
                "current": "quick-links",
                "_type": "slug"
            },
        }
    ],
    "title": "Footer",
    logoText:"The Drinkery",
    isShowSocialMedia:true,
    isHideOverlay:true,
    "slug": {
        "current": "footer",
        "_type": "slug"
    }
}

export default drinkeryHeaderData