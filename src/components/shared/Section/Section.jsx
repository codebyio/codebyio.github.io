import Image from "next/image";
import classes from "./Section.module.css";

const Section = ({
  children,
  title,
  size = "small",
  position,
  fullscreen = false,
  image,
  fillBg,
  serviceBanner,
}) => {
  return (
    <section
      className={`${classes["section"]} 
      ${size == "small" && classes["small"]} ${size == "medium" && classes["medium"]} ${
        size == "large" && classes["large"]
      } ${position == "center" && classes["center"]}
      ${fullscreen && classes["fullscreen"]}
      ${fillBg && classes["fill-bg"]}
      ${serviceBanner && classes["service-banner"]}
      `}
    >
      <div className={classes["section-content"]}>
        {!image && (
          <>
            {title && <h2 className={classes["section-title"]}>{title}</h2>}
            {children}
          </>
        )}
        {image && (
          <>
            <div>
              {title && <h2 className={classes["section-title"]}>{title}</h2>}
              {children}
            </div>
            <Image src={image} alt={title} />
          </>
        )}
      </div>
    </section>
  );
};

export default Section;
