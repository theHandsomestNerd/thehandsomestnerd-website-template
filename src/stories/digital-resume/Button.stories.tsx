import type {Meta, StoryObj} from '@storybook/react';
import LoadingButton, {LoadingButtonIProps} from "../../components/loading-button/LoadingButton";
import {ButtonGroupMemberEnum} from "../../components/loading-button/ButtonGroupMemberEnum";
import {Grid, Typography} from "@mui/material";
import {PropsWithChildren} from "react";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import DigitalResumeThemeData from "../data/DigitalResumeThemeData";
import {ThemeProvider} from "@mui/material/styles";


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
const WrapComponent =   ({children}:{children:any}) =>      <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>{children}</ThemeProvider>
    const buttonText = <Typography variant='button' style={{fontFamily: "Raleway"}}>Button Text</Typography>
export const Primary: Story = {
    args: {
      color: "primary",
      isLoading: false,
      children:buttonText,
        width: 250,

    },
    render: ({color, isLoading, children, width}:PropsWithChildren<LoadingButtonIProps>) =>
        <WrapComponent><LoadingButton width={width} color={color} isLoading={isLoading}>{children}</LoadingButton></WrapComponent>,
};
export const PrimaryDisabled: Story = {
    args: {
        color: "primary",
        disabled: true,
        children: buttonText,
        width: 250,

    },
    render: ({color, isLoading, children, disabled, width}:PropsWithChildren<LoadingButtonIProps>) => <WrapComponent><LoadingButton width={width} color={color} isLoading={isLoading} disabled={disabled}>{children}</LoadingButton></WrapComponent>,
};
export const Secondary: Story = {
    args: {
        color: "secondary",
        children: buttonText,
        width: 250,
    },
    render: ({color, children,width}:PropsWithChildren<LoadingButtonIProps>) => <WrapComponent><LoadingButton color={color} width={width}>{children}</LoadingButton></WrapComponent>,
};


export const Loading: Story = {
    args: {
        color: "primary",
        isLoading: true,
        width: 250,
        children: buttonText
    },
    render: ({color,isLoading, children, width}:PropsWithChildren<LoadingButtonIProps>) => <WrapComponent><LoadingButton width={width} isLoading={isLoading} color={color}>{children}</LoadingButton></WrapComponent>,
};

export const SecondaryLoading: Story = {
    args: {
        color: "secondary",
        isLoading: true,
        width: 250,
        children: buttonText
    },
    render: ({color,isLoading, children, width}:PropsWithChildren<LoadingButtonIProps>) => <WrapComponent><LoadingButton width={width} isLoading={isLoading} color={color}>{children}</LoadingButton></WrapComponent>,

};

export const Grouped: Story = {
    render: () => <Grid container>
        <Grid item>
            <WrapComponent><LoadingButton width={250} color={"primary"} groupiness={ButtonGroupMemberEnum.LEFT} ><Typography variant='button' style={{fontFamily: "Raleway"}}>One</Typography></LoadingButton></WrapComponent>

        </Grid>
        <Grid item>
            <WrapComponent><LoadingButton width={250} groupiness={ButtonGroupMemberEnum.CENTER}
                                          color={"primary"} ><Typography variant='button' style={{fontFamily: "Raleway"}}>Two</Typography></LoadingButton></WrapComponent>
        </Grid>
        <Grid item>
            <WrapComponent><LoadingButton width={250} groupiness={ButtonGroupMemberEnum.CENTER}
                                          color={"primary"} ><Typography variant='button' style={{fontFamily: "Raleway"}}>Three</Typography></LoadingButton></WrapComponent>
        </Grid>
        <Grid item>
            <WrapComponent><LoadingButton width={250} groupiness={ButtonGroupMemberEnum.RIGHT} color={"primary"}
            ><Typography variant='button' style={{fontFamily: "Raleway"}}>Four</Typography></LoadingButton></WrapComponent></Grid>
        </Grid>,

};