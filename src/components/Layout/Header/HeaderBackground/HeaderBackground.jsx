"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classes from "../../Layout.module.css";

const HeaderBackground = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const pathname = usePathname();
  const isServices = pathname.startsWith("/services/");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolling(window.scrollY > 50);
    });
  }, []);

  return (
    <div
      className={`${classes["header-bg"]} ${isScrolling && classes["is-scrolling"]} ${
        isServices && classes["is-scrolling"]
      }`}
    ></div>
  );
};

export default HeaderBackground;
