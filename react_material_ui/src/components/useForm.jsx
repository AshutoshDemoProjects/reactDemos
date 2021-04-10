import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

export function useForm(initialFormValues, validateOnChange = false, validate) {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        if (validateOnChange) {
            validate({ [name]: value });
        }
    };
    const resetForm = () => {
        setValues(initialFormValues);
        setErrors({});
    };
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    };
}
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '95%',
            margin: theme.spacing(1)
        }
    }
}));
export function Form(props) {
    const styles = useStyles();
    const { children, ...other } = props;
    return (
        <form className={styles.root} autoComplete='off' {...other}>
            {children}
        </form>
    )
}
