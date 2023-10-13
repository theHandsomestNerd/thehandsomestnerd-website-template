import {render, screen} from '@testing-library/react';
import expect from "expect";
import {ResumeBioSectionComplete} from "../../../stories/digital-resume/ResumeBio.stories";
import {ResumeSkillsSectionCompleteStory} from "../../../stories/digital-resume/ResumeSkills.stories";
import {ResumeExperienceSectionComplete} from "../../../stories/digital-resume/ResumeExperience.stories";

describe('Resume Experience Section', () => {
    test('renders all components of experience section', async () => {
        render(<ResumeExperienceSectionComplete.render {...ResumeExperienceSectionComplete.args}/>)

        expect((await screen.findByText('Experience'))).toBeInTheDocument()
        expect((await screen.findByText('.'))).toBeInTheDocument()
        expect(await screen.findAllByRole('experienceheader')).toHaveLength(10)
        expect(await screen.findAllByRole('experiencedivider')).toHaveLength(10)
        expect(await screen.findAllByRole('experienceskill')).toHaveLength(65)
    });
})
