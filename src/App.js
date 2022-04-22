import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import Activity from "./components/Activity";
import NewPost from "./components/NewPost";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreContextProvider from "./contexts/StoreContext";

// To update github pages:
// run "git push origin master" in terminal

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <StoreContextProvider>
        <div className="container">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path=":postId" element={<Home />}></Route>
              <Route path="/profile/:userId" element={<Profile />}></Route>
              <Route path="newpost" element={<NewPost />}></Route>
              <Route path="activity" element={<Activity />}></Route>
              <Route path="explore" element={<Explore />}></Route>
            </Routes>
          </main>
          <Navbar />
        </div>
      </StoreContextProvider>
    </Router>
  );
}
