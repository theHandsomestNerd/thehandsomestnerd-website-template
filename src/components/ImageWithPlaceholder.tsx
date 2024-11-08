import {FunctionComponent, useContext} from 'react'
import {Grid} from '@mui/material'
import SanityContext from "../common/sanityIo/sanity-context/SanityContext";
import {SanityImageSource} from '@sanity/image-url/lib/types/types';

interface IProps {
    image?: SanityImageSource
    imageAltText?: string
    text?: string
    height?: number
    width?: number
}

const ImageWithPlaceholder: FunctionComponent<IProps> = (props: IProps) => {
    const sanityContext = useContext(SanityContext)


    return (<Grid container item>
        <img alt={props.imageAltText}
             src={sanityContext.placeholderOrImage && sanityContext.placeholderOrImage(props.image, props.width, props.height)}/>
    </Grid>)
}

export default ImageWithPlaceholder