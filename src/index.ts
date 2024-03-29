import App from "./App";
import AppWrapper from "./AppWrapper";
import { SanityTransformHwHomePage } from "./common/sanityIo/Types";
import {ResumeBioSectionType, ResumeEducationSectionType, ResumeExperienceSectionType, ResumePortfolioSectionType, ResumeSkillSectionType} from "./components/BlockContentTypes";
import ResumeDocumentPDF from "./components/ResumeDocumentPDF";
import SocialMediaBlock from "./components/templates/my-digital-resume/social-media-block/SocialMediaBlock";


export {
    AppWrapper,
    SocialMediaBlock,
    App,
    ResumeDocumentPDF
};

export type {
    ResumeBioSectionType,
    ResumeEducationSectionType,
    ResumeExperienceSectionType,
    ResumePortfolioSectionType,
    ResumeSkillSectionType,
    SanityTransformHwHomePage
};

