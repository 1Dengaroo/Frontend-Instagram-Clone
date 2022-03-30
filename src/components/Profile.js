import React from "react";
import css from "./Profile.module.css";
import publicURL from "../utils/public";

export default (props) => {
  const { currentUserId, posts, users, followers } = props;
  const [user] = users.filter((user) => user.id === currentUserId);
  const user_posts = posts.filter((post) => post.userId === currentUserId);
  const user_followers = followers.filter(
    (follower) => follower.userId === currentUserId
  );
  const user_follows = followers.filter(
    (follower) => follower.followerId === currentUserId
  );

  return (
    <div className={css.profile_container}>
      <div className={css.header}>
        <div className={css.pfp_container}>
          <img src={publicURL(user.photo)}></img>
        </div>
        <div className={css.name}>{user.id}</div>
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
            <div className={css.square}>
              <div className={css.content}>
                <img
                  className={css.image}
                  src={publicURL(post.photo)}
                  alt="Post Thumbnail"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
