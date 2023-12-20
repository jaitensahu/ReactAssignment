import logo from "./logo.svg";
import "./App.css";
import ColorContainer from "./components/ColorContainer";
import {useState} from 'react'

function App() {
  let colorsObj = [
    { color: "Pink", colorCode: "#FF6563" },
    { color: "Grey", colorCode: "#333333" },
    { color: "Black", colorCode: "#000000" },
    { color: "Green", colorCode: "#38BB15" },
    { color: "Red", colorCode: "#C90B0B" },
    { color: "Orange", colorCode: "#FF7F00" },
    { color: "Yellow", colorCode: "#FFF500" },
    { color: "Silver", colorCode: "#CCCCCC" },
    { color: "Purple", colorCode: "#7E40A1" },
    { color: "Brown", colorCode: "#C14811" },
  ];
  // let [filterD, setFilterData]=useState(colorsObj);
  // function filter() {
  //   let filteredData = colorsObj.filter((val) => {
  //     return val.color == "green";
  //   });
  //   console.log(filteredData);
  //   setFilterData(filteredData);
  // }

  return (
    <div className="App">
      {colorsObj.map((ele, idx) => {
        return <ColorContainer {...ele} />;
      })}
      
    </div>
  );
}

export default App;
