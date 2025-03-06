import classes from "./CtaButton.module.css";

const CtaButton = ({ message, href = "#" }) => {
  return (
    <a href={href}>
      <button className={classes["cta-btn"]}>{message}</button>
    </a>
  );
};

export default CtaButton;
