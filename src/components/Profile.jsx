import React from "react";
import classes from "../styles/Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg"></img>
      </div>
      <div>ava + decsription</div>
      <div>
        My Posts
        <div className={classes.item}>New Post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
