import React from "react";
import styles from "./Header.module.css";
import logo from "../images/logo.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles["header-mainContainer"]}>
      <div className={styles["header-mainContainerBox"]}>
        <div className={styles["header-logoContainer"]}>
          <img src={logo} alt="logo-img" />
        </div>
        <div className={styles["header-navigationContainer"]}>
          <nav>
            <ul>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to="/"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                <li>Projects</li>
              </NavLink>

              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                <li>Portfolio</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className={styles["header-hireButton"]}>
          <NavLink to="/hireme">
            <button>Hire Me</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
