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

const createNewHouse = async (aNewHouse: any) => {
    logger.log("createSanityNewHouse", "INFO", "creating new house ", aNewHouse);

    const newHouse: any = {
        ...aNewHouse,
    };

    logger.log("createSanityNewHouse", "INFO", "potential new house ", newHouse);

    return sanityClient.create({
        _type: "house",
        ...newHouse,
    }).catch((e:any)=>{
        logger.log("createSanityNewHouse", "ERROR", "creating new house ", {newHouse: newHouse, e});
        return Promise.reject(e.message);
    });
};

const createBall = async (ball: any) => {
    logger.log("createSanityBall", "INFO", "creating ball ", ball);

    const newBall: any = {
        ...ball,
    };

    logger.log("createSanityBall", "INFO", "potential ball ", newBall);

    return sanityClient.create({
        _type: "ball",
        ...newBall,
    }).then((ballCreated:any)=>{
        logger.log("createSanityBall", "NOTICE", " ball created ", {newBall: ballCreated});
        return Promise.resolve(ballCreated);
    }).catch((e:any)=>{
        logger.log("createSanityBall", "ERROR", "creating ball ", {newBall: newBall, e});
        return Promise.reject(e.message);
    });
};

export default {
    createColdLead,
    fetchPage,
    createContactUs,
    createNewHouse,
    createBall
};
