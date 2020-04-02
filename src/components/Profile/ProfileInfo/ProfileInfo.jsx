import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = props => {
  return (
    <div>
      <div>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg"></img>
      </div>
      <div className={classes.descriptionBlock}>ava + decsription</div>
    </div>
  );
};

export default ProfileInfo;
