// need other events?
// https://developers.google.com/gtagjs/reference/event
import {logEvent, setUserId, setUserProperties,} from 'firebase/analytics';
import FirebaseClient from './FirebaseClient';
import {v4 as uuidv4} from 'uuid'

const analyticsPageView = (pathname: string, search: string, title: string) => {
    if (FirebaseClient.analytics) {
        logEvent(FirebaseClient.analytics, 'page_view', {
            page_path: pathname + search,
            page_title: title,
        });
    } else {
        // console.error('This better be an automated test');
    }
};

const utils = {
    logEventWithData: (eventName: string, data: any) => {
        // console.log("Logging GA event", eventName, data)
        if(FirebaseClient.analytics){

        logEvent(FirebaseClient.analytics, eventName, data);
        }
    },
};

const ctaClick = (location: string, ctaText: string, userId?: string,) => {
    console.log(" Bout to analytic", location, ctaText, userId)
    utils.logEventWithData('cta_click', {
        userId: userId ?? uuidv4(),
        location,
        ctaText
    });
}

const setAppUserId = (userId: string) => {
    if(FirebaseClient.analytics){
    setUserId(FirebaseClient.analytics, userId);
    setUserProperties(FirebaseClient.analytics, {isBlackCardValid: false});

    }
};

const reportVital = (vitalName: string, vitalMetric: string) => {
    utils.logEventWithData('web_vital_report', {
        name: vitalName,
        metric: vitalMetric,
    });
};

const amenityTooltipShown = (serviceName: string, amenityName: string, analyticsId: string) => {
    utils.logEventWithData('amenityTooltipShown', {
        analyticsId,
        serviceName,
        amenityName
    });
}

const qrCodeShown = (qrCodeValue: string, analyticsId: string) => {
    utils.logEventWithData('qrCodeShown', {
        analyticsId,
        qrCodeValue,
    });
}

export default {
    analyticsPageView,
    ctaClick,
    reportVital,
    setAppUserId,
    amenityTooltipShown,
    qrCodeShown
};
