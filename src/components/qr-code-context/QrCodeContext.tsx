import React from 'react';

export type QrCodeContextType = {
    qr_code_value?: string
    openSnackbar?: (url: string) => any
};

const QrCodeContext = React.createContext<QrCodeContextType>({});

export default QrCodeContext;
