import { makeStyles, Paper } from '@material-ui/core';
import { PeopleOutline } from '@material-ui/icons';
import React from 'react'
import PageHeader from '../../components/PageHeader';
import UserForm from './UserForm';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margine: theme.spacing(5),
        padding: theme.spacing(3)
    }
}));
export default function Users() {
    const styles = useStyles();
    return (
        <>
            <PageHeader icon={<PeopleOutline fontSize='large' />} title='Users' subTitle='Users Details.' />
            <Paper className={styles.pageContent}>
                <UserForm />
            </Paper>
        </>
    );
}
