import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/">
        <img
          src="https://www.vhv.rs/file/max/22/222442_png-logo.png"
          className="App-logo"
          alt="logo"
        />
      </a>
    </header>
  );
};

export default Header;
