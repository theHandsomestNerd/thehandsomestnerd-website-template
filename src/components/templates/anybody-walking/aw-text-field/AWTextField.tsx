import React, {FunctionComponent} from 'react'
import {FormControl, FormControlLabel, FormGroup, FormHelperText, Typography} from '@mui/material'
import {ValidationResponse} from '../ballroomTypes'
import {makeStyles} from '@mui/styles'
import {Theme, useTheme} from '@mui/material/styles'
import StyledTextField from '../styled-text-field/StyledTextField'

export const useStyles = makeStyles((theme: Theme) => ({
    formControlLabel: {
      color: "black",
        "& .MuiFormControlLabel-asterisk": {
      color: "black",

        }
    },
    errorTextField: {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
            borderWidth: '2px'
        },
        '& .MuiInputBase-root': {
            color: `${theme.palette.error.main}`
        },
        '::-webkit-calendar-picker-indicator': {
            filter: 'invert(1)'
        }
    }
}))

export type AwTextFieldProps = {
    onChange(e: any): void,
    value?: string,
    testId: string,
    fieldLabel: string | any,
    fieldName: string,
    multiline?: boolean,
    type?: 'text' | 'date' | 'time',
    validate?: (e: any) => ValidationResponse,
    dependendentFieldValue?: string
}

const AwTextField: FunctionComponent<AwTextFieldProps> = (props: AwTextFieldProps) => {
    const classes = useStyles()
    const [isError, setIsError] = React.useState<boolean>(false)
    const [errorMessageText, setErrorMessageText] = React.useState<string | undefined>()

    React.useEffect(() => {
        validateField(props.value)
    }, [props.dependendentFieldValue])

    const validateField = (valueToValidate: any): void => {
        if (props.validate) {
            const {status} = props.validate(valueToValidate)

            if (status?.messageText) {
                setIsError(true)
                setErrorMessageText(status.messageText)
            } else {
                setIsError(false)
                setErrorMessageText('')
            }
        }
    }

    React.useEffect(() => {
        validateField(props.value)
    }, [props.value])

    React.useEffect(() => {
        validateField(props.value)
    })

    const theme = useTheme()
    // const isFieldError = () => errorMessageText && errorMessageText !== ''

    // const styles = {
    //     labelAsterisk: {
    //         color: "red"
    //     }
    // };

    const style = {
        fieldset: {
            borderColor: "black"
        },
        "&:hover fieldset": {
            //borderColor: "green!important" // works
            borderColor: "black!important" // doesnt work
        },
        "& .MuiOutlinedInput-root" :{
          paddingRight: "12px"
        },

        "& input" : { color: 'black' , paddingRight: "0px"}
    };
    return <><FormGroup>
        <FormControl error={isError}>
            <FormControlLabel
                className={classes.formControlLabel}
                style={{alignItems: 'start'}}
                control={
                    <StyledTextField
                        sx={style}

                        required
                        fullWidth
                        multiline={props.multiline ? props.multiline : false}
                        minRows={props.multiline ? '7' : '1'}
                        variant='outlined'
                        onChange={props.onChange}
                        name={props.fieldName}
                        type={props.type ? props.type : 'text'}
                        value={props.value || ''}
                        data-testid={props.testId}
                        className={isError ? classes.errorTextField : ""}
                        style={{
                            minWidth: '270px',
                            fontSize: '24px',
                            color: isError ? theme.palette.error.main : "black"
                        }}
                        inputProps={{'data-testid': `${props.testId}-input`}}
                    />
                }
                label={<Typography
                    gutterBottom
                    component='div'
                    variant='h6' noWrap
                    style={{
                        textTransform: 'capitalize',
                        display: "inline",
                        color: isError ? theme.palette.error.main : 'black'
                    }}>{props.fieldLabel}</Typography>}
                labelPlacement='top'/>
        </FormControl>
        <FormHelperText
            data-testid={`${props.testId}-${isError ? 'error' : 'valid'}`}
            // error={!!errorMessageText && errorMessageText !== ''}
            style={{
                position: 'relative',
                paddingLeft: theme.spacing(2),
                marginTop: '0px',
                width: '100%',
                color: isError ? theme.palette.error.main : 'inherit',
                height: isError ? 'unset' : '20px'
            }}
            id='component-helper-text'>{errorMessageText}</FormHelperText>
    </FormGroup>

    </>

}

export default AwTextField