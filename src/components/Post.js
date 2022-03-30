import React from "react";
import css from "./Post.module.css";
import timespan from "../utils/timespan";
import publicURL from "../utils/public";

export default (props) => {
  const { comments, likes, post, user } = props;
  const likePath = likes.self ? "/assets/unlike.svg" : "/assets/like.svg";

  function handleLike() {
    props.onLike(props.post.id);
  }

  function handleUnlike() {
    props.onUnlike(props.post.id);
  }

  return (
    <div className={css.post_container}>
      <div className={css.user}>
        <img className={css.image} src={publicURL(user.photo)}></img>
        <div className={css.user_id}>
          <strong>{user.id}</strong>
        </div>
      </div>
      <div className={css.post}>
        <img src={publicURL(post.photo)}></img>
      </div>
      <div className={css.interactions}>
        <button onClick={likes.self ? handleUnlike : handleLike}>
          <img src={publicURL(likePath)} alt="Like"></img>
        </button>
        <img src={publicURL("/assets/comment.svg")} alt="Comment"></img>
        <div className={css.likes}>
          <strong>{likes.count} likes</strong>
        </div>
      </div>
      <div className={css.comment_div}>
        <div className={css.desc}>
          <strong>{post.userId} </strong>
          {post.desc}
        </div>
        {comments.map((com) => {
          return (
            <div className={css.comment}>
              <strong>{com.userId}</strong> {com.text}
            </div>
          );
        })}
      </div>
      <div className={css.date}>
        {timespan(post.datetime).toUpperCase()} AGO
      </div>
    </div>
  );
};