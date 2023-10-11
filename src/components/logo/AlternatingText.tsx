import {Typography} from '@mui/material';
import React, {FunctionComponent} from 'react'
import {COLORS} from "../../theme/common/ColorPalette";

interface IProps {
    logoText?: string
    logoAccentText?: string
    isLarge?: boolean
}

const AlternatingText: FunctionComponent<IProps> = (props: IProps) => {

    const [textArray, setTextArray] = React.useState<string []>([])

    React.useEffect(() => {
        if (props.logoText) {
            setTextArray(props.logoText.split(' '))
        }
    }, [props.logoText])

    return <Typography display='inline' component='div' align='center'>{textArray.map((textArrayItem, index) => {
        return <Typography
            display='inline'
            align='center'
            color='primary'
            style={{
                fontFamily: "Oswald",
                fontWeight: "300",
                color: index % 2 !== 1 ? COLORS.DARKERGRAY : 'textPrimary'
            }} variant={props.isLarge ? 'h2' : 'h3'}> {textArrayItem}</Typography>
    })}<Typography
        display='inline' style={{
        fontFamily: "Oswald"
        , fontWeight: "300",
    }} variant={props.isLarge ? 'h2' : 'h3'}
        color='primary'>{props.logoAccentText}</Typography></Typography>
}

export default AlternatingText

