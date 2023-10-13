import {act, fireEvent, render, screen} from '@testing-library/react';
import expect from "expect";
import {BusinessCardSubmitEmailStory} from "../../../stories/digital-resume/SubmitEmail.stories";
import leadClient from "./under-construction-page/leadClient";
// export function useCustomHook() {
//     return useQuery({ queryKey: ['sendBusinessCard Email'], queryFn: () => ({isLoading:false,data:{huh:"yu"}}) });
// }

// const queryClient = new QueryClient();
// const wrapper = ({ children }) => (
//     <QueryClientProvider client={queryClient}>
//         {children}
//     </QueryClientProvider>
// );
describe('Business Card Submit Email', () => {
    test('renders all parts of component', async () => {
        render(<BusinessCardSubmitEmailStory.render {...BusinessCardSubmitEmailStory.args}/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByText('Want a copy of my resume emailed to you?')).toBeInTheDocument()
        expect(screen.getByRole('button')).toHaveTextContent(/submit/i)
        expect(screen.getByLabelText('Your Email Address.')).toBeInTheDocument()
    });

    test('Can enter an email address', async () => {
        render(<BusinessCardSubmitEmailStory.render {...BusinessCardSubmitEmailStory.args}/>)


        jest
            .spyOn(leadClient, 'sendBusinessCardEmail')
            .mockImplementation(
                jest
                    .fn()
                    .mockReturnValue({
                        status: "200", email: "email@gmail.com", message: "Success"
                    })
            )

        // jest.mock('./under-construction-page/leadClient', () => ({
        //     sendBusinessCardEmail: jest.fn().mockImplementation(()=>({status: "200"}))
        // }));


        const theButton = screen.getByRole('button')
        expect(theButton).toBeDisabled()

        const theInput = screen.getByLabelText('Your Email Address.')

        fireEvent.change(theInput, {target: {value: 'terrell@gmail.com'}})
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await expect(theButton).toBeEnabled()
            fireEvent.click(theButton)
        })

        expect(leadClient.sendBusinessCardEmail).toHaveBeenCalledTimes(1)
        expect(leadClient.sendBusinessCardEmail).toHaveBeenCalledWith({
            "email": 'terrell@gmail.com',
            source: "storybook"
        })
        expect(screen.getByText('Thank you for your submission!')).toBeInTheDocument()
    });
    test('Incorrect email address shows error', async () => {
        render(<BusinessCardSubmitEmailStory.render {...BusinessCardSubmitEmailStory.args}/>)

        // jest
        //     .spyOn(leadClient, 'sendBusinessCardEmail')
        //     .mockImplementation(
        //         jest
        //             .fn()
        //             .mockReturnValue({
        //                 data: {status: "400", message: "Please Try again"}
        //             })
        //     )


        const theButton = screen.getByRole('button')
        expect(theButton).toBeDisabled()

        const theInput = screen.getByLabelText('Your Email Address.')

        fireEvent.change(theInput, {target: {value: 'terrellgmail.com'}})
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await expect(theButton).toBeDisabled()
            // fireEvent.click(theButton)
        })

        // expect(leadClient.sendBusinessCardEmail).toHaveBeenCalledTimes(1)
        // expect(leadClient.sendBusinessCardEmail).toHaveBeenCalledWith({
        //     "email": 'terrell@gmail.com',
        //     source: "Business Card"
        // })
        // eslint-disable-next-line testing-library/no-debugging-utils
        expect(screen.queryByText('Thank you for your submission!')).not.toBeInTheDocument()
        expect(screen.getByText('This is not a valid email address.')).toBeInTheDocument()

    });

    test('server error message', async () => {
        render(<BusinessCardSubmitEmailStory.render {...BusinessCardSubmitEmailStory.args}/>)

        jest
            .spyOn(leadClient, 'sendBusinessCardEmail')
            .mockImplementation(
                jest
                    .fn()
                    .mockReturnValue({
                        status: "400"
                    })
            )


        const theButton = screen.getByRole('button')
        expect(theButton).toBeDisabled()

        const theInput = screen.getByLabelText('Your Email Address.')

        fireEvent.change(theInput, {target: {value: 'terrell@gmail.com'}})
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await expect(theButton).toBeEnabled()
            fireEvent.click(theButton)
        })

        expect(leadClient.sendBusinessCardEmail).toHaveBeenCalledTimes(1)
        expect(leadClient.sendBusinessCardEmail).toHaveBeenCalledWith({
            "email": 'terrell@gmail.com',
            source: "storybook"
        })
        expect(screen.queryByText('Thank you for your submission!')).not.toBeInTheDocument()
        expect(screen.getByText('Please Try your submission again later or contact hello@thehandsomestnerd.com.')).toBeInTheDocument()
    });
})
