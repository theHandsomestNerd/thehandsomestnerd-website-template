import type {Meta, StoryObj} from '@storybook/react';
import LoadingButton from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import {Grid} from "@material-ui/core";


const meta: Meta<typeof LoadingButton> = {
    title:"Resume/Components/Button",
    component: LoadingButton,
};

export default meta;
type Story = StoryObj<typeof LoadingButton>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const buttonText = "Button Text"
export const Primary: Story = {
    render: () => <LoadingButton color={"primary"} isLoading={false}>{buttonText}</LoadingButton>,
};
export const PrimaryDisabled: Story = {
    render: () => <LoadingButton color={"primary"} disabled={true}>{buttonText}</LoadingButton>,
};
export const Secondary: Story = {
    render: () => <LoadingButton color={"secondary"} isLoading={false}>{buttonText}</LoadingButton>,
};


export const Loading: Story = {
    render: () => <LoadingButton color={"primary"} isLoading={true}>{buttonText}</LoadingButton>,
};

export const SecondaryLoading: Story = {
    render: () => <LoadingButton color={"secondary"} isLoading={true}>{buttonText}</LoadingButton>,
};

export const Grouped: Story = {
    render: () => <Grid container>
        <LoadingButton width={250} color={"primary"} groupiness={ButtonGroupMemberEnum.LEFT} >One</LoadingButton>
        <LoadingButton width={250} groupiness={ButtonGroupMemberEnum.CENTER}
            color={"primary"} >Two</LoadingButton>
        <LoadingButton width={250} groupiness={ButtonGroupMemberEnum.RIGHT} color={"primary"}
                       >Three</LoadingButton></Grid>,
};