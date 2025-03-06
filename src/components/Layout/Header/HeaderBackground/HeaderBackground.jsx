"use client";
import { useEffect, useState } from "react";
import classes from "../../Layout.module.css";

const HeaderBackground = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolling(window.scrollY > 50);
    });
  }, []);

  return (
    <div className={`${classes["header-bg"]} ${isScrolling && classes["is-scrolling"]}`}></div>
  );
};

export default HeaderBackground;
