import React from "react";
import classes from "../MyPosts/MyPosts.module.css";
import Post from "../MyPosts/Post/Post";

let posts = [
  { id: 1, message: "How are you?" },
  { id: 2, message: "My first post" }
];

let postsElements = posts.map(p => <Post message={p.message} />);

const MyPosts = props => {
  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
