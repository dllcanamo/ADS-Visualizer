import { useState } from "react";
import SortDisplay from "./shared/SortDisplay";
import SortData from "../constants/SortData";
import classes from "./Sort.module.css";

const SelectionSort = (props) => {
  const [data, setData] = useState(SortData);
  const [canRandom, setCanRandom] = useState(true);

  function selectionSort() {
    setCanRandom(false);
    let newArray = [...data];
    let fIndex = 0;
    let sIndex = 1;
    let iOM = 0;

    let interval = setInterval(() => {
      // console.log(fIndex, sIndex);
      if (newArray[sIndex].value < newArray[iOM].value) {
        iOM = sIndex;
      }
      sIndex++;
      if (sIndex >= data.length) {
        // console.log("triggered!");
        if (iOM !== fIndex) {
          // console.log("switch!");
          let lesser = newArray[iOM];
          newArray[iOM] = newArray[fIndex];
          newArray[fIndex] = lesser;
        }
        setNew(newArray);
        // console.log(newArray);
        fIndex++;
        iOM = fIndex;
        sIndex = fIndex + 1;
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
        <div onClick={selectionSort}>
          <p>SELECTION SORT</p>
        </div>
        <div onClick={triggerMenu}>
          <p>Back to Main Menu</p>
        </div>
      </div>
    </>
  );
};

export default SelectionSort;