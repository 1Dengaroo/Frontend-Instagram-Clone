import React, { createContext, useState, useEffect } from "react";
import initialStore from "../utils/initialStore";
import uniqueId from "../utils/uniqueId.js";

export const StoreContext = createContext();

function StoreContextProvider(props) {
  const [page, setPage] = useState("home");

  const [currentUserId, setCurrentUserId] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("currentUserId")) ||
      initialStore.currentUserId
    );
  });
  useEffect(() => {
    console.log(currentUserId);
    window.localStorage.setItem("currentUserId", JSON.stringify(currentUserId));
  }, [currentUserId]);

  const [users, setUsers] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("users")) || initialStore.users
    );
  });
  useEffect(() => {
    console.log(users);
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const [posts, setPosts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("posts")) || initialStore.posts
    );
  });
  useEffect(() => {
    console.log(posts);
    window.localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const [followers, setFollowers] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("followers")) ||
      initialStore.followers
    );
  });
  useEffect(() => {
    console.log(followers);
    window.localStorage.setItem("followers", JSON.stringify(followers));
  }, [followers]);

  const [comments, setComments] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("comments")) ||
      initialStore.comments
    );
  });
  useEffect(() => {
    console.log(comments);
    window.localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const [likes, setLikes] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("likes")) || initialStore.likes
    );
  });
  useEffect(() => {
    console.log(likes);
    window.localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  function addLike(postId) {
    const like = {
      userId: currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };

    setLikes(likes.concat(like));
  }

  function removeLike(postId) {
    const like = {
      userId: currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };

    setLikes(
      likes.filter(
        (like) => !(like.userId === currentUserId && like.postId === postId)
      )
    );
  }

  function addComment(postId, text) {
    const comment = {
      userId: currentUserId,
      postId,
      text,
      datetime: new Date().toISOString(),
    };
    setComments(comments.concat(comment));
    console.log(comments);
  }

  function addPost(photo, desc) {
    const post = {
      id: uniqueId("post"),
      userId: currentUserId,
      photo,
      desc,
      datetime: new Date().toISOString(),
    };
    setPosts(posts.concat(post));
    setPage("home");
  }

  function addFollower(userId, followerId) {
    const follower = {
      userId,
      followerId,
    };
    setFollowers(followers.concat(follower));
  }

  function removeFollower(userId, followerId) {
    const follower = {
      userId,
      followerId,
    };
    setFollowers(
      followers.filter(
        (fol) =>
          !(
            fol.userId === follower.userId &&
            fol.followerId === follower.followerId
          )
      )
    );
  }
  return (
    <StoreContext.Provider
      value={{
        users,
        setUsers,
        page,
        setPage,
        currentUserId,
        setCurrentUserId,
        posts,
        setPosts,
        followers,
        setFollowers,
        comments,
        setComments,
        likes,
        setLikes,
        addLike,
        removeLike,
        addComment,
        addPost,
        addFollower,
        removeFollower,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider; // export this component as default
