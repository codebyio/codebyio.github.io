import Image from "next/image";
import classes from "./HeroBanner.module.css";
import CODEBYIO_HERO from "../../../public/assets/images/CODEBYIO_HERO.webp";
import MOUSESCROLL from "../../../public/assets/gif/MOUSESCROLL.gif";

const HeroBanner = ({ title, subtitle, img, video, alt, href, subtitleType }) => {
  return (
    <section className={classes["hero-banner"]}>
      {!video && (
        <Image src={img || CODEBYIO_HERO} className={classes["hero-banner__img"]} alt={alt} />
      )}
      {video && (
        <video autoPlay muted loop className={classes["hero-banner__img"]}>
          <source src='/assets/videos/HOME.mp4' />
        </video>
      )}
      <div>
        <h1 className={classes["hero-banner__title"]}>{title}</h1>
        <h2 className={`${classes["hero-banner__subtitle"]} ${classes[subtitleType]}`}>
          {subtitle}
        </h2>
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
