import {fireEvent, render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/react';
import * as stories from "../../../../stories/digital-resume/ResumePortfolio.stories";

const {
    ResumePortfolioSectionStory
} = composeStories(stories);

const openFirstPortfolioItemModal = () => {
    const fintechWebPortfolioItemButton = screen.getByRole('button', {name: /fintech-company-website-button/i})
    expect(fintechWebPortfolioItemButton).toBeInTheDocument()
    expect(screen.queryByRole('presentation', {name: /fintech-company-website-modal/i})).not.toBeInTheDocument()

    fireEvent.click(fintechWebPortfolioItemButton)
    expect(screen.getByRole('presentation', {name: /fintech-company-website-modal/i})).toBeInTheDocument()
}

describe('Resume Portfolio Section', () => {
    test('renders all components of portfolio section', () => {
        render(<ResumePortfolioSectionStory/>)

        expect(screen.getByText('Portfolio')).toBeInTheDocument()
        expect(screen.getByText('.')).toBeInTheDocument()
        expect(screen.getAllByRole('button')).toHaveLength(9)
        expect(screen.getByText('This is my Portfolio. These projects are in various stages of completion.')).toBeInTheDocument()
        expect(screen.getByText('Fintech Company Website')).toBeInTheDocument()
        expect(screen.getByText('Oct 2019')).toBeInTheDocument()
        expect(screen.queryByRole('skills-tooltip')).not.toBeInTheDocument()
    });

    describe('modal mechanics', () => {
        beforeEach(() => {
            render(<ResumePortfolioSectionStory/>)
        })

        test('opens portfolio entry modal when portfolio is clicked', () => {
            openFirstPortfolioItemModal()
            expect(screen.getByRole('button', {name: /Back to Resume/i})).toBeInTheDocument()
            expect(screen.getByRole('link', {name: /Go to this Project/i})).toBeInTheDocument()
        });

        test('closes portfolio entry modal with close icon button when portfolio is opened', () => {
            openFirstPortfolioItemModal()

            const closeModalButton = screen.getByRole('button', {name: /modal-close-button/i})
            expect(closeModalButton).toBeInTheDocument()

            fireEvent.click(closeModalButton)
            expect(screen.queryByRole('presentation', {name: /fintech-company-website-modal/i})).not.toBeInTheDocument()
        });

        test('closes portfolio entry modal with Back to Resume button when portfolio is opened', () => {
            openFirstPortfolioItemModal()

            const backToResumeButton = screen.getByRole('button', {name: /Back to Resume/i})
            expect(backToResumeButton).toBeInTheDocument()

            fireEvent.click(backToResumeButton)
            expect(screen.queryByRole('presentation', {name: /fintech-company-website-modal/i})).not.toBeInTheDocument()
        });
    })

})
