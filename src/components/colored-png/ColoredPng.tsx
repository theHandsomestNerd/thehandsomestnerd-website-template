import React, {FunctionComponent} from 'react'
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Grid} from '@mui/material'
import {SanityImageAsset} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import imagePlaceholderClient from "../../utils/imagePlaceholderClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    maskUrl?: string,
    color: any,
    size?: number,
    maskAsset?: SanityImageAsset
}

const ColoredPng: FunctionComponent<IProps> = (props: IProps) => {

    const [imageUrl, setImageUrl] = React.useState<string>()
    const [imageSize, setImageSize] = React.useState<number>(100)

    React.useEffect(() => {
        if(props.size){
            setImageSize(props.size)
        }
        if (props.maskUrl) {
            setImageUrl(props.maskUrl)
        }
        if (props.maskAsset) {
            setImageUrl(urlFor(props.maskAsset).url() ?? imagePlaceholderClient.placeholderOrImage(props.maskAsset, props.size, props.size))
        }else {
            setImageUrl(imagePlaceholderClient.placeholderOrImage(props.maskAsset, props.size, props.size))
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