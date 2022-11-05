import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";


const SortDisplay = (props) => {
  return (
    <ResponsiveContainer width="100%" aspect={4}>
      <BarChart width={150} height={40} data={props.data} barCategoryGap={"10%"}>
        <Bar dataKey="id" fill="#8884d8" barSize={20}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SortDisplay;
