import classes from "./FolderCard.module.css";

const FolderCard = () => {
  return (
    <article className={classes["folder-item"]}>
      <div className={classes["folder-item__wing"]}>
        <span className={classes["folder-item__big-ornament"]}></span>
        <span className={classes["folder-item__ornament"]}></span>
        <span className={classes["folder-item__ornament"]}></span>
      </div>
      <div className={classes["folder-item__body"]}>
        <h4 className={classes["folder-item__title"]}>Title</h4>
        <p className={classes["folder-item__desc"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum mollitia a facere non
          laborum expedita et odio, quam vel accusantium quae aut magnam molestias aliquid vero
          atque eos perferendis. Ipsa?
        </p>
      </div>
    </article>
  );
};

export default FolderCard;
