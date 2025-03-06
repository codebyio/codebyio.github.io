import classes from "./CtaButton.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const CtaButton = ({ message, href = "#", withIcon }) => {
  return (
    <a href={href} className={classes["cta-btn__wrapper"]}>
      <button className={classes["cta-btn"]}>
        {message} {withIcon && <MdKeyboardArrowRight fontSize='1.25rem' />}
      </button>
    </a>
  );
};

export default CtaButton;
