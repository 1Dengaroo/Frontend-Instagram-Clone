import React from "react";
import css from "./Navbar.module.css";
import publicURL from "../utils/public";

export default (props) => {
  const handleNavChange = (page) => {
    if (props.onNavChange(page)) {
      props.onNavChange(page);
    }
  };

  return (
    <nav className={css.row}>
      <div className={css.nav_elem}>
        <button onClick={(e) => handleNavChange("home")}>
          <img src={publicURL("/assets/home.svg")} alt="Home" />
        </button>
      </div>
      <div className={css.nav_elem}>
        <button onClick={(e) => handleNavChange("explore")}>
          <img src={publicURL("/assets/explore.svg")} alt="Explore" />
        </button>
      </div>
      <div className={css.nav_elem}>
        <button onClick={(e) => handleNavChange("newpost")}>
          <img src={publicURL("/assets/newpost.svg")} alt="Newpost" />
        </button>
      </div>
      <div className={css.nav_elem}>
        <button onClick={(e) => handleNavChange("activity")}>
          <img src={publicURL("/assets/activity.svg")} alt="Activity" />
        </button>
      </div>
      <div className={css.nav_elem}>
        <button onClick={(e) => handleNavChange("profile")}>
          <img src={publicURL("/assets/profile.svg")} alt="Profile" />
        </button>
      </div>
    </nav>
  );
};
