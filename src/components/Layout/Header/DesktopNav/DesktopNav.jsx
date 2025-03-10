import Link from "next/link";
import classes from "../../Layout.module.css";
import { MdKeyboardArrowDown, MdTag, MdGroups, MdDesignServices, MdLanguage } from "react-icons/md";

const DesktopNav = () => {
  return (
    <nav className={`${classes["header__nav"]} desktop-view`}>
      <ul>
        <li>
          <Link href='who-we-are' className={classes["header__nav-link"]}>
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
              <a href=''>
                <MdLanguage />
                Website Development
              </a>
            </li>
            <li>
              <a href=''>
                <MdDesignServices />
                Website Mockup
              </a>
            </li>
            <li>
              <a href=''>
                <MdTag />
                Digital Marketing
              </a>
            </li>
            <li>
              <a href=''>
                <MdGroups />
                Tech Consultancy
              </a>
            </li>
          </ul>
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
