import React from "react";
import css from "./Home.module.css";
import Post from "./Post";

const post = {
  user: {
    id: "judy",
    photo: "/assets/user1.png",
  },
  post: {
    id: "post-1",
    userId: "judy",
    photo: "/assets/post1.png",
    desc: "#zootopia #excited",
    datetime: "2020-02-09T22:45:28Z",
  },
  likes: {
    self: true, // means you liked the post
    count: 1,
  },
  comments: [
    {
      userId: "nick",
      text: "Welcome to Zootopia!",
    },
    {
      userId: "judy",
      text: "Thanks!😁Looking forward to meeting you!",
    },
  ],
};

export default () => {
  return (
    <div className={css.home}>
      <Post
        user={post.user}
        likes={post.likes}
        post={post.post}
        comments={post.comments}
      />
      <Post
        user={post.user}
        likes={post.likes}
        post={post.post}
        comments={post.comments}
      />
    </div>
  );
};
