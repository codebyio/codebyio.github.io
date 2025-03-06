import Image from "next/image";

import LOGO_COLOR from "../../../../public/assets/icon/LOGO_COLOR_TEXT.png";
import classes from "../Layout.module.css";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer__upper"]}>
        <div>
          <Image src={LOGO_COLOR} className={classes["web-logo"]} alt='CodeByIO' />
          <p className='text-primary-g'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi obcaecati dolorem
            eligendi, aliquam quisquam quod reiciendis, iure ex pariatur fugiat natus earum harum
            nostrum illo, aut nihil expedita error consequatur?
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
                <a href='#' className={classes["footer__nav-link"]}>
                  Who We Are
                </a>
              </li>
              <li>
                <a href='#' className={classes["footer__nav-link"]}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${classes["footer__bottom"]} text-primary`}>
        © CodeByIO 2024 — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
