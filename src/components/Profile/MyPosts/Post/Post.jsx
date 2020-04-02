import React from "react";
import classes from "./Post.module.css";

const Post = props => {
  return (
    <div className={classes.post}>
      <div className={classes.item}>
        <img
          src="https://annaisd.org/UserFiles/Servers/Server_5780233/Image/Instructional%20Technology/Think%20Box.png"
          alt="image"
        />
        {props.message}
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
