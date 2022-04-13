import React, { useState } from "react";
import css from "./Post.module.css";
import timespan from "../utils/timespan";
import publicURL from "../utils/public";
import { Link } from "react-router-dom";

export default (props) => {
  const { comments, likes, post, user } = props;
  const likePath = likes.self ? "/assets/unlike.svg" : "/assets/like.svg";
  const [comment, setComment] = useState("");
  const [toggleComment, setToggleComment] = useState(false); // hidden initially

  function handleLike() {
    props.onLike(props.post.id);
  }

  function handleUnlike() {
    props.onUnlike(props.post.id);
  }

  function handleSubmitComment(event) {
    props.onComment(props.post.id, comment); // this calls addComment from App.js
    setComment(""); //reset
    setToggleComment(false); //close comment box
    event.preventDefault(); // prevent page refresh
  }

  return (
    <div className={css.post_container}>
      <div className={css.user}>
        <img className={css.image} src={publicURL(user.photo)}></img>
        <Link to={`/profile/${user.id}`}>
          <div className={css.user_id}>
            <strong>{user.id}</strong>
          </div>
        </Link>
      </div>
      <div className={css.post}>
        <img src={publicURL(post.photo)}></img>
      </div>
      <div className={css.interactions}>
        <button onClick={likes.self ? handleUnlike : handleLike}>
          <img src={publicURL(likePath)} alt="Like"></img>
        </button>
        <button onClick={(e) => setToggleComment(!toggleComment)}>
          <img src={publicURL("/assets/comment.svg")} alt="Comment"></img>
        </button>
        <div className={css.likes}>
          <strong>{likes.count} likes</strong>
        </div>
      </div>
      <div className={css.comment_div}>
        <div className={css.desc}>
          <Link to={`/profile/${user.id}`}>
            <strong>{post.userId} </strong>
          </Link>
          {post.desc}
        </div>
        {comments.map((com) => {
          return (
            <div className={css.comment}>
              <Link to={`/profile/${com.userId}`}>
                <strong>{com.userId}</strong>
              </Link>{" "}
              {com.text}
            </div>
          );
        })}
      </div>
      <div className={css.date}>
        {timespan(post.datetime).toUpperCase()} AGO
      </div>
      {toggleComment && (
        <form className={css.addComment} onSubmit={handleSubmitComment}>
          <input
            type="text"
            placeholder="Add a comment…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>
      )}
    </div>
  );
};
