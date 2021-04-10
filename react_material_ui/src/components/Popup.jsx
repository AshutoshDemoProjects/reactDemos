import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react'
import { Controls } from './controls/index';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absollute',
        top: theme.spacing(5)
    }
}));
export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    const styles = useStyles();
    return (
        <Dialog classes={{ paper: styles.dialogWrapper }} open={openPopup} maxWidth='md'>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>{title}</Typography>
                    <Controls.ActionButton color='secondary' onClick={() => setOpenPopup(false)} ><Close /></Controls.ActionButton>
                </div>
            </DialogTitle>

            <DialogContent dividers>{children}</DialogContent>
        </Dialog>
    )
}
