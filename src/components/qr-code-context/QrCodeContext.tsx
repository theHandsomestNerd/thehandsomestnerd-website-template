import React from 'react';
import {ServiceAmenityType} from "../BlockContentTypes";

export type QrCodeContextType = {
    init?: (slug:string)=>any
    qr_code_value?: string
    openSnackbar?: (qr_code_value:string, selectedContacts: any[]) => any
};

const QrCodeContext = React.createContext<QrCodeContextType>({});

export default QrCodeContext;
