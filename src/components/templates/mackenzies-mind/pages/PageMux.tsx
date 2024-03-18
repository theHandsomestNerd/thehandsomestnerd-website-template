import React, {FunctionComponent, useContext} from 'react'
import {SanityTransformHwHomePage} from "../../../../common/sanityIo/Types";
import PageContext from "../../../page-context/PageContext";
import {useParams} from 'react-router';
import LoadingPage from "./loading-page/LoadingPage";
import FourOhFour from "../../transform-hw/pages/error-page/FourOhFour";
import UnderConstruction from "../../transform-hw/pages/under-construction-page/UnderConstruction";
import PageLayout from "./PageLayout";

interface IProps {
    homePage?: SanityTransformHwHomePage
    isLoading?: boolean
    isRefetching?: boolean
    baseRoute?: string
}

const PageMux: FunctionComponent<IProps> = (props:IProps) => {
    const pageContext = useContext(PageContext)

    const urlParams = useParams()

    React.useEffect(() => {
        if(urlParams.documentSlug && urlParams.documentType) {
            // console.log("Page Mux reading URL Params", urlParams)

            pageContext.fetchDocument && pageContext.fetchDocument(urlParams.documentType, urlParams.documentSlug)
        }
        if (urlParams.pageSlug) {
            // console.log("found a slug in the mux", urlParams)
            pageContext.fetchPage && pageContext.fetchPage(urlParams.pageSlug)
        }
    }, [])

    React.useEffect(() => {
        if(props.baseRoute && pageContext.updateBaseRoute)
            pageContext.updateBaseRoute(props.baseRoute)
        }, [props.baseRoute])

    const PageContents = () => {
        if (!pageContext.page || pageContext.isPageLoading || !pageContext.page.theme)
            return <LoadingPage/>

        if (pageContext.page && !pageContext.page.isUnderConstruction) {
            return <PageLayout homePage={pageContext.page}></PageLayout>
        } else if (pageContext.page && pageContext.page.underConstructionPageRef) {
            return <UnderConstruction underConstructionPageRef={pageContext.page.underConstructionPageRef}
                                      email={pageContext.page?.businessContact?.email}/>
        }

        if (pageContext.isPageError) {
            return <FourOhFour/>
        }

        return <FourOhFour/>
    }


    return <PageContents/>
}

export default PageMux