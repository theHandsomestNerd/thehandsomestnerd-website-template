import React, {FunctionComponent} from 'react'
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid} from '@mui/material'
import {urlFor} from "./block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityImageAsset} from "./BlockContentTypes";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

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

    React.useEffect(() => {
        if (props.image) {
            const theUrl = urlFor(props.image)

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