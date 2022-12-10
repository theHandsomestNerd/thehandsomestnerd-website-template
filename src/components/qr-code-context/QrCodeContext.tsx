import React from 'react';
import {ServiceAmenityType} from "../BlockContentTypes";

export type QrCodeContextType = {
    init?: (qr_code_value:string)=>any
    qr_code_value?: string
    openSnackbar?: (selectedContacts: any[]) => any
};

const QrCodeContext = React.createContext<QrCodeContextType>({});

export default QrCodeContext;
