import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid} from '@material-ui/core'
import {SanityImageAsset} from "../BlockContentTypes";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";

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
            setImageUrl(urlFor(props.maskAsset).url() ?? "")
        }
            else{
            setImageUrl(`https://placehold.co/${imageSize}x${imageSize}`)
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