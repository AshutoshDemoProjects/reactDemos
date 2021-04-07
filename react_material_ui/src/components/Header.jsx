import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import { ChatBubbleOutline, Dehaze, NotificationsNone, PowerSettingsNew, Search } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(thyme => ({
    root: {
        backgroundColor: '#fff'
    },
    searchItem: {
        opacity: '0.6',
        padding: `0px ${thyme.spacing(1)}px`,
        fontSize: '0.8rem',
        '& :hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: thyme.spacing(1)
        }
    },
    appTitle: {
        color: '#000',
        fontSize: thyme.spacing(2),
        fontWeight: 'bold'
    }

}));

export default function Header(props) {
    const { title, clickHandler } = props;
    const styles = useStyles();
    return (
        <AppBar position='static' className={styles.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    {title && <Grid style={{ paddingRight: '16px' }}><IconButton onClick={clickHandler}><Dehaze /></IconButton><span className={styles.appTitle}>Demo App</span></Grid>}
                    <Grid item>
                        <InputBase className={styles.searchItem} placeholder='Seach items' startAdornment={<Search fontSize='small' />} />
                    </Grid>
                    <Grid item sm />
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNone />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color='primary'>
                                <ChatBubbleOutline />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNew />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
