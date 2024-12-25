"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import IconButton from "@mui/material/IconButton";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { MdMenu, MdClose, MdKeyboardArrowDown } from "react-icons/md";
import classes from "../../Layout.module.css";
import LOGO_WHITE from "../../../../../public/assets/icon/LOGO_WHITE.png";

const MobileNav = () => {
  const [menuIsToggled, setMenuIsToggled] = useState(false);

  const toggleMenu = () => {
    setMenuIsToggled((prevState) => !prevState);
  };

  useEffect(() => {
    setMenuIsToggled(false);
  }, []);

  return (
    <>
      <IconButton className={`${classes["mobile-menu-toggle"]} p-0`} size='small' onClick={toggleMenu}>
        <MdMenu fontSize='1.6rem' />
      </IconButton>
      <div className={`${classes["mobile-menu"]} ${menuIsToggled && classes["is-toggled"]}`}>
        <div className={classes["mobile-menu__header"]}>
          <Image src={LOGO_WHITE} className={classes["web-logo"]} alt='CodeByIO' />
          <IconButton size='small' className={`${classes["close-btn"]} p-0`} onClick={toggleMenu}>
            <MdClose fontSize='1.875rem' />
          </IconButton>
        </div>
        <nav className={classes["mobile-menu__nav"]}>
          <ul>
            <li>
              <a href='#' className={classes["mobile-menu__nav-link"]}>
                Who We Are
              </a>
            </li>
            <Accordion disableGutters component='li' className={classes["mobile-menu__nav-service"]}>
              <AccordionSummary expandIcon={<MdKeyboardArrowDown fontSize='1.875rem' />}>Services</AccordionSummary>
              <AccordionDetails className={classes["mobile-menu__service-sub"]}>
                <ul>
                  <li>
                    <a href=''>Website Development</a>
                  </li>
                  <li>
                    <a href=''>Website Mockup</a>
                  </li>
                  <li>
                    <a href=''>Tech Consultancy</a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <li>
              <a href='#' className={classes["mobile-menu__nav-link"]}>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${classes["mobile-menu__overlay"]} ${menuIsToggled && classes["is-toggled"]}`}></div>
    </>
  );
};

export default MobileNav;
