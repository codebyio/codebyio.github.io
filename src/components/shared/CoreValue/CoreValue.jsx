import classes from "./CoreValue.module.css";

const CoreValue = ({ title, description }) => {
  return (
    <article className={classes["core-value"]}>
      <div className={classes["core-value__title"]}>
        <span>{title}</span>
      </div>
      <div className={classes["core-value__description"]}>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default CoreValue;
