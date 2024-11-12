import {render, screen} from '@testing-library/react';
import expect from "expect";
import {composeStories} from '@storybook/react';
import * as stories from "../../../../stories/digital-resume/ResumeFeedback.stories";
import ResumeFeedbackSectionData from "../../../../stories/data/ResumeFeedbackSectionData";

const {ResumeFeedbackSectionStory} = composeStories(stories);


describe('Resume Feedback Section', () => {
    test('renders all components of feedback section',  () => {
        render(<ResumeFeedbackSectionStory/>)

        expect(screen.getByText('Feedback')).toBeInTheDocument()
        expect(screen.getByAltText('b5011657-c526-4100-aabf-886c204c2918-feedback-image')).toBeInTheDocument()
        expect(screen.getByAltText('886c204c2918-4100-c526-aabf-b5011657-feedback-image')).toBeInTheDocument()
        expect(screen.getByText('.')).toBeInTheDocument()
        expect(screen.getByText('Take a look at the reviews of my customers and ensure the quality of my services.')).toBeInTheDocument()
        expect(screen.getByText('JamWorks')).toBeInTheDocument()
        expect(screen.getByText('JamWorks Company')).toBeInTheDocument()
        expect(screen.getByText('CEO')).toBeInTheDocument()
        expect(screen.getAllByText('@')).toHaveLength(2)
        expect(screen.getAllByRole('feedback-divider')).toHaveLength(1)

    });

    test('renders all components of feedback section with one feedback',  () => {
        render(<ResumeFeedbackSectionStory sectionData={{
            ...ResumeFeedbackSectionData,
            feedbackEntries: ResumeFeedbackSectionData.feedbackEntries?.slice(0, 1)
        }}/>)

        expect(screen.getByText('Feedback')).toBeInTheDocument()
        expect(screen.getByAltText('b5011657-c526-4100-aabf-886c204c2918-feedback-image')).toBeInTheDocument()
        expect(screen.getByText('.')).toBeInTheDocument()
        expect(screen.getByText('Take a look at the reviews of my customers and ensure the quality of my services.')).toBeInTheDocument()
        expect(screen.getByText('JamWorks')).toBeInTheDocument()
        expect(screen.getByText('JamWorks Company')).toBeInTheDocument()
        expect(screen.getByText('CEO')).toBeInTheDocument()
        expect(screen.getAllByText('@')).toHaveLength(1)
        expect(screen.queryByRole('feedback-divider')).not.toBeInTheDocument()
    });
})
