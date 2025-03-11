import Image from "next/image";
import classes from "./HeroBanner.module.css";
import CODEBYIO_HERO from "../../../public/assets/images/CODEBYIO_HERO.webp";
import MOUSESCROLL from "../../../public/assets/gif/MOUSESCROLL.gif";

const HeroBanner = ({ title, subtitle, img, alt, href }) => {
  return (
    <section className={classes["hero-banner"]}>
      <Image src={img || CODEBYIO_HERO} className={classes["hero-banner__img"]} alt={alt} />
      <div>
        <h1 className={classes["hero-banner__title"]}>{title}</h1>
        <h2 className={classes["hero-banner__subtitle"]}>{subtitle}</h2>
        <Image
          src={MOUSESCROLL}
          className={classes["hero-banner__scroll"]}
          alt='Mouse Scroll Gif'
        />
      </div>
    </section>
  );
};

export default HeroBanner;
