import Image from "next/image";
import classes from "./HeroBanner.module.css";
import CODEBYIO_HERO from "../../../public/assets/images/CODEBYIO_HERO.webp";
import CtaButton from "../shared/CtaButton/CtaButton";

const HeroBanner = ({ title, subtitle, img, alt, href }) => {
  return (
    <section className={classes["hero-banner"]}>
      <Image src={img || CODEBYIO_HERO} className={classes["hero-banner__img"]} alt={alt} />
      <div>
        <h1 className={classes["hero-banner__title"]}>{title}</h1>
        <h2 className={classes["hero-banner__subtitle"]}>{subtitle}</h2>
        {href && <CtaButton message='Start Your Project' href={href} />}
      </div>
    </section>
  );
};

export default HeroBanner;
