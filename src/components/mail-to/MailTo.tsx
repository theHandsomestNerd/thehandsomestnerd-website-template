import{FunctionComponent, PropsWithChildren} from 'react'
import {Button, Typography} from '@mui/material'

interface IProps {
    email:string,
    subject:string
    body:string
    color: string
}

const MailTo: FunctionComponent<IProps & PropsWithChildren> = (props:IProps & PropsWithChildren) => {

    return (<Button fullWidth style={{color:props.color}} href={`mailto:${props.email}?subject=${props.subject || ""}&body=${props.body || ""}`}>
        <Typography color='inherit' align='center'
                    variant='subtitle1'>{props.children}</Typography>
    </Button>)
}

export default MailTo