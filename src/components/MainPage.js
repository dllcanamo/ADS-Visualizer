import classes from "./MainPage.module.css";
import MainMenu from "./MainMenu";
import BubbleSort from "./BubbleSort";

const MainPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.titleContainer}>
        <h1>ADS-VISUALIZER</h1>
        <h3>A more visual view of your Algorithms and Data Structures</h3>
      </div>

      <div className={classes.contentContainer}>
        {/* <MainMenu></MainMenu> */}
        <BubbleSort></BubbleSort>
      </div>
    </div>
  );
};

export default MainPage;
