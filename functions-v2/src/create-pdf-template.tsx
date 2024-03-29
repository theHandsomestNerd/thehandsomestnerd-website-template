import cmsClient from "./cmsClient";
// import ResumeDocumentPDF from "the-handsomestnerd-internal";
import * as logger from "firebase-functions/logger";
const ReactPDF = require('@react-pdf/renderer');

export default async () => {
    let pageSlug = "home"
    try {

        logger.log("server-side", "NOTICE",
            "Loading this page from sanity", pageSlug);
        const pageFromSanity: any = await cmsClient.fetchPage(pageSlug);

        logger.log("server-side", "NOTICE",
            "Page from Sanity", pageFromSanity)
        logger.log("server-side", "NOTICE",
            "reactpdf", ReactPDF.renderToStream)
return ""
//         return ReactPDF.renderToStream(<ResumeDocumentPDF homePage={pageFromSanity}/>);
    } catch (e:any){
        logger.log("server-side", "ERROR",
            "Error loading pdf" + e);
        return ""
    }
};