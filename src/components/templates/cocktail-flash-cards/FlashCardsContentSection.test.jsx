import {render, screen} from '@testing-library/react';
import expect from "expect";
import {
    DrinkCardSectionComplete,
    FlashCardSectionComplete
} from "../../../stories/the-bartender/BartenderFlashcardSection.stories";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../../../stories/data/DigitalResumeThemeData";

const WrapComponent = ({children}) => <BrowserRouter><ThemeProvider
    theme={getThemeFromSanity(DigitalResumeThemeData)}>{children}</ThemeProvider></BrowserRouter>

describe('Flashcard content section', () => {
    test('renders all components of flashcard', async () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        render(<WrapComponent><FlashCardSectionComplete.render {...FlashCardSectionComplete.args}/></WrapComponent>)

        expect(await screen.findAllByRole('button')).toHaveLength(4)
        expect(screen.getByTestId('FilterListIcon')).toBeInTheDocument()
        expect(screen.getByTestId('CloseIcon')).toBeInTheDocument()
        expect(screen.getByTestId('ArrowRightIcon')).toBeInTheDocument()
        expect(screen.getByTestId('ArrowLeftIcon')).toBeInTheDocument()
        expect((await screen.findByText('Enter Search Terms here'))).toBeInTheDocument()
        expect((await screen.findAllByText('Search'))).toHaveLength(2)
        expect((await screen.findByText('0 / 0'))).toBeInTheDocument()
    });
    test('renders first flashcard', async () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        render(<WrapComponent>
            <FlashCardSectionComplete.render {...FlashCardSectionComplete.args}/>
        </WrapComponent>)


        // expect((screen.queryByText('0 / 0'))).not.toBeInTheDocument()

        expect((await screen.findByText('1 / 37'))).toBeInTheDocument()
        expect((await screen.findByText('Fuzzy Navel'))).toBeInTheDocument()
        expect((screen.queryByText('Peach'))).not.toBeInTheDocument()
    });
    test('renders first drinkcard', async () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        render(<WrapComponent>
            <DrinkCardSectionComplete.render {...DrinkCardSectionComplete.args}/>
        </WrapComponent>)

        expect((await screen.findByText('0 / 0'))).toBeInTheDocument()
        expect((await screen.findByText('1 / 37'))).toBeInTheDocument()
        expect((await screen.findByText('Fuzzy Navel'))).toBeInTheDocument()

        expect((await screen.findByText('Cordial'))).toBeInTheDocument()
        expect((await screen.findAllByText('Peach Schnapps'))).toHaveLength(2)

        expect((await screen.findByText('0.5oz'))).toBeInTheDocument()
        expect((await screen.findByText('3oz'))).toBeInTheDocument()

        expect((await screen.findByText('ADD ice to the glass.'))).toBeInTheDocument()
        expect((await screen.findByText('ADD remaining ingredients'))).toBeInTheDocument()
        expect((await screen.findByText('SHAKE vigorously'))).toBeInTheDocument()
        expect((await screen.findByText('STRAIN over ice'))).toBeInTheDocument()
    });
})
