import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    }
}));
export default function Button(props) {
    const styles = useStyles();
    const { text, size, color, variant, onClick, ...other } = props;
    return (
        <MuiButton
            className={styles.root}
            variant={variant || 'contained'}
            size={size || 'large'}
            color={color || 'default'}
            onClick={onClick}
            {...other}>{text}</MuiButton>
    )
}
