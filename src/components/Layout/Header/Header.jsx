import Image from "next/image";

import classes from "../Layout.module.css";
import LOGO_WHITE from "../../../../public/assets/icon/LOGO_WHITE_TEXT.png";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderBackground from "./HeaderBackground/HeaderBackground";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <HeaderBackground />
      <div className={classes["header__wrapper"]}>
        <Image src={LOGO_WHITE} className={classes["web-logo"]} alt='CodeByIO' />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
