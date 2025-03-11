import classes from "./Section.module.css";

const Section = ({ children, title, size = "small", position }) => {
  return (
    <section
      className={`${classes["section"]} 
      ${size == "small" && classes["small"]} ${size == "medium" && classes["medium"]} ${
        size == "large" && classes["large"]
      } ${position == "center" && classes["center"]}`}
    >
      {title && <h2 className={classes["section-title"]}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
