import React from "react";
import css from "./Header.module.css";
import publicURL from "../utils/public";

export default function Header() {
  return (
    <div className={css.row}>
      <div className={css.header_elem}>
        <img src={publicURL("/assets/camera.svg")} alt="Camera"></img>
      </div>
      <div className={css.header_elem}>
        <img src={publicURL("/assets/logo.png")} alt="Instagram"></img>
      </div>
      <div className={css.header_elem}>
        <img src={publicURL("/assets/message.svg")} alt="Message"></img>
      </div>
    </div>
  );
}
