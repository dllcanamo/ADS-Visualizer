import { useState } from "react";
import SortDisplay from "./shared/SortDisplay";
import SortData from "../constants/SortData";

const BubbleSort = () => {
  const [data, setData] = useState(SortData);

  function mergeSort() {

    let newArray = [...data];
    let results = [];

    for (let i = 0; i < data.length; i++) {
      results.push([newArray[i]]);
    }

    // console.log(results);

    let index = 0;
    let loops = 0;
    let arraySize = 2;
    let mergeIndex = 0;

    let lArr;
    let leftArr;
    let rightArr;
    let finalRightArr;
    let finalMidArray;
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

      console.log('loop :' + loops + ', index: ' + index);
      if(index === 1) {
        // console.log(results);
      }

      // if (results.length === 1 && index !== 0) {
      //   console.log("close");
      //   clearInterval(interval);
      // }

      if(!merging) {
        // copyArray = [...results];
        copyArray = [];
        copyArray = results.slice();
        // console.log(copyArray);
        // console.log(results);
        lArr =
          index === 0
            ? copyArray.slice(index - 1, index)
            : copyArray.slice(0, index);
        // let leftArr = lArr[0] === undefined ? lArr : lArr[0];
        leftArr = lArr;
        // console.log(leftArr);
        // let leftArr = newArray.slice(index-1, index);
        // copyArray = [...results];
        copyArray = [];
        copyArray = results.slice();
        // console.log('right arr before slice');
        // console.log(copyArray);
        rightArr = copyArray.slice(index + 2);
        // console.log('right');
        // console.log(rightArr);
        finalRightArr = [];
        for(let i=0; i<rightArr.length; i++) {
          finalRightArr.push(rightArr[i]);
        }
      }

      // console.log(rightArr);
      // console.log(finalRightArr);
      
      // copyArray = [...results];
      // console.log(copyArray);
      if(!merging) {
        copyArray[index] = copyArray[index] === undefined ? [] : copyArray[index];
        copyArray[index+1] = copyArray[index+1] === undefined ? [] : copyArray[index+1];
                console.log(copyArray[index]);
        // console.log(copyArray[index+1]);

        merging = true;
      }
      // console.log('time to merge');
      // merging = true;
      // alert('merging is true!');
      
      // finalMidArray = [...copyArray[index], ...copyArray[index+1]];
      // finalMidArray.sort((a, b) => {
      //     return a.value - b.value;
      // });
     
      if(merging) {
        leftValue = copyArray[index].length === 0 ? 100 : copyArray[index][0].value;
        rightValue = copyArray[index+1].length === 0 ? 100 : copyArray[index+1][0].value;
        // console.log(copyArray[index]);
        // console.log(copyArray[index+1]);
        if(leftValue === 100 && rightValue === 100) {
          console.log([...results]);
          // clearInterval(interval);
          // realFinalMidArr = [];
          merging = false;
          // alert('merging is false!');
          // if(index === 1) {
          //   clearInterval(interval);
          // }
          index++;
          // realFinalMidArr = [];
          // leftArr = [];
          // finalRightArr = [];
          console.log("exit the loop!");
        } else {
          if(leftValue < rightValue) {
            realFinalMidArr.push(copyArray[index].shift());
          } else {
            realFinalMidArr.push(copyArray[index+1].shift());
          }
        }
        dataToSet = [];
        // rightToSet = finalRightArr.map(item => item[0]);
        rightToSet = [];
        finalRightArr.forEach(element => {
          rightToSet = rightToSet.concat([...element]);
        });
        // let leftToSet = leftArr[0] === undefined ? [] : leftArr[0];
        leftToSet = [];
        leftArr.forEach(element => {
          leftToSet = leftToSet.concat([...element]);
        });
        midRight = rightValue === 100 ? [] : [...copyArray[index + 1]];
        midLeft = leftValue === 100 ? [] : [...copyArray[index]];
        // let midLeft = copyArray[index].map(item => item);
        // let midRight = copyArray[index + 1].map(item => item);
        // dataToSet = [...leftToSet, ...realFinalMidArr, ...copyArray[index], ...copyArray[index+1], ...rightToSet];
        dataToSet = [...leftToSet, ...realFinalMidArr, ...midLeft, ...midRight, ...rightToSet];
        setNew(dataToSet);
        console.log(dataToSet);
        leftToSet = [];
        rightToSet = [];
        midLeft = [];
        midRight = [];
      }
      console.log(realFinalMidArr);

      // results = [...leftArr, finalMidArray, ...finalRightArr];
      results = [...leftArr, realFinalMidArr, ...finalRightArr];
      if(results[0].length === 0) {
        results.shift();
      }
      // console.log(results);
      // setNew([...leftArr, ...realFinalMidArr, ...])

      // if (results.length === 6 && index !== 0) {
      //   console.log("close");
      //   clearInterval(interval);
      // }

      if(leftValue === 100 && rightValue === 100) {
        // clearInterval(interval);
        realFinalMidArr = [];
        leftArr = [];
        finalRightArr = [];
      }
      // if(index === 3) {
      //   clearInterval(interval);
      // }
      console.log("exit the loop!");

      // clearInterval(interval);

      // index++;
      // console.log(index*arraySize , data.length);
      // console.log(index*arraySize >= data.length);
      if (index*arraySize >= data.length) {
        console.log('looping up!');
        index = 0;
        arraySize = arraySize*2;
        loops++;
        // console.log("close");
        // clearInterval(interval);
        // clearInterval(interval);
        // if (results.length === 1) {
        // if (results.length === data.length) {
          if (loops === Math.ceil(SortData.length/2)) {
          console.log("close");
          clearInterval(interval);
        }
      }
    }, 25);
  }

  function bubbleSort() {
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
      }
    }, 25);
  }

  function selectionSort() {
    let newArray = [...data];
    let fIndex = 0;
    let sIndex = 1;
    let iOM = 0;

    let interval = setInterval(() => {
      // console.log(fIndex, sIndex);
      console.log(newArray[sIndex], newArray[iOM]);
      if (newArray[sIndex].value < newArray[iOM].value) {
        iOM = sIndex;
      }
      console.log(sIndex);
      sIndex++;
      if (sIndex >= data.length) {
        console.log("triggered!");
        console.log(iOM, fIndex);
        if (iOM !== fIndex) {
          console.log("switch!");
          let lesser = newArray[iOM];
          newArray[iOM] = newArray[fIndex];
          newArray[fIndex] = lesser;
        }
        setNew(newArray);
        console.log(newArray);
        fIndex++;
        iOM = fIndex;
        sIndex = fIndex + 1;
      }
      if (fIndex >= data.length - 1) {
        clearInterval(interval);
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

    console.log(newArray);
    setData(newArray);
  }

  return (
    <>
      <SortDisplay data={data}></SortDisplay>
      <button onClick={shuffle}>RANDOMIZE</button>
      <button onClick={bubbleSort}>BUBBLE SORT</button>
      <button onClick={selectionSort}>SELECTION SORT</button>
      <button onClick={mergeSort}>MERGE SORT</button>
    </>
  );
};

export default BubbleSort;
