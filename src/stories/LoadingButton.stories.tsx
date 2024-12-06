import type {Meta, StoryObj} from '@storybook/react';
import Grid from "@mui/material/Grid2";
import LoadingButton from "../components/loading-button/LoadingButton";
import AWThemeData from "./data/AWThemeData";
import {ButtonGroupMemberEnum} from "../components/loading-button/ButtonGroupMemberEnum";
import {Typography} from "@mui/material";

const meta: Meta<typeof LoadingButton> = {
    title: "Component/LoadingButton",
    component: LoadingButton
    ,
};

export default meta;
type Story = StoryObj<typeof LoadingButton>;

const onClickFunction = async (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("button is clicked")
}
export const LoadingButtonPrimaryComplete: Story = {
    args: {
        disabled: false,
        isSlim: false,
        isRounded: true,
        clickHandler: onClickFunction,
        isLoading: false,
        groupiness: ButtonGroupMemberEnum.CENTER,
        width: undefined,
        href: "",
        source: "",
        color: "primary",
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({
                 disabled, isSlim, isRounded, clickHandler,
                 color, groupiness, width, href,
                 source, variant, isLoading
             }) =>
        <Grid container>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Text Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        width={width}
                        href={href}
                        source={source}
                        variant='text'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Contained Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        width={width}
                        href={href}
                        source={source}
                        variant='contained'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Outlined Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        width={width}
                        href={href}
                        source={source}
                        variant='outlined'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
        </Grid>
};
export const LoadingButtonPrimaryContainedGrouped: Story = {
    args: {
        disabled: false,
        isSlim: false,
        isRounded: true,
        clickHandler: onClickFunction,
        isLoading: false,
        width: undefined,
        href: "",
        source: "",
        color: "primary",
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({
                 disabled, isSlim, isRounded, clickHandler,
                 color, groupiness, width, href,
                 source, variant, isLoading
             }) =>
        <Grid container>

            <LoadingButton
                disabled={disabled}
                isLoading={isLoading}
                isSlim={isSlim}
                isRounded={isRounded}
                clickHandler={clickHandler}
                color={color}
                groupiness={ButtonGroupMemberEnum.LEFT}
                width={width}
                href={href}
                source={source}
                variant='contained'>Left Button</LoadingButton>
            <LoadingButton
                disabled={disabled}
                isLoading={isLoading}
                isSlim={isSlim}
                isRounded={isRounded}
                clickHandler={clickHandler}
                color={color}
                groupiness={ButtonGroupMemberEnum.CENTER}
                width={width}
                href={href}
                source={source}
                variant='contained'>Center Button</LoadingButton>
            <LoadingButton
                disabled={disabled}
                isLoading={isLoading}
                isSlim={isSlim}
                isRounded={isRounded}
                clickHandler={clickHandler}
                color={color}
                groupiness={ButtonGroupMemberEnum.RIGHT}
                width={width}
                href={href}
                source={source}
                variant='contained'>Right Button</LoadingButton>
        </Grid>
};

export const LoadingButtonSecondaryComplete: Story = {
    args: {
        disabled: false,
        isSlim: false,
        isRounded: true,
        clickHandler: onClickFunction,
        isLoading: false,
        groupiness: ButtonGroupMemberEnum.CENTER,
        href: "",
        source: "",
        color: "secondary",
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({
                 disabled, isSlim, isRounded, clickHandler,
                 color, groupiness, href, source,
                 isLoading
             }) =>
        <Grid container>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Text Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        href={href}
                        source={source}
                        variant='text'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Contained Button</Typography>
                </Grid>
                <Grid><LoadingButton
                    disabled={disabled}
                    isLoading={isLoading}
                    isSlim={isSlim}
                    isRounded={isRounded}
                    clickHandler={clickHandler}
                    color={color}
                    groupiness={groupiness}
                    href={href}
                    source={source}
                    variant='contained'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Outlined Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        href={href}
                        source={source}
                        variant='outlined'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
        </Grid>
};

export const LoadingButtonSecondaryContainedGrouped: Story = {
    args: {
        disabled: false,
        isSlim: false,
        isRounded: true,
        clickHandler: onClickFunction,
        isLoading: false,
        width: undefined,
        href: "",
        source: "",
        color: "secondary",
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({
                 disabled, isSlim, isRounded, clickHandler,
                 color, groupiness, width, href,
                 source, variant, isLoading
             }) =>
        <Grid container>

            <LoadingButton
                disabled={disabled}
                isLoading={isLoading}
                isSlim={isSlim}
                isRounded={isRounded}
                clickHandler={clickHandler}
                color={color}
                groupiness={ButtonGroupMemberEnum.LEFT}
                width={width}
                href={href}
                source={source}
                variant='contained'>Left Button</LoadingButton>
            <LoadingButton
                disabled={disabled}
                isLoading={isLoading}
                isSlim={isSlim}
                isRounded={isRounded}
                clickHandler={clickHandler}
                color={color}
                groupiness={ButtonGroupMemberEnum.CENTER}
                width={width}
                href={href}
                source={source}
                variant='contained'>Center Button</LoadingButton>
            <LoadingButton
                disabled={disabled}
                isLoading={isLoading}
                isSlim={isSlim}
                isRounded={isRounded}
                clickHandler={clickHandler}
                color={color}
                groupiness={ButtonGroupMemberEnum.RIGHT}
                width={width}
                href={href}
                source={source}
                variant='contained'>Right Button</LoadingButton>
        </Grid>
};

export const LoadingButtonPrimaryLoading: Story = {
    args: {
        disabled: false,
        isSlim: false,
        isRounded: true,
        clickHandler: onClickFunction,
        isLoading: true,
        groupiness: ButtonGroupMemberEnum.CENTER,
        href: "",
        source: "",
        color: "primary",
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({
                 disabled, isSlim, isRounded, clickHandler,
                 color, groupiness, href,
                 source, variant, isLoading
             }) =>
        <Grid container>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Text Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        href={href}
                        source={source}
                        variant='text'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Contained Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        href={href}
                        source={source}
                        variant='contained'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Outlined Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        href={href}
                        source={source}
                        variant='outlined'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
        </Grid>
};


export const LoadingButtonSecondaryLoading: Story = {
    args: {
        disabled: false,
        isSlim: false,
        isRounded: true,
        clickHandler: onClickFunction,
        isLoading: true,
        groupiness: ButtonGroupMemberEnum.CENTER,
        width: undefined,
        href: "",
        source: "",
        color: "secondary",
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({
                 disabled, isSlim, isRounded, clickHandler,
                 color, groupiness, width, href,
                 source, variant, isLoading
             }) =>
        <Grid container>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Text Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        href={href}
                        source={source}
                        variant='text'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Contained Button</Typography>
                </Grid>
                <Grid><LoadingButton
                    disabled={disabled}
                    isLoading={isLoading}
                    isSlim={isSlim}
                    isRounded={isRounded}
                    clickHandler={clickHandler}
                    color={color}
                    groupiness={groupiness}
                    href={href}
                    source={source}
                    variant='contained'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
            <Grid container size={{xs: 12}} direction="column">
                <Grid>
                    <Typography color='primary'>Outlined Button</Typography>
                </Grid>
                <Grid>
                    <LoadingButton
                        disabled={disabled}
                        isLoading={isLoading}
                        isSlim={isSlim}
                        isRounded={isRounded}
                        clickHandler={clickHandler}
                        color={color}
                        groupiness={groupiness}
                        href={href}
                        source={source}
                        variant='outlined'>Loading Button</LoadingButton>
                </Grid>
            </Grid>
        </Grid>
};