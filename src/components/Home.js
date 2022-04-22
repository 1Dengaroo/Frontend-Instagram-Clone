import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import css from "./Home.module.css";
import Post from "./Post";
import { StoreContext } from "../contexts/StoreContext";
export default function Home(props) {
  let {
    posts,
    users,
    likes,
    comments,
    currentUserId,
    addComment,
    addLike,
    removeLike,
  } = useContext(StoreContext);
  
  const { postId } = useParams();
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
        .filter((post) => {
          if (postId === undefined) return post;
          else return post.id === postId;
        })
        .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
        .map((post) => (
          <Post
            key={post.id}
            user={findUser(post, users)}
            post={post}
            comments={findComments(post, comments)}
            likes={findLikes(post, likes)}
            onLike={addLike}
            onUnlike={removeLike}
            onComment={addComment}
          />
        ))}
    </div>
  );
}
