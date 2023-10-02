import React, {FunctionComponent, useContext} from 'react'
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import PageContext from "../../page-context/PageContext";
import {useParams} from 'react-router';
import LoadingPage from "./loading-page/LoadingPage";
import {Grid} from "@mui/material";
import FourOhFour from "../../transform-hw/pages/error-page/FourOhFour";
import UnderConstruction from "../../transform-hw/pages/under-construction-page/UnderConstruction";
import PageLayout from "./PageLayout";

interface IProps {
    homePage?: SanityTransformHwHomePage
    isLoading?: boolean
    isRefetching?: boolean
}

const PageMux: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)

    const urlParams = useParams()

    React.useEffect(() => {
        if (urlParams.pageSlug) {
            console.log("found a slug in the mux", urlParams)
            pageContext.fetchPage && pageContext.fetchPage(urlParams.pageSlug)
        }
    },[])

    const PageContents = () => {
        if (!pageContext.page || pageContext.isPageLoading)
            return <LoadingPage/>

        if (pageContext.page && !pageContext.page.isUnderConstruction) {
            return <PageLayout homePage={pageContext.page}></PageLayout>
        } else if (pageContext.page && pageContext.page.underConstructionPageRef) {
            return <UnderConstruction underConstructionPageRef={pageContext.page.underConstructionPageRef}
                                      email={pageContext.page?.email}/>
        }

        if (pageContext.isPageError) {
            return <FourOhFour/>
        }

        return <FourOhFour/>
    }


    return <PageContents />
}

export default PageMux