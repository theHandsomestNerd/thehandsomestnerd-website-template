import {
    AnimatedAboutUsSectionType,
    HeroAnimatedContentSectionType, PortfolioSectionType,
    ResumeBioSectionType, ResumePortfolioSectionType, WebDevAboutUsSectionType, WebDevTestimonialsSectionType
} from "../../components/BlockContentTypes";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";

const webDevPortfolioSectionData:ResumePortfolioSectionType = {
    "introduction": "Take a look at some of our work. There are examples coming soon highlighting each service.",
    "preTitle": "Works",
    "title": "Our Works",
    "name": "Our Works",
    "portfolioEntries": [
        {
            "inceptionDate": "2022-11-19",
            "linkToProd": "https://transformhw.org",
            "coverImage": {
                "asset": {
                    "_ref": "image-c316b0a296782f8bc4e663d9a0c3dea08b3748d9-1280x1445-jpg",
                    "_type": "reference"
                },
                "_type": "image"
            },
            "detailDescription": "A website for a Healing and Wellness site that allows for payments and booking. There are some basic SEO and Analytics under the hood.",
            "slug": {
                "current": "healing-and-wellness-site",
                "_type": "slug"
            },
            "skillsHighlighted": [
                {
                    "_type": "ResumeSkill",
                    "name": "Web Development",
                    "_id": "c426d52b-986b-44bc-bac7-59600447c91f",
                    "title": "Web Development",
                    "_updatedAt": "2022-12-15T11:31:26Z",
                    "_createdAt": "2022-12-15T11:31:26Z",
                    "_rev": "K0rtrsNuqDEgCtVQGty8qw"
                },
                {
                    "_type": "ResumeSkill",
                    "name": "Appointments",
                    "_id": "a72e3560-19b0-4aaa-ad00-26520ea1855f",
                    "title": "Appointments",
                    "_updatedAt": "2022-12-15T11:31:47Z",
                    "_createdAt": "2022-12-15T11:31:47Z",
                    "_rev": "K0rtrsNuqDEgCtVQGtyJZ0"
                },
                {
                    "title": "Payments",
                    "_updatedAt": "2022-12-15T11:32:04Z",
                    "_createdAt": "2022-12-15T11:32:04Z",
                    "_rev": "3re4XGUaXqpLG8nUTEtMhv",
                    "_type": "ResumeSkill",
                    "name": "Payments",
                    "_id": "c96a0f8a-18b7-404f-9aef-997783743a4f"
                }
            ],
            "detailTitle": "Healing & Wellness Site",
            "title": "Healing & Wellness Site",
            "name": "Healing and Wellness Site",
        },
        {
            "name": "Digital Resume",
            "detailTitle": "Software Engineer Digital Resume",
            "title": "Software Engineer Digital Resume",
            "linkToProd": "https://terrellsingleton.com",
            "slug": {
                "current": "software-engineer-digital-resume",
                "_type": "slug"
            },
            "inceptionDate": "2022-12-01",
            "imageGallery": [
                {
                    "_key": "c5889167a7d7",
                    "asset": {
                        "_ref": "image-964dfd8fd267656082717931c11dad2b99087ec2-1284x2778-png",
                        "_type": "reference"
                    },
                    "_type": "image"
                },
                {
                    "_type": "image",
                    "_key": "cb055f4bf9e1",
                    "asset": {
                        "_ref": "image-330f7ecae19feac20556c74896af5ace052644dd-1284x2778-png",
                        "_type": "reference"
                    }
                },
                {
                    "_type": "image",
                    "_key": "ac55856f61b0",
                    "asset": {
                        "_ref": "image-9d2e88049ef667a3d8f5b061f8b7a0096deaf71e-1284x2778-png",
                        "_type": "reference"
                    }
                }
            ],
            "skillsHighlighted": [
                {
                    "_createdAt": "2022-12-15T11:31:26Z",
                    "_rev": "K0rtrsNuqDEgCtVQGty8qw",
                    "_type": "ResumeSkill",
                    "name": "Web Development",
                    "_id": "c426d52b-986b-44bc-bac7-59600447c91f",
                    "title": "Web Development",
                    "_updatedAt": "2022-12-15T11:31:26Z"
                },
                {
                    "_type": "ResumeSkill",
                    "name": "Appointments",
                    "_id": "a72e3560-19b0-4aaa-ad00-26520ea1855f",
                    "title": "Appointments",
                    "_updatedAt": "2022-12-15T11:31:47Z",
                    "_createdAt": "2022-12-15T11:31:47Z",
                    "_rev": "K0rtrsNuqDEgCtVQGtyJZ0"
                },
                {
                    "_createdAt": "2022-12-15T11:32:04Z",
                    "_rev": "3re4XGUaXqpLG8nUTEtMhv",
                    "_type": "ResumeSkill",
                    "name": "Payments",
                    "_id": "c96a0f8a-18b7-404f-9aef-997783743a4f",
                    "title": "Payments",
                    "_updatedAt": "2022-12-15T11:32:04Z"
                }
            ],
            "detailDescription": "A digital resume for a talented Software Engineer that happens to be the CEO of the company. There is appointment booking and payment built into the site using Square. ",
            "coverImage": {
                "_type": "image",
                "asset": {
                    "_ref": "image-119b02cc6b27f21c012ed2eb2e39e2e73c06ca2a-1002x1938-png",
                    "_type": "reference"
                }
            },
        },
        {
            "title": "Local Bar Website",
            "detailTitle": "The Drinkery",
            "coverImage": {
                "_type": "image",
                "asset": {
                    "_ref": "image-4e3cd7013e2b7c002fae2f6b77f8dcce8641bbda-1520x1472-png",
                    "_type": "reference"
                }
            },
            "name": "The Drinkery",
            "skillsHighlighted": [
                {
                    "_id": "59fe1d75-a35c-4a6c-8ecd-cf872791821b",
                    "title": "React.js",
                    "_updatedAt": "2022-11-30T18:51:44Z",
                    "_createdAt": "2022-11-30T18:51:44Z",
                    "_rev": "lhoXF04OR35CGYtnFgQAUI",
                    "_type": "ResumeSkill",
                    "name": "React.js"
                },
                {
                    "_createdAt": "2022-11-30T21:36:36Z",
                    "_rev": "lhoXF04OR35CGYtnFhKta7",
                    "_type": "ResumeSkill",
                    "name": "Create React App",
                    "_id": "86c7022f-fbbe-4ebd-ab82-368685ab26ac",
                    "title": "Create React App(CRA)",
                    "_updatedAt": "2022-11-30T21:36:36Z"
                },
                {
                    "_createdAt": "2022-11-30T19:05:00Z",
                    "_rev": "lhoXF04OR35CGYtnFgoshO",
                    "_type": "ResumeSkill",
                    "name": "GCP",
                    "_id": "7b467c08-7dfe-4c33-b1f5-bd925522c87e",
                    "title": "Google Cloud Platform(GCP)",
                    "_updatedAt": "2022-11-30T20:08:15Z"
                },
                {
                    "_createdAt": "2022-11-30T18:47:16Z",
                    "_rev": "lhoXF04OR35CGYtnFgMcCi",
                    "_type": "ResumeSkill",
                    "name": "Javascript",
                    "_id": "963f8182-5b33-4b56-9d92-112a02ebcf01",
                    "title": "Javascript",
                    "_updatedAt": "2022-11-30T18:47:16Z"
                },
                {
                    "_id": "390a755a-c417-49eb-93aa-e77a19838261",
                    "title": "Material-ui",
                    "_updatedAt": "2022-11-30T18:57:33Z",
                    "_createdAt": "2022-11-30T18:57:33Z",
                    "_rev": "lhoXF04OR35CGYtnFgRram",
                    "_type": "ResumeSkill",
                    "name": "Material-ui"
                }
            ],
            "detailDescription": "The website for a local dive bar in Baltimore, MD. "
        }
    ],
}

export default webDevPortfolioSectionData