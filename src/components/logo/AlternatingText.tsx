import {Typography} from '@mui/material';
import {FunctionComponent, useEffect, useState} from 'react'
import {COLORS} from "../../theme/common/ColorPalette";

interface IProps {
    logoText?: string
    logoAccentText?: string
    isLarge?: boolean
    noWrap?: boolean
}

const AlternatingText: FunctionComponent<IProps> = (props: IProps) => {

    const [textArray, setTextArray] = useState<string []>([])

    useEffect(() => {
        if (props.logoText) {
            setTextArray(props.logoText.split(' '))
        }
    }, [props.logoText])

    return <Typography display='inline' component='div' align='center' >{textArray.map((textArrayItem, index) => {
        return <Typography
            key={index}
            display='inline'
            align='center'
            color='primary'
            style={{
                fontFamily: "Oswald",
                fontWeight: "300",
                color: index % 2 !== 1 ? COLORS.DARKERGRAY : 'textPrimary'
            }} variant={props.isLarge ? 'h4' : 'h5'}> {textArrayItem}</Typography>
    })}<Typography
        display='inline' style={{
        fontFamily: "Oswald"
        , fontWeight: "300",
    }} variant={props.isLarge ? 'h4' : 'h5'}
        color='primary'>{props.logoAccentText}</Typography></Typography>
}

export default AlternatingText

