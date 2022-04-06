import React from "react";
import css from "./Home.module.css";
import Post from "./Post";

export default (props) => {
  const { posts, users, likes, comments, currentUserId } = props;

  function findUser(post, users) {
    return users.find((user) => user.id === post.userId);
  }

  function findComments(post, comments) {
    return comments.filter((comment) => comment.postId === post.id);
  }

  function findLikes(post, likes) {
    let postLikes = likes.filter((like) => like.postId === post.id);
    return {
      self: postLikes.some((like) => like.userId === currentUserId),
      count: postLikes.length,
    };
  }

  return (
    <div className={css.home}>
      {posts
        .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
        .map((post) => (
          <Post
            key={post.id}
            user={findUser(post, users)}
            post={post}
            comments={findComments(post, comments)}
            likes={findLikes(post, likes)}
            onLike={props.onLike}
            onUnlike={props.onUnlike}
            onComment={props.onComment}
          />
        ))}
    </div>
  );
};
