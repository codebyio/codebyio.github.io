import classes from "./Section.module.css";

const Section = ({ children, size = "small", position }) => {
  return (
    <section
      className={`${classes["section"]} 
      ${size == "small" && classes["small"]} ${size == "medium" && classes["medium"]} ${
        size == "large" && classes["large"]
      } ${position == "center" && classes["center"]}`}
    >
      {children}
    </section>
  );
};

export default Section;
