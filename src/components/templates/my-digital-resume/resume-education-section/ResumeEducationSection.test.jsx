import {render, screen} from '@testing-library/react';
import expect from "expect";
import {ResumeEducationSectionStory} from "../../../../stories/digital-resume/ResumeEducation.stories";

describe('Resume Education Section', () => {
    test('renders all components of education section', async () => {
        render(<ResumeEducationSectionStory.render {...ResumeEducationSectionStory.args}/>)

        expect((await screen.findByText('Education'))).toBeInTheDocument()
        expect((await screen.findByText('.'))).toBeInTheDocument()
        expect(await screen.findAllByRole('educationheader')).toHaveLength(1)
        expect(await screen.findByText('All my life I have been driven by my strong belief that education is important. I try to learn something new every single day.')).toBeInTheDocument()
        expect(await screen.findByText('University of Maryland, Baltimore County')).toBeInTheDocument()
    });
})
