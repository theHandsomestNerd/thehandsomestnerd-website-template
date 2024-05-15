import createClient from '@sanity/client'

const { defineString } = require('firebase-functions/params');
require('dotenv').config()

export const sanityClient:any = createClient({
  projectId: defineString('SANITY_PROJECTID').value(),
  dataset: defineString('SANITY_DB').value(),
  apiVersion: defineString('SANITY_APIVERSION').value(),
  token: defineString('SANITY_API_TOKEN').value(),
  useCdn: false,
});
export default sanityClient;
