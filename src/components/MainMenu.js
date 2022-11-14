import classes from "./MainMenu.module.css";
import MenuItem from "./shared/MenuItem";

const MainMenu = (props) => {
  function triggerPageChange(page) {
    props.onPageChange(page);
  }

  return (
    <div className={classes.menuContainer}>
      <MenuItem
        title={"Bubble Sort"}
        category={"Sorting"}
        onItemClick={triggerPageChange}
        page={"bubble"}
      ></MenuItem>
      <MenuItem
        title={"Selection Sort"}
        category={"Sorting"}
        onItemClick={triggerPageChange}
        page={"selection"}
      ></MenuItem>
      <MenuItem
        title={"Merge Sort"}
        category={"Sorting"}
        onItemClick={triggerPageChange}
        page={"merge"}
      ></MenuItem>
    </div>
  );
};

export default MainMenu;
