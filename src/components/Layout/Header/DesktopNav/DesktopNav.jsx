"use client";
import classes from "../../Layout.module.css";

const DesktopNav = () => {
  return (
    <nav className={classes["header__nav"]}>
      <ul>
        <li>
          <a href='#' className={classes["header__nav-link"]}>
            Who We Are
          </a>
        </li>
        <li>
          <a href='#' className={classes["header__nav-link"]}>
            Services
          </a>
        </li>
        <li>
          <a href='#' className={classes["header__nav-link"]}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
