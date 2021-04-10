import { CssBaseline, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Products from '../pages/products/Products';
import Users from '../pages/users/Users';

const useStyles = makeStyles(thyme => ({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
}));
function App() {
  const styles = useStyles();
  const [showSideMenu, setShowSideMenu] = useState(true);
  const showHandler = () => {
    setShowSideMenu(prevState => { return !prevState; });
  }
  return (
    <>
      {!showSideMenu && <SideMenu clickHandler={showHandler} />}
      <div className={!showSideMenu ? styles.appMain : ''}>
        <Header title={showSideMenu} clickHandler={showHandler} />
        <Switch>
          <Route path='/userlist' component={Users} />
          <Route path='/productlist' component={Products} />
          <Route path='/orderlist' render={() => <h1>Order List</h1>} />
        </Switch>
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
