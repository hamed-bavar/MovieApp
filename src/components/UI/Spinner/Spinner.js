import classes from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div className="w-full flex justify-center items-center">
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
