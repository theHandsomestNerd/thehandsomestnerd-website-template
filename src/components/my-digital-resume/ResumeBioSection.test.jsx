import {render, screen} from '@testing-library/react';
import expect from "expect";
import {ResumeBioSectionComplete} from "../../stories/digital-resume/ResumeBio.stories";

describe('Resume Bio Section', () => {
    test('renders all components of bio', async () => {
        render(<ResumeBioSectionComplete.render {...ResumeBioSectionComplete.args}/>)

        expect(await screen.findAllByRole('button')).toHaveLength(1)
        expect(await screen.findAllByRole('link')).toHaveLength(8)
        expect(screen.getByTestId('bio-image')).toBeInTheDocument()
        expect(screen.getByTestId('social-media-block')).toBeInTheDocument()
        expect(screen.getByTestId('submit-email-block')).toBeInTheDocument()
        expect((await screen.findByText('Contact Me'))).toBeInTheDocument()
        expect((await screen.findByText('Meet with Me'))).toBeInTheDocument()
        expect((await screen.findByText('Download Resume'))).toBeInTheDocument()
        expect(await screen.findByText('James Terrell Singleton')).toBeInTheDocument()
        expect(await screen.findByText('I am a Web Developer located in the Maryand, District of Columbia, and Virginia Metropolitan area. I currently work as a remote fullstack software engineer for Assembled Financial, located in Los Angeles, CA. I am looking to take on more work, to increase my skills as a Web Developer, and to make things that are great. I am open to relocation.')).toBeInTheDocument()
        expect(await screen.findByText('443.992.2191')).toBeInTheDocument()
        expect(await screen.findByText('terrell.singleton@gmail.com')).toBeInTheDocument()
        expect(await screen.findByText('7300 Roselynn Lane, Clinton, MD 20735')).toBeInTheDocument()
    });
})
