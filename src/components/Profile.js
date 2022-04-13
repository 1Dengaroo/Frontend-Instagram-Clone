import React from "react";
import css from "./Profile.module.css";
import publicURL from "../utils/public";
import { Link, useParams } from "react-router-dom";
export default (props) => {
  const { userId } = useParams();
  const { currentUserId, posts, users, followers } = props;
  const [user] = users.filter((user) => user.id === userId);
  const user_posts = posts.filter((post) => post.userId === userId);
  const user_followers = followers.filter(
    (follower) => follower.userId === userId
  );
  const user_follows = followers.filter(
    (follower) => follower.followerId === userId
  );
  const follows =
    user_followers.filter((follower) => follower.followerId === currentUserId)
      .length > 0
      ? true
      : false;

  function handleFollow() {
    props.onFollow(userId, currentUserId);
  }

  function handleUnfollow() {
    props.onUnfollow(userId, currentUserId);
  }

  return (
    <div className={css.profile_container}>
      <div className={css.header}>
        <div className={css.pfp_container}>
          <img src={publicURL(user.photo)}></img>
        </div>
        <div>
          <div className={css.name}>
            {user.id}
            <br />
          </div>
          <button
            onClick={!follows ? handleFollow : handleUnfollow}
            className={!follows ? css.followBtn : css.unfollowBtn}
          >
            {follows ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
      <div className={css.bio}>
        <div>
          <strong>{user.name}</strong>
        </div>
        <div>{user.bio}</div>
      </div>
      <div className={css.stats}>
        <div className={css.stats_elem}>
          <span className={css.stat_count}>{user_posts.length}</span>
          <br />
          <div className={css.individual_stat}>posts</div>
        </div>
        <div className={css.stats_elem}>
          <span className={css.stat_count}>{user_followers.length}</span> <br />
          <div className={css.individual_stat}>followers</div>
        </div>
        <div className={css.stats_elem}>
          <span className={css.stat_count}>{user_follows.length}</span> <br />
          <div className={css.individual_stat}>following</div>
        </div>
      </div>
      <div className={css.pictures}>
        {user_posts.map((post) => {
          return (
            <Link key={post.id} to={`/${post.id}`}>
              <div className={css.square}>
                <div className={css.content}>
                  <img
                    className={css.image}
                    src={publicURL(post.photo)}
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
