import {
    AnimatedAboutUsSectionType,
    HeroAnimatedContentSectionType, HowItWorksSectionType, PortfolioSectionType,
    ResumeBioSectionType, ResumePortfolioSectionType, WebDevAboutUsSectionType, WebDevTestimonialsSectionType
} from "../../components/BlockContentTypes";
import HeroAnimatedContentSection from "../../components/animated/HeroAnimatedContentSection";

const webDevHowItWorksSectionData:HowItWorksSectionType = {
    "_type": "WebDevHowItWorksSection",
    "name": "How it works",
    "contentTexts":[ "The development process is an exercise in organization of content. You are very active in the development of your project from providing content to providing prompt feedback on design. Following the steps below will take us through a roughly 2 month process to get your project finished and looking great."],
    "contentPreTitle": "The Process",
    "steps": [
        {
            "_type": "WebDevHowItWorksStep",
            "contentText": "15 min meeting where we talk about some basics of your project and a formal layout of the process we normally take to get projects like yours completed.",
            "learnMoreText": "Book a Meet & Greet",
            "name": "Meet & Greet",
            "title": "Virtual Meet & Greet",
            "slug": {
                "current": "meet-n-greet-step",
                "_type": "slug"
            },
            "isEnabled": true
        },
        {
            "_type": "WebDevHowItWorksStep",
            "contentText": "I need a more details to come up with an estimate in cost and time of your project. Fill in this form to give me some insight into your project and I will review this form for the consultation.",
            "learnMoreText": "Quote Form",
            "name": "Fill out Quote Form",
            "title": "Fill out Quote Form",
            "slug": {
                "current": "fill-in-quote-step",
                "_type": "slug"
            }
        },
        {
            "_type": "WebDevHowItWorksStep",
            "contentText": "This conversation that will mainly be about the responses you gave in your quote form will allow me to obtain the details I need to come up with a quote in terms of time and funds for your specific project. ",
            "learnMoreText": "Get a Quote",
            "name": "Consultation",
            "title": "30 min Consultation",
            "slug": {
                "current": "get-a-quote",
                "_type": "slug"
            }
        },
        {
            "contentText": "After you receive your quote and you decide that you want to go with us we will will sign a contract outlining what is expected and cost in time and money. This marks the official start of your project!",
            "learnMoreText": "Start a new Project",
            "name": "Contract Us",
            "title": "Contract Us",
            "slug": {
                "_type": "slug",
                "current": "start-a-new-project"
            },
            "_type": "WebDevHowItWorksStep"
        },
        {
            "learnMoreText": "Consultation form",
            "name": "Design",
            "title": "Design",
            "slug": {
                "current": "step-4-design",
                "_type": "slug"
            },
            "_type": "WebDevHowItWorksStep",
            "contentText": "Using the knowledge from the consultation I will have come up with a few ideas for what the project will look and feel like. These ideas are in the form of stock templates and mockups that we will discuss in detail and allow you to make edits. It is important to be thorough with this step so that development can be as fast as possible."
        },
        {
            "contentText": "Development means I am working hard to make everything from our mockups into something that a client of yours can view and interact with on the internet. There will be weekly review meetings where you get to approve the final completed section as your clients will see it. After we have all the major sections completed there will be an overall project review. ",
            "learnMoreText": "The Developer...",
            "name": "Development",
            "title": "Development",
            "slug": {
                "current": "development-step",
                "_type": "slug"
            },
            "_type": "WebDevHowItWorksStep"
        },
        {
            "_type": "WebDevHowItWorksStep",
            "contentText": "Your application will be tested as we go along by me. It will also be a version that you will have access to where you can test and give feedback at anytime along the way. But this step is devoted to testing the entire project and it's functionality.",
            "name": "Testing",
            "title": "Testing"
        },
        {
            "learnMoreText": "Sample Projects",
            "name": "Deployment",
            "title": "Deployment",
            "slug": {
                "_type": "slug",
                "current": "deployment"
            },
            "_type": "WebDevHowItWorksStep",
            "contentText": "Time to deploy your project to the world!"
        },
        {
            "_type": "WebDevHowItWorksStep",
            "contentText": "Allow me to update your project monthly and keep it running smoothly. I'll fix any minor bugs we find and give further estimates on more complex bug fixes. This also covers content management for those that are less tech savvy.",
            "learnMoreText": "Our Plans",
            "name": "Maintenance",
            "title": "Maintenance"
        }
    ],
    "contentTitle": "How it works"
}

export default webDevHowItWorksSectionData