import React, { useState, useEffect } from "react";
import RunAlgButton from "./RunAlgButton";
import { v4 as uuidv4 } from "uuid";


import NumberBar from "./NumberBar"

function Dashboard() {
  const [numberArray, setNumberArray] = useState([
    5,
    3,
    20,
    1,
    8,
    17,
    18,
    14,
    2,
    3,
    1,
    15,
    4,
    5,
    6,
    11,
    2,
    19,
    14,
    12,
    18,
    7
  ]);
  const [indexesScanned, setIndexesScanned] = useState(0)
  

  let max = numberArray.reduce(function(a, b){
    return Math.max(a, b)
  })
 const [maxNumber, setMaxNumber] = useState(max)

  // let renderBars = [];

  function handleUpdateArray(newArray, indexesScanned) {
    console.log("INDEXES SCANNED: ", indexesScanned);
    console.log("SETTING ARRAY!")
    // console.log("NEW ARRAY: ", newArray);
    setIndexesScanned(indexesScanned);
    setNumberArray([...newArray]);
    // renderBars();
    console.log("STATE ARRAY: ", numberArray);
  }

  useEffect(() => {
    //   Render bars when state changes
    console.log("USE EFFECT");
    // renderBars = numberArray.map((num, index) => <NumberBar key={uuidv4()} index={index} />);

  }, [numberArray]);

  //   Render functions
  // Render bars
  // const renderBars = numberArray.map((num, index) => <NumberBar key={uuidv4()} index={index} />);

  // Render numbers
  const renderNumbers = numberArray.map((num, index) => { 
    return (
      <div key={uuidv4()} className="bar-num">{num}</div>
      )
      }
    )

  return (
    <div>
      <div className="header">
        <RunAlgButton
          setNumberArray={setNumberArray}
          numberArray={numberArray}
          handleUpdateArray={handleUpdateArray}
          setMaxNumber={setMaxNumber}
          maxNumber={maxNumber}
        />
      </div>
      <div className="bar-container">
        {
          numberArray.map((num, index) => <NumberBar key={uuidv4()} index={index} indexesScanned={indexesScanned} maxNumber={maxNumber} num={num} />)
        }
        {/* {numberArray.map((num, i) => {
          return (
            <div key={uuidv4()} className="bar">
              1
            </div>
          );
        })} */}
      </div>
      <div className="number-container">
        {renderNumbers}
        {/* {numberArray.map((num, i) => {
          return (
            <div key={uuidv4()} className="bar-num">
              {num}
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Dashboard;
