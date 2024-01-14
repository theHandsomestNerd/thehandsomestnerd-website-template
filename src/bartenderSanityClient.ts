import sanityClient from "@sanity/client";

// console.log("NODE.ENV", process.env)

export default sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECTID_COCKTAILS,
    dataset: process.env.REACT_APP_SANITY_DB_COCKTAILS,
    apiVersion: process.env.REACT_APP_SANITY_APIVERSION_COCKTAILS,
    useCdn: true,
});