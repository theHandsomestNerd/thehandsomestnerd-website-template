// import ReactPDFF from "@react-pdf/renderer";
import * as logClient from "./logClient";
import * as cmsClient from "./cmsClient";
// import ResumeDocumentPDF from "the-handsomestnerd-internal";

export default async () => {
    let pageSlug = "home"
    try {

        logClient.log("server-side", "NOTICE",
            "Loading this page from sanity", pageSlug);
        const pageFromSanity: any = await cmsClient.fetchPage(pageSlug);

        logClient.log("server-side", "NOTICE",
            "Page from Sanity", pageFromSanity)
        return "";

        // return ReactPDF.renderToStream(<ResumeDocumentPDF homePage={pageFromSanity}/>);
    } catch (e:any){
        logClient.log("server-side", "ERROR",
            "Error loading pdf" + e);
        return ""
    }
};