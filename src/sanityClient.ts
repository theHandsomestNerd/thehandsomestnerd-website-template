import sanityClient from "@sanity/client";

// console.log("NODE.ENV", process.env)

export default sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECTID,
    dataset: process.env.REACT_APP_SANITY_DB,
    apiVersion: process.env.REACT_APP_SANITY_APIVERSION,
    useCdn: true,
});