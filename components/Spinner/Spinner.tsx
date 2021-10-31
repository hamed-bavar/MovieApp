import classes from "./spinner.module.scss";
const Spinner = () => {
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
