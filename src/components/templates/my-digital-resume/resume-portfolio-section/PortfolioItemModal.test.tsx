import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {composeStories} from '@storybook/react';
import * as stories from "../../../../stories/digital-resume/PortfolioItemModal.stories";

const {
    PortfolioItemModalOpenStory
} = composeStories(stories);

describe('Resume Portfolio Item Modal Section', () => {
    test('renders all components of portfolio Item Modal', () => {
        render(<PortfolioItemModalOpenStory/>)

        expect(screen.getByRole('button', {name: /modal-close-button/i})).toBeInTheDocument()

        expect(screen.getByRole('listitem', {name: /image-list-item-0/i})).toBeInTheDocument()
        expect(screen.getByRole('listitem', {name: /image-list-item-1/i})).toBeInTheDocument()
        expect(screen.getByRole('listitem', {name: /image-list-item-2/i})).toBeInTheDocument()
        expect(screen.getByRole('listitem', {name: /image-list-item-3/i})).toBeInTheDocument()
        expect(screen.queryByRole('listitem', {name: /image-list-item-4/i})).not.toBeInTheDocument()

        expect(screen.getByText(/Black Themed Question Game - BlckTwttr/i)).toBeInTheDocument()
        expect(screen.getByText(/Jun 2022/i)).toBeInTheDocument()
        expect(screen.getByText(/React.js/i)).toBeInTheDocument()
        expect(screen.getByText(/Typescript/i)).toBeInTheDocument()
    });

    describe('photo modal mechanics', () => {
        test('closes portfolio modal when portfolio is opened', async () => {
            render(<PortfolioItemModalOpenStory/>)

            const firstImageListItem = screen.getByRole('listitem', {name: /image-list-item-0/i})
            expect(firstImageListItem).toBeInTheDocument()
            expect(screen.queryByRole('presentation', {name: /image-dialog-0/i})).not.toBeInTheDocument()

            fireEvent.click(firstImageListItem)

            const firstImageDialog = screen.getByRole('presentation', {name: /image-dialog-0/i})
            expect(firstImageDialog).toBeInTheDocument()

            fireEvent.click(firstImageDialog)

            await waitFor(()=>{
                expect(screen.queryByRole('presentation', {name: /image-dialog-0/i})).not.toBeInTheDocument()
            })
        });
    })

})
