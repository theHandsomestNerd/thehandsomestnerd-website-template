import {SanityImageAsset} from "../components/BlockContentTypes";
import {urlFor} from "../components/block-content-ui/static-pages/cmsStaticPagesClient";

const PLACEHOLDER_URL = "https://placehold.co/"

const placeholderOrImage = (imageSrc?: SanityImageAsset, placeHolderWidth?: number, placeHolderHeight?: number, text?: string) => {
    let theUrl = ""

    if (imageSrc) {
        theUrl = urlFor(imageSrc).url() ?? ""
    } else {
        theUrl = getPlaceholderImageUrl(placeHolderWidth, placeHolderHeight, text)
    }

    return theUrl
}
const getPlaceholderImageUrl = (width?: number, height?: number, text?: string) => {
    let theUrl = PLACEHOLDER_URL
    if (width) {
        if (height) {
            theUrl += `${width}x${height}`
        } else {
            theUrl += `${height}x${height}`
        }
    } else {
        theUrl += `${height}x${height}`
    }

    if (text) {
        theUrl += `?text=${text.replace(" ", "+")}`
    }

    return theUrl
}
export default {
    getPlaceholderImageUrl,
    placeholderOrImage
}