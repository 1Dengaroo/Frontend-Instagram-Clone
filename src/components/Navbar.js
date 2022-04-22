import React, { useContext } from "react";
import css from "./Navbar.module.css";
import publicURL from "../utils/public";
import { Link } from "react-router-dom";
import { StoreContext } from "../contexts/StoreContext";

export default (props) => {
  const { currentUserId } = useContext(StoreContext);
  return (
    <nav className={css.row}>
      <div className={css.nav_elem}>
        <Link to="/">
          <img src={publicURL("/assets/home.svg")} alt="Home" />
        </Link>
      </div>
      <div className={css.nav_elem}>
        <Link to="/explore">
          <img src={publicURL("/assets/explore.svg")} alt="Explore" />
        </Link>
      </div>
      <div className={css.nav_elem}>
        <Link to="/newpost">
          <img src={publicURL("/assets/newpost.svg")} alt="NewPost" />
        </Link>
      </div>
      <div className={css.nav_elem}>
        <Link to="/activity">
          <img src={publicURL("/assets/activity.svg")} alt="Activity" />
        </Link>
      </div>
      <div className={css.nav_elem}>
        <Link to={`/profile/${currentUserId}`}>
          <img src={publicURL("/assets/profile.svg")} alt="profile" />
        </Link>
      </div>
    </nav>
  );
};
