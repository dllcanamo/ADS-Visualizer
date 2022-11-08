import classes from "./Bar.module.css";

function Bar(props) {
  const barStyles = {
    width: "10px",
    height: props.height,
    backgroundColor: "#8884d8",
    margin: "2.5px"
  };

  return <div style={barStyles}></div>;
}

export default Bar;
