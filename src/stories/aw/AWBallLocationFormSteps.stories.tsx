import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import getThemeFromSanity from "../../components/customized-theme-provider/getThemeFromSanity";
import AWThemeData from "../data/AWThemeData";
import AWBallSearchSection from "../../components/templates/anybody-walking/AWBallSearchSection";
import AWBallsPageData from "../data/AWBallsPageData";
import BallSearchProvider from "../../components/templates/anybody-walking/ball-search-context/BallSearchProvider";
import AwBallsArrayData from "../data/AwBallsArrayData";
import BallSearchBox from "../../components/templates/anybody-walking/ball-search-box/BallSearchBox";
import FiltersMenu from "../../components/templates/cocktail-flash-cards/FiltersMenu";
import SearchFilterDropDown
    from "../../components/templates/anybody-walking/search-filter-dropdown/SearchFilterDropDown";
import ViewChange from "../../components/templates/anybody-walking/view-change/ViewChange";
import BallFormSteps from "../../components/templates/anybody-walking/ball-form-steps/BallFormSteps";
import BallSource from "../../components/templates/anybody-walking/ball-form-steps/BallSource";
import BasicBallInfo from "../../components/templates/anybody-walking/ball-form-steps/BasicBallInfo";
import {BallSourceState} from "../../components/templates/anybody-walking/ballroomTypes";
import AwSingleBallData from "../data/AwSingleBallData";
import BallTypeEnum from "../../components/templates/anybody-walking/enums/BallType.enum";
import BallDetail from "../../components/templates/anybody-walking/ball-form-steps/BallDetail";
import BallDate from "../../components/templates/anybody-walking/ball-form-steps/BallDate";
import AddBallCategories
    from "../../components/templates/anybody-walking/ball-form-steps/AddCategories/AddBallCategories";
import AddBallFlyer from "../../components/templates/anybody-walking/ball-form-steps/AddBallFlyer";
import BallLocation from "../../components/templates/anybody-walking/ball-form-steps/BallLocation";

const meta: Meta<typeof BallLocation> = {
    title: "Anybody Walking/Steps/Ball Location",
    component: BallLocation,
};

export default meta;
type Story = StoryObj<typeof BallLocation>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const AWBallLocationComplete: Story = {
    args: {

    },
    render: ({}) =>
        <BallSearchProvider balls={AwBallsArrayData}>
            <ThemeProvider
                theme={getThemeFromSanity(AWThemeData)}>
                <BallLocation stepComplete={()=>{}} newBallToAdd={{ballType: BallTypeEnum.BALL, }}/>
            </ThemeProvider>
        </BallSearchProvider>
};