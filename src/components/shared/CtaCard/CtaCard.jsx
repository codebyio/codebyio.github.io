import Link from "next/link";
import classes from "./CtaCard.module.css";

const CtaCard = ({ title, subtitle, icon, invertColor, href }) => {
  const renderIcon = () => {
    if (icon) {
      return <div className={classes["cta-card__icon-wrapper"]}>{icon}</div>;
    }
  };
  return (
    <article
      className={`${classes["cta-card"]} ${invertColor && classes["inverted"]} ${
        !href && classes["non-cta"]
      }`}
    >
      {href && (
        <Link href={href}>
          {renderIcon()}
          <h2 className={classes["cta-card__title"]}>{title}</h2>
          <p className={classes["cta-card__subtitle"]}>{subtitle}</p>
          <button className={classes["cta-card__button"]}>Learn More</button>
        </Link>
      )}
      {!href && (
        <>
          {renderIcon()}
          <h2 className={classes["cta-card__title"]}>{title}</h2>
          <p className={classes["cta-card__subtitle"]}>{subtitle}</p>
        </>
      )}
    </article>
  );
};

export default CtaCard;
