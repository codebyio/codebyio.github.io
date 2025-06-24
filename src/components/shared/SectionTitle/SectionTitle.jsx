import classes from "./SectionTitle.module.css";

const SectionTitle = ({ title, subtitle, horizontalStyle }) => {
  return (
    <div
      className={`${classes["section-title-wrapper"]} ${
        horizontalStyle && classes["horizontal-style"]
      }`}
    >
      <h2 className={classes["section-title"]} dangerouslySetInnerHTML={{ __html: title }}></h2>
      {subtitle && <p className={classes["section-subtitle"]}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
