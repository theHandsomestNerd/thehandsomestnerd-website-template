import {HeaderSectionType, HolidayHeadlineSectionType} from "../../components/BlockContentTypes";
import {SanityMenuContainer} from "../../common/sanityIo/Types";

const drinkeryHeaderData: SanityMenuContainer = {
        "slug": {
            "current": "header",
            "_type": "slug"
        },
    logoText:"The Drinkery",
    isShowSocialMedia: true,
        "subMenus": [
            {
                "displayText": "Weekly Specials",
                "url": "/the-drinkery/home",
                "title": "Home",
                "_type": "menuItem"
            },
            {
                "displayText": "The Other Side",
                "_type": "menuItem",
                "url": "/the-drinkery/theOtherSide",
                "title": "The Other Side",
            },
            {
                "_type": "menuItem",
                "url": "/the-drinkery/album",
                "title": "Album",
                "displayText": "Album",
            }
        ],
        "title": "Header"
}

export default drinkeryHeaderData