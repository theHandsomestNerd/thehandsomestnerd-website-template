import {
    AnimatedAboutUsSectionType, AnimatedPortfolioSectionType, AnimatedServicesSectionType,
    HeroAnimatedContentSectionType,
    ResumeBioSectionType
} from "../../components/BlockContentTypes";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";

const animatedPortfolioSectionType:AnimatedPortfolioSectionType = {
    "heroBullet": undefined,
    "name": "Chow Works Portfolio",
    "portfolioEntries": [
        {
            "detailDescription": "There are many variations of passages",
            "name": "Tech Cover Industry",
            "slug": {
                "current": "tech-cover-industry",
                "_type": "slug"
            },
            "preTitle": "Tech",
            "skillsHighlighted": [
                {
                    "_updatedAt": "2023-11-28T16:38:25Z",
                    "_createdAt": "2023-11-28T16:38:25Z",
                    "_rev": "qQNB1ZAgTG6nT9M7yaTdno",
                    "_type": "ResumeSkill",
                    "name": "React",
                    "_id": "b576089a-66ea-420c-bec6-88639c8cead4",
                    "title": "React"
                },
                {
                    "_type": "ResumeSkill",
                    "name": "Javascript",
                    "_id": "48dbc81a-cc4f-41ba-944a-52a3e44c6d8f",
                    "title": "Javascript",
                    "_updatedAt": "2023-11-28T16:39:08Z",
                    "_createdAt": "2023-11-28T16:39:08Z",
                    "_rev": "HuiHeyCDns6YHDuplMI0qN"
                },
                {
                    "_type": "ResumeSkill",
                    "name": "AWS",
                    "_id": "5c04da9a-bd1f-409c-9c0c-068a0d9077de",
                    "title": "AWS",
                    "_updatedAt": "2023-11-28T16:39:39Z",
                    "_createdAt": "2023-11-28T16:39:39Z",
                    "_rev": "llHPdpE6t2d8pDZnVBRKPN"
                }
            ],
            "inceptionDate": "2023-11-28",
            "_type": "AnimatedPortfolioItem",
            "title": "Tech Cover Industry",
            "coverImage": undefined,
            "detailTitle": "Tech Cover Industry"
        },
        {
            "preTitle": "Tech",
            "_type": "AnimatedPortfolioItem",
            "title": "Application Integration",
            "detailTitle": "Application Integration",
            "slug": {
                "current": "application-integration",
                "_type": "slug"
            },
            "detailDescription": "There are many variations of passages",
            "coverImage": undefined,
            "name": "Application Integration",
        },
        {
            "preTitle": "Tech",
            "name": "Database Design",
            "detailDescription": "There are many variations of passages",
            "coverImage": undefined,
            "_type": "AnimatedPortfolioItem",
            "detailTitle": "Database Design",
            "title": "Database Design",
            "slug": {
                "current": "database-design",
                "_type": "slug"
            },
        }
    ],
    "title": "Technology Solutions Our Recent Tech Projects",
    "_type": "AnimatedPortfolioSection",
    "preTitle": "Our Completed Projects",
}

export default animatedPortfolioSectionType