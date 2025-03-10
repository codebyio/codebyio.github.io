import classes from "./WindowCard.module.css";
import { PiTreeStructure } from "react-icons/pi";

const WindowCard = ({ title, body, invertColor }) => {
  return (
    <article className={`${classes["window-card"]} ${invertColor && classes["inverted"]}`}>
      <div className={classes["window-card__tool"]}>
        <div>
          <p className={classes["window-card__tool-label"]}>
            <PiTreeStructure fontSize='1.15rem' />
            System
          </p>
        </div>
        <div>
          <span className={classes["min"]}></span>
          <span className={classes["max"]}></span>
          <span className={classes["close"]}>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <div className={classes["window-card__content"]}>
        <h2 className={classes["window-card__title"]}>{title}</h2>
        <p className={classes["window-card__body"]}>{body}</p>
      </div>
    </article>
  );
};

export default WindowCard;
