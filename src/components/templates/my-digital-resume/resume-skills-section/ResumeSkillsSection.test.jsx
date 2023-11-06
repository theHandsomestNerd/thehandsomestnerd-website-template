import {render, screen} from '@testing-library/react';
import expect from "expect";
import {ResumeBioSectionComplete} from "../../../../stories/digital-resume/ResumeBio.stories";
import {ResumeSkillsSectionCompleteStory} from "../../../../stories/digital-resume/ResumeSkills.stories";

describe('Resume Skill Section', () => {
    test('renders all components of skills section', async () => {
        render(<ResumeSkillsSectionCompleteStory.render {...ResumeSkillsSectionCompleteStory.args}/>)

        expect((await screen.findByText('Skills'))).toBeInTheDocument()
        expect((await screen.findByText('.'))).toBeInTheDocument()
        expect(await screen.findAllByRole('skillheader')).toHaveLength(10)
        expect(await screen.findAllByRole('skilldivider')).toHaveLength(10)
        expect(await screen.findAllByRole('subskill')).toHaveLength(65)
    });
})
