import Link from "next/link";
import classes from "../../Layout.module.css";
import { MdKeyboardArrowDown, MdGroups, MdDesignServices, MdLanguage } from "react-icons/md";
import { LuHandshake } from "react-icons/lu";
import { FaHandshakeSimple } from "react-icons/fa6";

const DesktopNav = () => {
  return (
    <nav className={`${classes["header__nav"]} desktop-view`}>
      <ul>
        <li>
          <Link href='/who-we-are' className={classes["header__nav-link"]}>
            Who We Are
          </Link>
        </li>
        <li className={classes["header__nav-parent"]}>
          <a href='#' className={classes["header__nav-link"]}>
            Services
            <MdKeyboardArrowDown fontSize='1.25rem' />
          </a>
          <ul className={classes["header__sub-menu"]}>
            <li>
              <Link href='/services/website-development'>
                <MdLanguage />
                Website Development
              </Link>
            </li>
            <li>
              <Link href='/services/website-mockup'>
                <MdDesignServices />
                Website Mockup
              </Link>
            </li>
            <li>
              <Link href='/services/tech-consultancy'>
                <MdGroups />
                Tech Consultancy
              </Link>
            </li>
            <li>
              <Link href='/services/onestop-solution'>
                <FaHandshakeSimple />
                One-Stop Solution
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href='/contact-us' className={classes["header__nav-link"]}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
