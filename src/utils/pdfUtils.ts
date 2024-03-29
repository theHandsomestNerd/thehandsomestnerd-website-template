const getPDFLink = async () => {
    return fetch("/get-resume-pdf",
        {
            method: 'POST',
        },
    )
        .then((pdfDoc: any) => {
            return getDownloadLink(pdfDoc)
        })
        .catch((e: any) => {
            // console.error(LOG, 'ERROR', 'error', e);
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject({attempt: Error(e)});
        });
};
const getDownloadLink = async (pdfDoc:any)=>{
    return pdfDoc.blob().then((blob:any) => {

        // Creating new object of PDF file
        const fileURL =
            window.URL.createObjectURL(blob);
        console.log("returned from server", fileURL)

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        return fileURL
        // alink.click();
    });
}

export default {getPDFLink}