import type {Meta, StoryObj} from '@storybook/react';
import LoadingButton, {LoadingButtonIProps} from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import {Grid} from "@material-ui/core";
import {PropsWithChildren} from "react";


const meta: Meta<typeof LoadingButton> = {
    title:"Resume/Components/Loading Button",
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
    args: {
      color: "primary",
      isLoading: false,
      children:buttonText
    },
    render: ({color, isLoading, children}:PropsWithChildren<LoadingButtonIProps>) => <LoadingButton color={color} isLoading={isLoading}>{children}</LoadingButton>,
};
export const PrimaryDisabled: Story = {
    args: {
        color: "primary",
        disabled: false,
        children: buttonText
    },
    render: ({color, isLoading, children, disabled}:PropsWithChildren<LoadingButtonIProps>) => <LoadingButton color={color} isLoading={isLoading} disabled={disabled}>{children}</LoadingButton>,
};
export const Secondary: Story = {
    args: {
        color: "secondary",
        children: buttonText
    },
    render: ({color, children}:PropsWithChildren<LoadingButtonIProps>) => <LoadingButton color={color}>{children}</LoadingButton>,
};


export const Loading: Story = {
    args: {
        color: "primary",
        isLoading: true,
        width: 250,
        children: buttonText
    },
    render: ({color,isLoading, children, width}:PropsWithChildren<LoadingButtonIProps>) => <LoadingButton width={width} isLoading={isLoading} color={color}>{children}</LoadingButton>,
};

export const SecondaryLoading: Story = {
    args: {
        color: "secondary",
        isLoading: true,
        width: 250,
        children: buttonText
    },
    render: ({color,isLoading, children, width}:PropsWithChildren<LoadingButtonIProps>) => <LoadingButton width={width} isLoading={isLoading} color={color}>{children}</LoadingButton>,

};

export const Grouped: Story = {
    render: () => <Grid container>
        <Grid item>
            <LoadingButton width={250} color={"primary"} groupiness={ButtonGroupMemberEnum.LEFT} >One</LoadingButton>

        </Grid>
        <Grid item>
            <LoadingButton width={250} groupiness={ButtonGroupMemberEnum.CENTER}
                           color={"primary"} >Two</LoadingButton>
        </Grid>
        <Grid item>
            <LoadingButton width={250} groupiness={ButtonGroupMemberEnum.CENTER}
                           color={"primary"} >Three</LoadingButton>
        </Grid>
        <Grid item>
            <LoadingButton width={250} groupiness={ButtonGroupMemberEnum.RIGHT} color={"primary"}
            >Four</LoadingButton></Grid>
        </Grid>,

};