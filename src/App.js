import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
    };
    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({ page: page });
  }

  renderMain(page) {
    switch (page) {
      case "home":
        console.log("render home");
        return <Home />;
      case "explore":
        console.log("render explore");
        return;
      case "newpost":
        console.log("render newpost");
        return;
      case "activity":
        console.log("render activity");
        return;
      case "profile":
        console.log("render profile");
        return;
      default:
        console.log("render default");
        return <Home />;
    }
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
