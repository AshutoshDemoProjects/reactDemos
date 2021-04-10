import { Card, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader: {
        padding: theme.spacing(2),
        display: 'flex',
        marginBottom: theme.spacing(1)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}));
export default function PageHeader(props) {
    const { title, subTitle, icon } = props;
    const styles = useStyles();
    return (
        <Paper elevation={0} square className={styles.root}>
            <div className={styles.pageHeader}>
                <Card className={styles.pageIcon}>
                    {icon}
                </Card>
                <div className={styles.pageTitle}>
                    <Typography variant='h6' component='div'>{title}</Typography>
                    <Typography variant='subtitle2' component='div'>{subTitle}</Typography>
                </div>
            </div>
        </Paper>
    );
}
