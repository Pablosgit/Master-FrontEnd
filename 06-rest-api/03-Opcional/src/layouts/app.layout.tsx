import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as classes from './app.layout.styles';

export const AppLayout: React.FunctionComponent = (props) => {

  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <ul className={classes.menu}>
            <li><Link className={classes.menulist} to="/">CHARACTER</Link></li>
            <li><Link className={classes.menulist} to="/location">LOCATION</Link></li>
            <li><Link className={classes.menulist} to="/episode">EPISODE</Link></li>
          </ul>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
