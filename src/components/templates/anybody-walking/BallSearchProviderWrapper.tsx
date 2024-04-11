import {FunctionComponent, PropsWithChildren} from "react";
import {SanityBallType} from "./ballroomTypes";
import BallSearchProvider from "./ball-search-context/BallSearchProvider";
import {Typography} from "@mui/material";

const BallSearchProviderWrapper: FunctionComponent<PropsWithChildren<{
    results?: SanityBallType[]
}>> = (props: any) => {
    return props.results ? <BallSearchProvider balls={props.results}>
            <Typography variant='h1' color='textSecondary'>WRAPPED</Typography>
            {props.children}
        </BallSearchProvider> :
        <BallSearchProvider><Typography variant='h1' color='textSecondary'>UNWRAPPED</Typography>{props.children}
        </BallSearchProvider>
}

export default BallSearchProviderWrapper