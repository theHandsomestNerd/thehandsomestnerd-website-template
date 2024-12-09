import type {Meta, StoryObj} from '@storybook/react';
import AwBallsArrayData from "../data/AwBallsArrayData";
import AWThemeData from "../data/AWThemeData";
import Grid from "@mui/material/Grid2";
import BallDataTile from "../../components/templates/anybody-walking/ball-data-tiles/BallDataTile";

const meta: Meta<typeof BallDataTile> = {
    title: "AW/Components/BallDataTile",
    component: BallDataTile
    ,
};

export default meta;
type Story = StoryObj<typeof BallDataTile
>;


const onClickFunction = (ball)=>{alert(ball.slug.current + ' button clicked')}
export const BallDataTileResponsiveComplete: Story = {
    args: {
        ballData: AwBallsArrayData[0]
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({ballData}) =>
        <Grid container style={{width: "100%"}}>
            <Grid container size={{xs:12, sm:6, md:3}}>
                <BallDataTile ballData={ballData} isAgoOn onClick={onClickFunction}/>
            </Grid>
        </Grid>
};

export const BallDataTileResponsiveNoIsAgo: Story = {
    args: {
        ballData: AwBallsArrayData[0]
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({ballData}) =>
        <Grid container style={{width: "100%"}}>
            <Grid container size={{xs:12, sm:6, md:3}}>
                <BallDataTile ballData={ballData} onClick={()=>{alert('button clicked')}}/>
            </Grid>
        </Grid>
};

export const BallDataTileSize4Complete: Story = {
    args: {
        ballData: AwBallsArrayData[1]
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({ballData}) =>
        <Grid container style={{width:"30%"}}>
            <BallDataTile ballData={ballData} onClick={()=>{alert('button clicked')}} />
        </Grid>
};

export const BallDataTileSize2Complete: Story = {
    args: {
        ballData: AwBallsArrayData[2]
    },
    parameters: {
        pageTheme: AWThemeData
    },
    render: ({ballData}) =>
        <Grid container style={{ width:"50%"}}>
            <BallDataTile ballData={ballData}  onClick={()=>{alert('button clicked')}}/>
        </Grid>
};