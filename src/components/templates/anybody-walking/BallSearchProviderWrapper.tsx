import {FunctionComponent, PropsWithChildren} from "react";
import {SanityBallType} from "./ballroomTypes";
import BallSearchProvider from "./ball-search-context/BallSearchProvider";

const BallSearchProviderWrapper: FunctionComponent<PropsWithChildren<{
    results?: SanityBallType[]
}>> = (props: any) => {
    return props.results ? <BallSearchProvider balls={props.results}>
            {props.children}
        </BallSearchProvider> :
        <BallSearchProvider>{props.children}
        </BallSearchProvider>
}

export default BallSearchProviderWrapper