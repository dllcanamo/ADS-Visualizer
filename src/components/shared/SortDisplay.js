import React from "react";
// import { BarChart, Bar, ResponsiveContainer, XAxis } from "recharts";
import Bar from "./Bar";
import classes from './SortDisplay.module.css';


const SortDisplay = (props) => {
  return (
    <div className={classes.displayContainer}>
      {props.data.map(item => {
        return <Bar key={item.id} height={item.percent}></Bar> ;
      })}
    </div>
  );
};

export default SortDisplay;
