import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <a href="/">
        <img src="https://www.vhv.rs/file/max/22/222442_png-logo.png" className="App-logo" alt="logo" />
      </a>

      <div className={classes.loginBlock}>{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}</div>
    </header>
  );
};

export default Header;
