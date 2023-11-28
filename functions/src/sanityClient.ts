// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require("@sanity/client");
export const sanityClient = client({
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DB,
  apiVersion: process.env.SANITY_APIVERSION,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
export default sanityClient;
