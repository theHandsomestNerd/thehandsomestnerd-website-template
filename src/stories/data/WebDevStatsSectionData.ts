import {
    AnimatedAboutUsSectionType,
    HeroAnimatedContentSectionType,
    ResumeBioSectionType, WebDevAboutUsSectionType, WebDevStatsCounterSectionType
} from "../../components/BlockContentTypes";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";

const webDevStatsSectionType:WebDevStatsCounterSectionType = {
    title:"Web Dev section",
    "stats": [
        {
            "statContent": "Success in getting customer",
            "statValue": "99%",
            "isEnabled": true,
            "_type": "WebDevStatistic"
        },
        {
            "_type": "WebDevStatistic",
            "statContent": "Lines of code using Typescript, React, Node.js, ...",
            "statValue": "25k",
            "isEnabled": true
        },
        {
            "statContent": "Clients love The Handsomest Nerd",
            "statValue": "5",
            "isEnabled": true,
            "_type": "WebDevStatistic",
        },
        {
            "statContent": "Reviewers Satisfaction Rating",
            "statValue": "4.9",
            "isEnabled": true,
            "_type": "WebDevStatistic"
        }
    ],
    "name": "Stats Counter",
}

export default webDevStatsSectionType