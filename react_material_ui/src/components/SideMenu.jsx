import React from 'react'
import { Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles, Paper } from '@material-ui/core'
import { Dns, FormatListNumbered, NavigateBefore, PeopleOutline } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        // backgroundColor: '#233053'
    },
    appTitle: {
        padding: theme.spacing(1),
        color: '#000',
        fontSize: theme.spacing(2),
        fontWeight: 'bold'
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
export default function SideMenu(props) {
    const { clickHandler } = props;
    const styles = useStyles();
    /*const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }; */

    return (
        <Paper elevation={3} className={styles.sideMenu}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <Grid container alignItems='center'>
                            <Grid>
                                <span className={styles.appTitle}>Demo App</span>
                            </Grid>
                            <Grid sm></Grid>
                            <Grid>
                                <IconButton onClick={clickHandler} classes={{ label: styles.appTitle }}><NavigateBefore /></IconButton>
                            </Grid>
                        </Grid>
                        <Divider />
                    </ListSubheader>
                }

            >
                <ListItem button component={NavLink} to="userlist">
                    <ListItemIcon>
                        <PeopleOutline />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItem>
                <ListItem button component={NavLink} to="productlist">
                    <ListItemIcon>
                        <Dns />
                    </ListItemIcon>
                    <ListItemText primary="Products" />
                </ListItem>
                <ListItem button component={NavLink} to="orderlist">
                    <ListItemIcon>
                        <FormatListNumbered />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                </ListItem>
                {/* <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <Inbox />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={styles.nested} component="a" href="demo" >
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse> */}
            </List>
        </Paper>
    );
}