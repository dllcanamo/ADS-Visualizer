import classes from "./MainMenu.module.css";
import MenuItem from "./shared/MenuItem";

const MainMenu = () => {
    return (
        <div className={classes.menuContainer}>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </div>
    );
  };
  
  export default MainMenu;