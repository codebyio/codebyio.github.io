import classes from "./StepList.module.css";

const StepList = ({ steps }) => {
  return (
    <div className={classes["steplist"]}>
      {steps &&
        steps.map((step, index) => {
          return (
            <article className={classes["steplist__item"]} key={`${step.title}_${index + 1}`}>
              <div className={classes["steplist__index"]}>
                <span className={classes["steplist__index-value"]}>{index + 1}</span>
              </div>
              <div className={classes["steplist__item-content"]}>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default StepList;
