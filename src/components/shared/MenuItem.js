import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  function itemClick(page) {
    props.onItemClick(page);
  }

  return (
    <div className={classes.menuItem}>
      <div className={classes.titleDescContainer}>
        <div className={classes.title}>
          <div>
            <h3>{props.title}</h3>
          </div>
        </div>
        <div className={classes.category}>
          <div>
            <p className={classes.catLabel}>Category:</p>
            <p>{props.category}</p>
          </div>
        </div>
      </div>
      <div className={classes.goContainer}>
        <div onClick={itemClick.bind(this, props.page)}>
          <p className={classes.goText}>Try It!</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
