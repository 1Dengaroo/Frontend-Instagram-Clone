import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import Activity from "./components/Activity";
import NewPost from "./components/NewPost";
import React, { useState } from "react";
import initialStore from "./utils/initialStore";
import uniqueId from "./utils/uniqueId.js";

// To update github pages:
// run "git push origin master" in terminal

export default () => {
  const [page, setPage] = useState("home");
  const [currentUserId, setCurrentUserId] = useState(
    initialStore.currentUserId
  );
  const [users, setUsers] = useState(initialStore.users);
  const [posts, setPosts] = useState(initialStore.posts);
  const [followers, setFollowers] = useState(initialStore.followers);
  const [comments, setComments] = useState(initialStore.comments);
  const [likes, setLikes] = useState(initialStore.likes);

  function renderMain(page) {
    switch (page) {
      case "home":
        console.log("render home");
        return (
          <Home
            currentUserId={currentUserId}
            posts={posts}
            users={users}
            comments={comments}
            likes={likes}
            onLike={addLike}
            onUnlike={removeLike}
            onComment={addComment}
          />
        );
      case "explore":
        console.log("render explore");
        return <Explore />;
      case "newpost":
        console.log("render newpost");
        return <NewPost post={posts} onPost={addPost} onCancel={cancelPost} />;
      case "activity":
        console.log("render activity");
        return <Activity />;
      case "profile":
        console.log("render profile");
        return (
          <Profile
            currentUserId={currentUserId}
            followers={followers}
            posts={posts}
            users={users}
          />
        );
      default:
        console.log("render default");
        return (
          <Home
            currentUserId={currentUserId}
            posts={posts}
            users={users}
            comments={comments}
            likes={likes}
            onLike={addLike}
            onComment={addComment}
          />
        );
    }
  }
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

  function cancelPost() {
    setPage("home");
  }

  return (
    <div className="container">
      <Header />
      <main className="content">{renderMain(page)}</main>
      <Navbar onNavChange={setPage} />
    </div>
  );
};
