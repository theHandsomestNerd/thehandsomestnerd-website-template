import PortfolioItemModal
    from "../../components/templates/my-digital-resume/resume-portfolio-section/PortfolioItemModal";
import {Meta, StoryObj} from "@storybook/react";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import ResumeExperiencesArrayData from "../data/ResumeExperiencesArrayData";
import ResumePortfolioItemsArrayData from "../data/ResumePortfolioItemsArrayData";

const meta: Meta<typeof PortfolioItemModal> = {
    title: "Resume/Page Components/PortfolioItemModal",
    component: PortfolioItemModal
} satisfies Meta<typeof PortfolioItemModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PortfolioItemModalOpenStory: Story = {
    args: {
        currentItem: ResumePortfolioItemsArrayData[0],
        setIsOpen: () => true,
        isOpen: true
    },
    parameters: {
        pageTheme: DigitalResumeThemeData,
        fetchSkillExperiences: () => {
            return Promise.resolve(ResumeExperiencesArrayData)
        },
        fetchPortfolioItems: () => {
            return Promise.resolve(ResumePortfolioItemsArrayData)
        },
    },
    render: ({currentItem, setIsOpen, isOpen}) =>
        <PortfolioItemModal isOpen={isOpen} setIsOpen={setIsOpen} currentItem={currentItem}></PortfolioItemModal>
};
