import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Header } from './Header/header';
import Main from "./Main/Main";

//============= CUSTOM HOOK =============
const useApp = () => {
    const classes = useStyles();
    return {
        classes
    }
};

export const App = () => {
    const {
        classes
    } = useApp();
  return (
      <div className={classes.app}>
          <div className={classes.wrapper}>
              <Header />
              <div className={classes.innerWrapper}>
                  <Main />
              </div>
          </div>
      </div>
  );
};

//============================= STYLE ==========================
const useStyles = makeStyles({
    app: {
        height: '100vh'
    },
    wrapper: {
        maxWidth: 1240,
        width: '100%',
        margin: '0 auto',
        boxSizing: 'border-box',
        height: '100vh'
    },
    innerWrapper: {
        display: 'flex',
        height: 'calc(100vh - 60px)'
    }
});

