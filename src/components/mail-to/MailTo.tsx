import React, {FunctionComponent, PropsWithChildren} from 'react'
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import {Button, Grid, Typography} from '@mui/material'

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps {
    email:string,
    subject:string
    body:string
    color: string
}

const MailTo: FunctionComponent<IProps & PropsWithChildren> = (props:IProps & PropsWithChildren) => {
    const classes = useStyles()

    React.useEffect(()=>{
    }, [])

    return (<Button fullWidth style={{color:props.color}} href={`mailto:${props.email}?subject=${props.subject || ""}&body=${props.body || ""}`}>
        <Typography color='inherit' align='center'
                    variant='subtitle1'>{props.children}</Typography>
    </Button>)
}

export default MailTo