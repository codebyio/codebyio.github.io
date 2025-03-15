"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import IconButton from "@mui/material/IconButton";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { MdMenu, MdClose, MdKeyboardArrowDown } from "react-icons/md";
import classes from "../../Layout.module.css";
import LOGO_WHITE from "../../../../../public/assets/icon/LOGO_WHITE.png";

const MobileNav = () => {
  const pathname = usePathname();
  const [menuIsToggled, setMenuIsToggled] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsToggled(true);
  };

  const handleCloseMenu = () => {
    setMenuIsToggled(false);
  };

  useEffect(() => {
    setMenuIsToggled(false);
  }, []);

  useEffect(() => {
    handleCloseMenu();
  }, [pathname]);

  return (
    <div className='mobile-view'>
      <IconButton
        className={`${classes["mobile-menu-toggle"]} p-0`}
        size='small'
        onClick={handleOpenMenu}
      >
        <MdMenu fontSize='1.6rem' />
      </IconButton>
      <div className={`${classes["mobile-menu"]} ${menuIsToggled && classes["is-toggled"]}`}>
        <div className={classes["mobile-menu__header"]}>
          <Image src={LOGO_WHITE} className={classes["web-logo"]} alt='CodeByIO' />
          <IconButton
            size='small'
            className={`${classes["close-btn"]} p-0`}
            onClick={handleCloseMenu}
          >
            <MdClose fontSize='1.875rem' />
          </IconButton>
        </div>
        <nav className={classes["mobile-menu__nav"]}>
          <ul>
            <li>
              <Link href='/who-we-are' className={classes["mobile-menu__nav-link"]}>
                Who We Are
              </Link>
            </li>
            <Accordion
              disableGutters
              component='li'
              className={classes["mobile-menu__nav-service"]}
            >
              <AccordionSummary expandIcon={<MdKeyboardArrowDown fontSize='1.875rem' />}>
                Services
              </AccordionSummary>
              <AccordionDetails className={classes["mobile-menu__service-sub"]}>
                <ul>
                  <li>
                    <Link href='/services/website-development'>Website Development</Link>
                  </li>
                  <li>
                    <Link href='/services/website-mockup'>Website Mockup</Link>
                  </li>
                  <li>
                    <Link href='/services/tech-consultancy'>Tech Consultancy</Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <li>
              <Link href='/contact-us' className={classes["mobile-menu__nav-link"]}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`${classes["mobile-menu__overlay"]} ${menuIsToggled && classes["is-toggled"]}`}
      ></div>
    </div>
  );
};

export default MobileNav;
