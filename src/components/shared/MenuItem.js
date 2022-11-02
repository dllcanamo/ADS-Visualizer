import classes from "./MenuItem.module.css";

const MenuItem = () => {
  return (
    <div className={classes.menuItem}>
      <div className={classes.titleDescContainer}></div>
      <div className={classes.goContainer}>
        <div>
          <p className={classes.goText}>Try It!</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
