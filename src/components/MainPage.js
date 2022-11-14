import classes from "./MainPage.module.css";
import MainMenu from "./MainMenu";
import BubbleSort from "./BubbleSort";
import SelectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";
import { useState } from "react";

const MainPage = () => {
  const [page, setPage] = useState('menu');

  function changePage(page) {
    // console.log(page);
    setPage(page);
  }



  let pageToShow;
  if(page === 'menu'){
    pageToShow = <MainMenu onPageChange={changePage}></MainMenu>;
  }
  if(page === 'bubble'){
    pageToShow = <BubbleSort onTriggerMenu={changePage.bind(this, 'menu')}></BubbleSort>;
  }
  if(page === 'selection'){
    pageToShow = <SelectionSort onTriggerMenu={changePage.bind(this, 'menu')}></SelectionSort>;
  }
  if(page === 'merge'){
    pageToShow = <MergeSort onTriggerMenu={changePage.bind(this, 'menu')}></MergeSort>;
  }

  return (
    <div className={classes.main}>
      <div className={classes.titleContainer}>
        <h1>ADS-VISUALIZER</h1>
        <h3>A more visual view of your Algorithms and Data Structures</h3>
      </div>

      <div className={classes.contentContainer}>
        {pageToShow}
      </div>
    </div>
  );
};

export default MainPage;
