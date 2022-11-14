import { useState } from "react";
import SortDisplay from "./shared/SortDisplay";
import SortData from "../constants/SortData";
import classes from "./Sort.module.css";

const MergeSort = (props) => {
  const [data, setData] = useState(SortData);
  const [canRandom, setCanRandom] = useState(true);

  function mergeSort() {
    setCanRandom(false);
    let newArray = [...data];
    let results = [];

    for (let i = 0; i < data.length; i++) {
      results.push([newArray[i]]);
    }

    let index = 0;
    let loops = 0;
    let arraySize = 2;
    let leftArr;
    let rightArr;
    let finalRightArr;
    let merging = false;
    let copyArray;
    let realFinalMidArr = [];
    let rightValue;
    let leftValue;
    let rightToSet = [];
    let leftToSet = [];
    let dataToSet = [];
    let midLeft = [];
    let midRight = [];
    let interval = setInterval(() => {
      if (!merging) {
        copyArray = [];
        copyArray = results.slice();
        leftArr =
          index === 0
            ? copyArray.slice(index - 1, index)
            : copyArray.slice(0, index);
        copyArray = [];
        copyArray = results.slice();
        rightArr = copyArray.slice(index + 2);
        finalRightArr = [];
        for (let i = 0; i < rightArr.length; i++) {
          finalRightArr.push(rightArr[i]);
        }
      }

      if (!merging) {
        copyArray[index] =
          copyArray[index] === undefined ? [] : copyArray[index];
        copyArray[index + 1] =
          copyArray[index + 1] === undefined ? [] : copyArray[index + 1];
        merging = true;
      }

      if (merging) {
        leftValue =
          copyArray[index].length === 0 ? 100 : copyArray[index][0].value;
        rightValue =
          copyArray[index + 1].length === 0
            ? 100
            : copyArray[index + 1][0].value;
        if (leftValue === 100 && rightValue === 100) {
          merging = false;
          index++;
        } else {
          if (leftValue < rightValue) {
            realFinalMidArr.push(copyArray[index].shift());
          } else {
            realFinalMidArr.push(copyArray[index + 1].shift());
          }
        }
        dataToSet = [];

        rightToSet = [];
        finalRightArr.forEach((element) => {
          rightToSet = rightToSet.concat([...element]);
        });

        leftToSet = [];
        leftArr.forEach((element) => {
          leftToSet = leftToSet.concat([...element]);
        });
        midRight = rightValue === 100 ? [] : [...copyArray[index + 1]];
        midLeft = leftValue === 100 ? [] : [...copyArray[index]];
        dataToSet = [
          ...leftToSet,
          ...realFinalMidArr,
          ...midLeft,
          ...midRight,
          ...rightToSet,
        ];
        setNew(dataToSet);
        leftToSet = [];
        rightToSet = [];
        midLeft = [];
        midRight = [];
      }

      results = [...leftArr, realFinalMidArr, ...finalRightArr];
      if (results[0].length === 0) {
        results.shift();
      }

      if (leftValue === 100 && rightValue === 100) {
        realFinalMidArr = [];
        leftArr = [];
        finalRightArr = [];
      }

      if (index * arraySize >= data.length) {
        // console.log("looping up!");
        index = 0;
        arraySize = arraySize * 2;
        loops++;
        if (SortData.length < Math.pow(2, loops) + 1) {
          clearInterval(interval);
          setCanRandom(true);
        }
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
        <div onClick={mergeSort}>
          <p>MERGE SORT</p>
        </div>
        <div onClick={triggerMenu}>
          <p>Back to Main Menu</p>
        </div>
      </div>
    </>
  );
};

export default MergeSort;
