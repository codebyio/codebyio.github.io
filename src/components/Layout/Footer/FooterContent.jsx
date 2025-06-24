import Link from "next/link";
import Image from "next/image";

import LOGO_COLOR from "../../../../public/assets/icon/LOGO_COLOR_TEXT.png";
import LOGO_WHITE from "../../../../public/assets/icon/LOGO_WHITE_TEXT.png";
import classes from "../Layout.module.css";

const FooterContent = ({ variant }) => {
  return (
    <footer className={`${classes["footer"]} ${variant == "contact" && classes["contact-us"]}`}>
      <div className={classes["footer__upper"]}>
        <div>
          <Image
            src={variant == "contact" ? LOGO_WHITE : LOGO_COLOR}
            className={classes["web-logo"]}
            alt='CodeByIO'
          />
          <p className={`${classes["footer-desc"]}`}>
            We are your partner for handcrafted, high-performance web solutions.
          </p>
        </div>
        <div>
          <nav className={classes["footer__nav"]}>
            <ul>
              <li>Services</li>
              <li>
                <a href='#' className={classes["footer__nav-link"]}>
                  Website Development
                </a>
              </li>
              <li>
                <a href='#' className={classes["footer__nav-link"]}>
                  Website Mockup
                </a>
              </li>
              <li>
                <a href='#' className={classes["footer__nav-link"]}>
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href='#' className={classes["footer__nav-link"]}>
                  Tech Consultancy
                </a>
              </li>
            </ul>
            <ul>
              <li>Company</li>
              <li>
                <Link href='/who-we-are' className={classes["footer__nav-link"]}>
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href='/contact-us' className={classes["footer__nav-link"]}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${classes["footer__bottom"]}`}>© CodeByIO 2024 — All Rights Reserved</div>
    </footer>
  );
};

export default FooterContent;
