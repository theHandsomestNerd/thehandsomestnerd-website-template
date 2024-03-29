import type {Meta, StoryObj} from '@storybook/react';
import{PropsWithChildren} from "react";
import SubmitEmail, {SubmitEmailIProps} from "../../components/templates/transform-hw/pages/BusinessCardSubmitEmail";


const meta: Meta<typeof SubmitEmail> = {
    title: "Resume/Page Components/Submit Email",
    component: SubmitEmail,
};

export default meta;
type Story = StoryObj<typeof SubmitEmail>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const SubmitEmailStory: Story = {
    args: {
        emailButtonText: 'Submit',
        emailFieldText: "Your Email Address.",
        subscribeText: "Want a copy of my resume emailed to you?"
    },
    render: ({emailFieldText, emailButtonText, subscribeText}: PropsWithChildren<SubmitEmailIProps>) =>
        <SubmitEmail source={'storybook'} emailFieldText={emailFieldText}
                                 emailButtonText={emailButtonText}
                                 subscribeText={subscribeText}/>,
};