import classes from "./MainPage.module.css";
import MainMenu from "./MainMenu";

const MainPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.titleContainer}>
        <h1>ADS-VISUALIZER</h1>
        <h3>A more visual view of your Algorithms and Data Structures</h3>
      </div>

      <div className={classes.contentContainer}>
        <MainMenu></MainMenu>
      </div>
    </div>
  );
};

export default MainPage;
