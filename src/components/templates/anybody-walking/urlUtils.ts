export const getUrlSearchParamsStr = (searchParamsObj: any)=> {
    const urlParamProcessor = new URLSearchParams(
        { ...searchParamsObj },
    );
    console.log('getUrlSerachparamsStr', urlParamProcessor.toString())

    return urlParamProcessor.toString();
}
