import React, {FunctionComponent, useContext} from 'react'
import {Grid} from '@mui/material'
import {SanityImageAsset} from "../BlockContentTypes";
import SanityContext from "../../common/sanityIo/sanity-context/SanityContext";

interface IProps {
    maskUrl?: string,
    color: any,
    size?: number,
    maskAsset?: SanityImageAsset
}

const ColoredPng: FunctionComponent<IProps> = (props: IProps) => {

    const [imageUrl, setImageUrl] = React.useState<string>()
    const [imageSize, setImageSize] = React.useState<number>(100)
    const sanityContext = useContext(SanityContext)

    React.useEffect(() => {
        if(props.size){
            setImageSize(props.size)
        }
        if (props.maskUrl) {
            setImageUrl(props.maskUrl)
        }
        if (props.maskAsset) {
            setImageUrl(sanityContext.urlFor(props.maskAsset).url() ?? sanityContext.placeholderOrImage(props.maskAsset, props.size, props.size))
        }else {
            setImageUrl(sanityContext.placeholderOrImage(props.maskAsset, props.size, props.size))
        }
    }, [])


    return (<Grid item container style={{
        WebkitMaskImage: `url(${imageUrl})`,
        maskImage: `url(${imageUrl})`,
        WebkitMaskRepeat: "none",
        maskRepeat: "none",
        backgroundPosition: "center",
        opacity: .55555555555,
        height: `${imageSize}px`,
        width: `${imageSize}px`,
        backgroundColor: props.color,
        WebkitMaskSize: "cover",
        maskSize: "cover",
        // marginBottom: TransformHWTheme.spacing(2)
    }}>
    </Grid>)
}

export default ColoredPng