import { useState } from "react";
import SortDisplay from "./shared/SortDisplay";
import SortData from "../constants/SortData";
import classes from "./Sort.module.css";

const BubbleSort = (props) => {
  const [data, setData] = useState(SortData);
  const [canRandom, setCanRandom] = useState(true);

  function bubbleSort() {
    setCanRandom(false);
    let newArray = [...data];

    let fIndex = 0;
    let sIndex = 0;

    let interval = setInterval(() => {
      if (newArray[sIndex].value > newArray[sIndex + 1].value) {
        const lesser = newArray[sIndex + 1];
        newArray[sIndex + 1] = newArray[sIndex];
        newArray[sIndex] = lesser;
      }
      setNew(newArray);
      sIndex++;
      if (sIndex >= data.length - fIndex - 1) {
        fIndex++;
        sIndex = 0;
      }
      if (fIndex >= data.length - 1) {
        clearInterval(interval);
        setCanRandom(true);
      }
    }, 25);
  }

  function setNew(newArray) {
    let newArrayFinal = [...newArray];
    setData(newArrayFinal);
  }

  function shuffle() {
    let newArray = [...data];
    let index = data.length;
    let randomIndex;

    while (index !== 0) {
      randomIndex = Math.floor(Math.random() * index);
      index--;

      [newArray[index], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[index],
      ];
    }

    // console.log(newArray);
    setData(newArray);
  }

  function triggerMenu() {
    props.onTriggerMenu();
  }

  return (
    <>
      <SortDisplay data={data}></SortDisplay>
      <div className={classes.remoteContainer}>
        <div disabled={!canRandom} onClick={shuffle}>
          <p>RANDOMIZE</p>
        </div>
        <div onClick={bubbleSort}>
          <p>BUBBLE SORT</p>
        </div>
        <div onClick={triggerMenu}>
          <p>Back to Main Menu</p>
        </div>
      </div>
    </>
  );
};

export default BubbleSort;
