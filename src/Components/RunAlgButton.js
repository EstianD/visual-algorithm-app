import React, { useState } from "react";

function RunAlgButton({ numberArray, setNumberArray, handleUpdateArray, setMaxNumber, maxNumber }) {

  // setMaxNumber()
  

  const handleButtonClicked = async (e) => {

    const newArray = [...numberArray];
    let min, temp, min_index, scanned, prev_min_index;

    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    // [2, 5, 1, 3, 7]
    //  console.log("Number Array: ", numberArray);
    for (let n = 0; n < newArray.length; n++) {
      document.getElementById(`bar-${n}`).style.background = "orange";
      // bar.
      //  Set min to first index
      min = newArray[n];
      min_index = n;
      // Loop through and match with all other values
      for (let i = n + 1; i < newArray.length; i++) {
        console.log("INNER COUNT: ", i)
        // let searchBar = document.getElementById(`bar-${i}`);
        // searchBar.classList.add('searching');
        if (newArray[i] < min) {
          min = newArray[i];
          if(min_index){
            prev_min_index = min_index;
            if(prev_min_index != n){
              document.getElementById(`bar-${prev_min_index}`).style.background = 'blue';
            }
            
          }
          min_index = i;
          document.getElementById(`bar-${i}`).style.background = 'orange';
          

          // let minBar = document.getElementById(`bar-${min_index}`);
          // minBar.style.background = 'green';
        }
        await sleep(200);

      }

      temp = newArray[n];
      newArray[n] = min;
      newArray[min_index] = temp;
      // console.log("ARRAY: ", newArray);

      // setNumberArray(newArray)
      scanned = n+1;
      handleUpdateArray(newArray, scanned);
      console.log("COUNT: ", n)
  
      // console.log(numberArray);
    }
    // setNumberArray(newArray)
    console.log("DONE: ", newArray);

    //
  };
  return (
    <div>
      <button onClick={handleButtonClicked}>Start</button>
    </div>
  );
}

export default RunAlgButton;
