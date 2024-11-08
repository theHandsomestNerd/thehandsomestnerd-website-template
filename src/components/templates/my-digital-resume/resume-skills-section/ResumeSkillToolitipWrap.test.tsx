import {render, screen, waitFor} from '@testing-library/react';
import {composeStories} from '@storybook/react';
import * as stories from "../../../../stories/digital-resume/ResumeSkillTooltipWrap.stories";
import expect from "expect";

const {
    ResumeSkillTooltipWrapperCompleteStory,
    ResumeSkillTooltipWrapperTooltipOpenStory,
    ResumeSkillTooltipOpenEmptyVersionSpaceStory
} = composeStories(stories);

describe('Resume Skill Tooltip (Wrapper)', () => {
    test('renders ResumeSkill tooltip target as ResumeSkill title', async () => {
        render(<ResumeSkillTooltipWrapperCompleteStory/>)

        expect((await screen.findByText('I have a tooltip'))).toBeInTheDocument()
    });

    test('renders Resume Skill tooltip initially closed', async () => {
        render(<ResumeSkillTooltipWrapperCompleteStory/>)

        expect(screen.queryByText('React')).not.toBeInTheDocument()
    });

    test('renders ResumeSkill tooltip open with all text from Resume Skill object', async () => {
        render(<ResumeSkillTooltipWrapperTooltipOpenStory/>)
        // screen.debug(undefined, 1000000)
        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.queryByText('React is a flexible modern Javascript frontend framework.')).toBeInTheDocument()
        waitFor(() => {
            expect(screen.queryByText('17 years 11 months')).toBeInTheDocument()
        })
        expect(screen.queryByText('Versions: 16 | 17 | 18')).toBeInTheDocument()
    });

    test('renders ResumeSkill tooltip open with blank string in versions', async () => {
        render(<ResumeSkillTooltipOpenEmptyVersionSpaceStory/>)
        // screen.debug(undefined, 1000000)
        expect(screen.queryByText('Versions: 16 | 18')).toBeInTheDocument()
    });

    test('renders proficiency in ResumeSkill tooltip', async () => {
        render(<ResumeSkillTooltipWrapperTooltipOpenStory/>)
        // screen.debug(undefined, 1000000)
        expect(screen.queryByText('Proficiency')).toBeInTheDocument()
        expect(screen.queryByText('50%')).toBeInTheDocument()

        const progressElements = screen.getAllByRole('progressbar');
        const circularProgressValue = progressElements[0]
        expect(circularProgressValue).toHaveAttribute('aria-valuenow', '50');
        expect(circularProgressValue).toHaveClass('MuiCircularProgress-determinate');
    });
})
