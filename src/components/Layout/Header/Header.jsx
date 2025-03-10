import Link from "next/link";
import Image from "next/image";

import classes from "../Layout.module.css";
import LOGO_WHITE from "../../../../public/assets/icon/LOGO_WHITE_TEXT.png";
import HeaderBackground from "./HeaderBackground/HeaderBackground";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <HeaderBackground />
      <div className={classes["header__wrapper"]}>
        <Link href='/'>
          <Image src={LOGO_WHITE} className={classes["web-logo"]} alt='CodeByIO' />
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
