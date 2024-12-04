import type {Meta, StoryObj} from '@storybook/react';
import AwBallsArrayData from "../data/AwBallsArrayData";
import AWThemeData from "../data/AWThemeData";
import Grid from "@mui/material/Grid2";
import BallDataTiles from "../../components/templates/anybody-walking/ball-data-tiles/BallDataTiles";

const meta: Meta<typeof BallDataTiles> = {
    title: "AW/Component/BallDataTiles",
    component: BallDataTiles,
};

export default meta;
type Story = StoryObj<typeof BallDataTiles>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const BallDataTilesResponsiveComplete: Story = {
    args: {
        tiles: AwBallsArrayData,
        isAgoOn: false,
        tileClickAnalytics: (tileSlug) => {
            console.log("logAnalytics for tile slug: " + tileSlug);
        }
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({tiles, columnSize, isAgoOn, tileClickAnalytics}) =>
        <Grid container>
            <BallDataTiles
                tiles={tiles}
                columnSize={columnSize}
                isAgoOn={isAgoOn}
                tileClickAnalytics={tileClickAnalytics}/>
        </Grid>
};

export const BallDataTiles3ColsComplete: Story = {
    args: {
        tiles: AwBallsArrayData,
        columnSize: 3,
        isAgoOn: false,
        tileClickAnalytics: (tileSlug) => {
            console.log("logAnalytics for tile slug: " + tileSlug);
        }
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({tiles, columnSize, isAgoOn, tileClickAnalytics}) =>
        <Grid container>
            <BallDataTiles
                tiles={tiles}
                columnSize={columnSize}
                isAgoOn={isAgoOn}
                tileClickAnalytics={tileClickAnalytics}/>
        </Grid>
};

export const BallDataTiles4ColsComplete: Story = {
    args: {
        tiles: AwBallsArrayData,
        columnSize: 4,
        isAgoOn: false,
        tileClickAnalytics: (tileSlug) => {
            console.log("logAnalytics for tile slug: " + tileSlug);
        }
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({tiles, columnSize, isAgoOn, tileClickAnalytics}) =>
        <Grid container>
            <BallDataTiles
                tiles={tiles}
                columnSize={columnSize}
                isAgoOn={isAgoOn}
                tileClickAnalytics={tileClickAnalytics}/>
        </Grid>
};

export const BallDataTiles6ColsComplete: Story = {
    args: {
        tiles: AwBallsArrayData,
        columnSize: 6,
        isAgoOn: false,
        tileClickAnalytics: (tileSlug) => {
            console.log("logAnalytics for tile slug: " + tileSlug);
        }
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({tiles, columnSize, isAgoOn, tileClickAnalytics}) =>
        <Grid container>
            <BallDataTiles
                tiles={tiles}
                columnSize={columnSize}
                isAgoOn={isAgoOn}
                tileClickAnalytics={tileClickAnalytics}/>
        </Grid>
};

export const BallDataTiles12ColsComplete: Story = {
    args: {
        tiles: AwBallsArrayData,
        columnSize: 12,
        isAgoOn: false,
        tileClickAnalytics: (tileSlug) => {
            console.log("logAnalytics for tile slug: " + tileSlug);
        }
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({tiles, columnSize, isAgoOn, tileClickAnalytics}) =>
        <Grid container>
            <BallDataTiles
                tiles={tiles}
                columnSize={columnSize}
                isAgoOn={isAgoOn}
                tileClickAnalytics={tileClickAnalytics}/>
        </Grid>
};