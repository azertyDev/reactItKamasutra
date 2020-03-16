import React from "react";
import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a>Profile</a>
      </div>
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
