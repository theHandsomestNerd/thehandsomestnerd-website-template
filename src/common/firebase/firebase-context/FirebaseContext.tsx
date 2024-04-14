import React from 'react';
import {SanityBallType} from "../../../components/templates/anybody-walking/ballroomTypes";

export type FirebaseContextType = {
    initFirebase?: (apiKey?: string,
                    authDomain?: string,
                    databaseURL?: string,
                    projectId?: string,
                    storageBucket?: string,
                    messagingSenderId?: string,
                    appId?: string,
                    measurementId?: string) => void
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

const FirebaseContext = React.createContext<FirebaseContextType>({});

export default FirebaseContext;
