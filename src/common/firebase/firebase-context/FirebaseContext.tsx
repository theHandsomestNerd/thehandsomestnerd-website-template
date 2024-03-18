import React from 'react';

export type FirebaseContextType = {
    initFirebase?: (apiKey?: string,
                    authDomain?: string,
                    databaseURL?: string,
                    projectId?: string,
                    storageBucket?: string,
                    messagingSenderId?: string,
                    appId?: string,
                    measurementId?: string)=>void
    analytics?: any
    analyticsPageView?: any,
    ctaClick?: any,
    reportVital?: any,
    setAppUserId?: any,
    amenityTooltipShown?: any,
    qrCodeShown?: any,
    albumImageClick?: any,
    utmCodes?: any
};

const FirebaseContext = React.createContext<FirebaseContextType>({});

export default FirebaseContext;
