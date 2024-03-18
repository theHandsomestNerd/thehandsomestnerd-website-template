import React, {FunctionComponent, useContext} from 'react'
import {Grid} from '@mui/material'
import {SanityImageAsset} from "./BlockContentTypes";
import SanityContext from "../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    image?: SanityImageAsset
    imageAltText?: string
    text?: string
    height?: number
    width?: number
}

const ImageWithPlaceholder: FunctionComponent<IProps> = (props: IProps) => {
    const [imageUrl, setImageUrl] = React.useState<string>()
    const [placeHolderUrl, setPlaceHolderUrl] = React.useState<string>()
    const sanityContext = useContext(SanityContext)

    React.useEffect(() => {
        if (props.image) {
            const theUrl = sanityContext.urlFor(props.image)

            if (props.width) {
                theUrl.width(props.width)
            }
            if (props.height) {
                theUrl.width(props.height)
            }
            setImageUrl(theUrl.url() ?? "")
        } else {
            let theUrl = `https://placehold.co/`
            if (props.width) {
                if (props.height) {
                    theUrl += `${props.width}x${props.height}`
                } else {
                    theUrl += `${props.width}x${props.width}`
                }
            } else {
                theUrl += `${props.height}x${props.height}`
            }

            if(props.text){
                theUrl += `?text=${props.text}`
            }

            setPlaceHolderUrl(theUrl)
        }
    }, [])


    return (<Grid container item>
        {props.image ? <img alt={props.imageAltText}
                            src={imageUrl}/> :
            <img src={placeHolderUrl} alt={'placeholder'}/>}
    </Grid>)
}

export default ImageWithPlaceholder