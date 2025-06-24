import classes from "./CtaCard.module.css";

const CtaCard = ({ title, subtitle, icon, invertColor }) => {
  return (
    <article className={`${classes["cta-card"]} ${invertColor && classes["inverted"]}`}>
      <a href=''>
        <div className={classes["cta-card__icon-wrapper"]}>{icon}</div>
        <h2 className={classes["cta-card__title"]}>{title}</h2>
        <p className={classes["cta-card__subtitle"]}>{subtitle}</p>
        <button className={classes["cta-card__button"]}>Learn More</button>
      </a>
    </article>
  );
};

export default CtaCard;
