/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {initializeApp} from 'firebase/app';
import express from "express";
import fs from "fs";
import path from "path";
import cmsClient from "./cmsClient";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanityClient";
import createTemplate from "./create-pdf-template";
import cors from "cors";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const app = express();

const corsOptionsDelegate = (req: any, callback: any) => {
    logger.log("CORS", "NOTICE", "checking allowlist", {origin: req.header("Origin")});
    // let corsOptions;
    // if (allowlist.indexOf(req.header("Origin")) !== -1) {
    //   logClient.log("CORS", LogLevels.NOTICE, "origin in allowlist", {origin: req.header("Origin"), allowlist});
    //   corsOptions = {origin: allowlist}; // reflect (enable) the requested origin in the CORS response
    // } else {
    //   logClient.log("CORS", LogLevels.NOTICE, "origin NOT in allowlist", {origin: req.header("Origin"), allowlist});
    //   corsOptions = {origin: false}; // disable CORS for this request
    // }
    const corsOptions = {origin: true};

    callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));

const builder = imageUrlBuilder(sanityClient);

initializeApp({
    // credential: admin.credential.cert(serviceAccount),
});

app.get("/*", (req, res) => {
    logger.log("server-side", "NOTICE",
        "Hello from the Server Siiiiiide", req.params);

    logger.log("server-side", "NOTICE",
        "index path", indexPath);

    serveIndexFile(req, res);
});

app.get("/", (req, res) => {
    logger.log("server-side", "NOTICE",
        "Serving Index instead of hosting", req.params);

    serveIndexFile(req, res);
});

app.get("/index.html", (req, res) => {
    logger.log("server-side", "NOTICE",
        "Serving Index instead of hosting", req.params);

    serveIndexFile(req, res);
});

// console.log(__dirname + " " + "../../../../" + "build");

const devIndexPath: string[] = [];
const prodIndexPath: string[] = [];
const indexPathParts = process.env.SANITY_DB === "production" ? prodIndexPath : devIndexPath;
const files = fs.readdirSync(path.resolve(__dirname, ...indexPathParts));

const indexPath = path.resolve(__dirname, ...indexPathParts, "./index.html");

console.log(path.resolve(__dirname, ...indexPathParts), files);


const serveIndexFile = (req: any, res: any) => {
    fs.readFile(indexPath, "utf8", async (err, htmlData) => {
        if (err) {
            console.error("Error during file reading", err);
            return res.status(404).end();
        }

        const params: any = req.params;
        let pageSlug = "home"
        try {
            const tokenizedParams = params["0"].split("/");

            pageSlug = tokenizedParams[tokenizedParams.length - 1];

            if (!pageSlug || pageSlug === undefined || pageSlug === "undefined" || tokenizedParams === undefined || params["0"] === "undefined" || params["0"] === undefined || tokenizedParams.length === 0 || tokenizedParams[tokenizedParams.length - 1] === "undefined" || tokenizedParams[tokenizedParams.length - 1] === undefined) {
                pageSlug = "home";
            }

            logger.log("server-side", "NOTICE",
                "Loading this page from sanity", pageSlug);
            const pageFromSanity: any = await cmsClient.fetchPage(pageSlug);

            logger.log("server-side", "NOTICE",
                "Page from Sanity", pageFromSanity)
            // console.log("IMAGE URL", pageFromSanity.metaImage && urlFor(pageFromSanity.metaImage).url()?.replace("undefined", process.env.SANITY_DB ?? "development"));
            const page = {
                ogTitle: pageFromSanity?.title,
                description: pageFromSanity?.description,
                ogDescription: pageFromSanity?.description,
                ogUrl: pageFromSanity?.website,
                ogImage: pageFromSanity?.metaImage && builder.image(pageFromSanity.metaImage).url()?.replace("undefined", process.env.SANITY_DB ?? "development"),
            };

            logger.log("server-side", "NOTICE",
                "MetaTag Data", page);

            htmlData = htmlData.replace(
                "<title>React App</title>",
                `<title>${page.ogTitle ?? ""}</title>`)
                .replace("__META_OG_URL__", page.ogTitle ?? "")
                .replace("__META_OG_TITLE__", page.ogTitle ?? "")
                .replace("__META_OG_TITLE__", page.ogTitle ?? "")
                .replace("__META_OG_TITLE__", page.ogTitle ?? "")
                .replace("__META_DESCRIPTION__", page.description ?? "")
                .replace("__META_DESCRIPTION__", page.ogDescription ?? "")
                .replace("__META_DESCRIPTION__", page.ogDescription ?? "")
                .replace("__META_DESCRIPTION__", page.ogDescription ?? "")
                .replace("__META_OG_IMAGE__", page.ogImage ?? "")
                .replace("__META_OG_IMAGE__", page.ogImage ?? "")
                .replace("__META_OG_IMAGE__", page.ogImage ?? "");

            logger.log("server-side", "NOTICE",
                "fetched and modified page ",htmlData)

            return res.send(htmlData);
            // res.render('index', {
            // @ts-ignore
            // headTags: ReactDOMServer.renderToStaticMarkup(htmlData),
            // })
        } catch (e: any) {
            logger.log("server-side", "ERROR",
                "Error Fetching Page", {pageSlug, error: e.message});
            return res.send({status: "404", message: e.message});
        }
    });
};

app.post("/get-resume-pdf", async (req, res) => {
    // Calling the template render func with dynamic data
    const result:any = await createTemplate();

    // Setting up the response headers
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=export.pdf`);

    // Streaming our resulting pdf back to the user
    if (typeof result !== "string" && result.length !== 0) {

        result.pipe(res);
    }else {

    res.send("error")
    }
})


exports.app = onRequest({cors:false}, app);
