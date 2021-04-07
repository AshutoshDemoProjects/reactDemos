import { CssBaseline, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import './App.css';

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
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
