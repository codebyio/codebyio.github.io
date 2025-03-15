import Link from "next/link";
import classes from "./CtaButton.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const CtaButton = ({ message, href = "#", withIcon }) => {
  return (
    <Link href={href} className={classes["cta-btn__wrapper"]}>
      <button className={classes["cta-btn"]}>
        {message} {withIcon && <MdKeyboardArrowRight fontSize='1.25rem' />}
      </button>
    </Link>
  );
};

export default CtaButton;
