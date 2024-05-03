import {FunctionComponent, PropsWithChildren, useEffect, useMemo, useState,} from 'react';
import FirebaseContext from './FirebaseContext';
import {v4 as uuidv4} from 'uuid'
import {FirebaseOptions, initializeApp} from "firebase/app";
import {getAnalytics, isSupported, logEvent, setUserId, setUserProperties} from "firebase/analytics";
import {SanityBallType} from "../../../components/templates/anybody-walking/ballroomTypes";
// import firebase from "firebase/compat";
// import Analytics = firebase.analytics.Analytics;

const analyticsMock = {
    logEvent: () => {
    },
    setCurrentScreen: () => {
    },
    setUserId: () => {
    },
}
type IProps = {
    initFirebase?: (apiKey?: string,
                    authDomain?: string,
                    databaseURL?: string,
                    projectId?: string,
                    storageBucket?: string,
                    messagingSenderId?: string,
                    appId?: string,
                    measurementId?: string)=>void
    analyticsPageView?: (pathname: string, search: string, title: string) => void,
    ctaClick?: (location: string, ctaText: string, userId?: string,) => void,
    reportVital?: (vitalName: string, vitalMetric: string) => void,
    setAppUserId?: (userId: string) => void,
    amenityTooltipShown?: (serviceName: string, amenityName: string, analyticsId: string) => void,
    qrCodeShown?: (qrCodeValue: string, analyticsId: string) => void,
    albumImageClick?: (imageName: string, imageCaption: string, analyticsId: string) => void,
    utmCodes?: (source: string, medium: string, campaign: string, id: string) => void,
    analyticsViewBall?: (ball: SanityBallType) => void
};

const FirebaseProvider: FunctionComponent<IProps & PropsWithChildren> = (
    props: PropsWithChildren<IProps>,
) => {
    const [app, setApp] = useState<any>()
    const [analytics, setAnalytics] = useState<any>()
    const [firebaseConfig, setFirebaseConfig] = useState<FirebaseOptions | undefined>()

    useEffect(() => {
        if (firebaseConfig) {
            // console.log("firebaseconfig", firebaseConfig)
            setApp(initializeApp(firebaseConfig))
        }
    }, [firebaseConfig])

    useEffect(() => {
        isSupported().then((result) => {
            if (result && app) {
                // console.log("Using really analytics", app)
                const theAnalytics = getAnalytics(app)
                setAnalytics(theAnalytics)
            } else {
                // console.log("Using mocked analytics", app)
                setAnalytics(analyticsMock)
            }
        })
    }, [app])

    const initFirebase = (apiKey?: string,
                          authDomain?: string,
                          databaseURL?: string,
                          projectId?: string,
                          storageBucket?: string,
                          messagingSenderId?: string,
                          appId?: string,
                          measurementId?: string) => {

        setFirebaseConfig({
            apiKey: apiKey,
            authDomain: authDomain,
            databaseURL: databaseURL,
            projectId: projectId,
            storageBucket: storageBucket,
            messagingSenderId: messagingSenderId,
            appId: appId,
            measurementId: measurementId,
        });
    }

    const analyticsPageView = (pathname: string, search: string, title: string) => {
        if (analytics) {
            try{

            logEvent(analytics, 'page_view', {
                page_path: pathname + search,
                page_title: title,
            });
            } catch (e){
                console.error('error with page view event', e);
            }
        } else {
            // console.error('This better be an automated test');
        }
    };

    const utils = {
        logEventWithData: (eventName: string, data: any) => {
            // console.log("Logging GA event", eventName, data)
            if (analytics) {

                logEvent(analytics, eventName, data);
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
        if (analytics) {
            setUserId(analytics, userId);
            setUserProperties(analytics, {isBlackCardValid: false});

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

    const albumImageClick = (imageName: string, imageCaption: string, analyticsId: string) => {
        utils.logEventWithData('album_image_clicked', {
            analyticsId,
            imageName,
            imageCaption
        });
    }
    const utmCodes = (source: string, medium: string, campaign: string, id: string) => {
        utils.logEventWithData('utm_codes_received', {
            source,
            medium,
            campaign,
            id
        });
    }

    const analyticsViewBall = (ball: SanityBallType) => {
        console.log('GA ballView ', ball)

        utils.logEventWithData('ball_view', {
            ...ball,
        })
    }

    const newValue = useMemo(
        () => ({
            initFirebase,
            analyticsPageView,
            ctaClick,
            reportVital,
            setAppUserId,
            amenityTooltipShown,
            qrCodeShown,
            albumImageClick,
            utmCodes,
            analyticsViewBall
        }),
        [
            firebaseConfig, app, analytics
        ]
    );

    return (
        <FirebaseContext.Provider value={newValue}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseProvider;
