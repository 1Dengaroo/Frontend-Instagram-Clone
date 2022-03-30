import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import Activity from "./components/Activity";
import NewPost from "./components/NewPost";
import React from "react";
import data from "./utils/initialStore";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      ...data,
    };
    this.setPage = this.setPage.bind(this);
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  setPage(page) {
    this.setState({ page: page });
  }

  renderMain(page) {
    switch (page) {
      case "home":
        console.log("render home");
        return (
          <Home
            currentUserId={this.state.currentUserId}
            posts={this.state.posts}
            users={this.state.users}
            comments={this.state.comments}
            likes={this.state.likes}
            onLike={this.addLike}
            onUnlike={this.removeLike}
          />
        );
      case "explore":
        console.log("render explore");
        return <Explore />;
      case "newpost":
        console.log("render newpost");
        return <NewPost />;
      case "activity":
        console.log("render activity");
        return <Activity />;
      case "profile":
        console.log("render profile");
        return (
          <Profile
            currentUserId={this.state.currentUserId}
            followers={this.state.followers}
            posts={this.state.posts}
            users={this.state.users}
          />
        );
      default:
        console.log("render default");
        return (
          <Home
            currentUserId={this.state.currentUserId}
            posts={this.state.posts}
            users={this.state.users}
            comments={this.state.comments}
            likes={this.state.likes}
            onLike={this.addLike}
          />
        );
    }
  }

  addLike(postId) {
    const like = {
      userId: this.state.currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };

    this.setState({
      likes: this.state.likes.concat(like),
    });
  }

  removeLike(postId) {
    const like = {
      userId: this.state.currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };

    this.setState({
      likes: this.state.likes.filter(
        (like) =>
          !(like.userId === this.state.currentUserId && like.postId === postId)
      ),
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <main className="content">{this.renderMain(this.state.page)}</main>
        <Navbar onNavChange={this.setPage} />
      </div>
    );
  }
}
