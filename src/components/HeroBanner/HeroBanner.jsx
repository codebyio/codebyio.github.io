import Image from "next/image";
import classes from "./HeroBanner.module.css";

const HeroBanner = ({ title, subtitle, img, alt }) => {
  return (
    <section className={classes["hero-banner"]}>
      <Image src={img} className={classes["hero-banner__img"]} alt={alt} />
      <div>
        <h1 className={classes["hero-banner__title"]}>{title}</h1>
        <h2 className={classes["hero-banner__subtitle"]}>{subtitle}</h2>
      </div>
    </section>
  );
};

export default HeroBanner;
