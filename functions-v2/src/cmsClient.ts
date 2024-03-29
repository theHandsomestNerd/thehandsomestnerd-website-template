import {sanityClient} from "./sanityClient";
// import {SanityColdLead, SanityTransformHwHomePage} from "../../src/common/sanityIo/Types";
import groqQueries from "./groqQueries";
import * as logger from "firebase-functions/logger";

const createColdLead = async (coldLead: any) => {
  logger.log("createSanityColdLead", "DEBUG", "creating cold lead ", coldLead.email);

  const newColdLead: any = {
    ...coldLead,
  };

  logger.log("createSanityColdLead", "DEBUG", "potential cold lead ", newColdLead);

  return sanityClient.create({
    _type: "coldLead",
    ...newColdLead,
  }).catch((e:any)=>{
    logger.log("createSanityColdLead", "ERROR", "creating cold lead ", {newColdLead, e});
    return Promise.reject(e.message);
  });
};

const createContactUs = async (contactUs: any) => {
    logger.log("createSanityContactUs", "INFO", "creating contact Us ", contactUs);

    const newContactUs: any = {
        ...contactUs,
    };

    logger.log("createSanityContactUs", "INFO", "potential contact Us ", newContactUs);

    return sanityClient.create({
        _type: "ContactUs",
        ...newContactUs,
    }).catch((e:any)=>{
        logger.log("createSanityContactUs", "ERROR", "creating contact us ", {newContactUs: newContactUs, e});
        return Promise.reject(e.message);
    });
};

const fetchPage = async (pageSlug:string)=>{
  return sanityClient
      .fetch(
          `*[slug.current == $pageSlug]{
          ${groqQueries.HOMEPAGE}
       }`, {pageSlug})
      .then((data: any[]) => {
        logger.log("fetchPage", "NOTICE", "fetched page", {pageSlug, page: data[0]});
        return data[0];
      })
      .catch((e:Error)=>{
        console.error({pageSlug, message: e.message});
        Promise.reject(e.message);
      });
};


export default {createColdLead, fetchPage, createContactUs};
