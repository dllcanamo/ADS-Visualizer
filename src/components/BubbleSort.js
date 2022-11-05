import { useState } from "react";
import SortDisplay from "./shared/SortDisplay";
import SortData from "../constants/SortData";

const BubbleSort = () => {
  const [data, setData] = useState(SortData);

  function bubbleSort() {}

  return (
    <>
      <SortDisplay data={data}></SortDisplay>
    </>
  );
};

export default BubbleSort;
