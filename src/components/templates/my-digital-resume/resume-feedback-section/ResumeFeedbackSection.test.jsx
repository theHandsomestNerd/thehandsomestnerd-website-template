import {render, screen} from '@testing-library/react';
import expect from "expect";
import {ResumePortfolioSectionStory} from "../../../../stories/digital-resume/ResumePortfolio.stories";
import {ResumeFeedbackSectionStory} from "../../../../stories/digital-resume/ResumeFeedback.stories";

describe('Resume Feedback Section', () => {
    test('renders all components of feedback section', async () => {
        render(<ResumeFeedbackSectionStory.render {...ResumeFeedbackSectionStory.args}/>)

        expect((await screen.findByText('Feedback'))).toBeInTheDocument()
        expect((await screen.findByText('.'))).toBeInTheDocument()
        expect(await screen.findByText('Take a look at the reviews of my customers and ensure the quality of my services.')).toBeInTheDocument()
        expect(await screen.findAllByText('JamWorks')).toHaveLength(2)
        expect(await screen.findByText('CEO')).toBeInTheDocument()
        expect(await screen.findByText('@')).toBeInTheDocument()
    });
})
