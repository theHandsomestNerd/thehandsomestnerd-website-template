import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/react';
// import {ResumePortfolioSectionStory} from "../../../../stories/digital-resume/ResumePortfolio.stories";
import * as stories from "../../../../stories/digital-resume/ResumePortfolio.stories";
const {
    ResumePortfolioSectionStory
} = composeStories(stories);
describe('Resume Portfolio Section', () => {
    test('renders all components of portfolio section', async () => {
        render(<ResumePortfolioSectionStory />)

        expect((await screen.findByText('Portfolio'))).toBeInTheDocument()
        expect((await screen.findByText('.'))).toBeInTheDocument()
        expect(await screen.findAllByRole('button')).toHaveLength(8)
        expect(await screen.findByText('This is my Portfolio. These projects are in various stages of completion.')).toBeInTheDocument()
        expect(await screen.findByText('Fintech Company Website')).toBeInTheDocument()
        expect(await screen.findByText('Sep 2019')).toBeInTheDocument()
    });
})
