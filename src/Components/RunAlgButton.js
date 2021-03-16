import React, { useState } from "react";

function RunAlgButton({ numberArray, setNumberArray, handleUpdateArray, setMaxNumber, maxNumber }) {

  // handle for a selective sort algorithm
  const handleButtonClicked = async (e) => {

    // Create a copy of the state array
    const newArray = [...numberArray];
    // Define variables
    let min, temp, min_index, scanned, prev_min_index;

    // Create a sleep function to slow down for loop
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };


    // Loop through array 
    for (let n = 0; n < newArray.length; n++) {
      document.getElementById(`bar-${n}`).style.background = "orange";
      
      //  Set min to first index
      min = newArray[n];
      min_index = n;
      // Loop through and match with all other values
      for (let i = n + 1; i < newArray.length; i++) {

        if (newArray[i] < min) {
          min = newArray[i];
          // Check if min_index has a value
          // Set the previous min index
          if(min_index){
            prev_min_index = min_index;
            // Check if min_index changed
            // If it changed, return the color back to blue
            if(prev_min_index != n){
              document.getElementById(`bar-${prev_min_index}`).style.background = 'blue';
            }
          }
          // Set new min_index to new lowest index
          // Change color for that index
          min_index = i;
          document.getElementById(`bar-${i}`).style.background = 'orange';

        }
        // Wait before itterating to next loop
        await sleep(100);
      }

      // Set temp to current itteration of outer loop
      temp = newArray[n];
      // Move the minimun value to the current itteration 
      newArray[n] = min;
      // Set the previous minimum value index to the current loop index
      newArray[min_index] = temp;
      // Set a counter for the number of itteration + 1 to determine the style of that bar
      scanned = n+1;
      // Update array
      handleUpdateArray(newArray, scanned);
    }
  };
  return (
    <div>
      <button onClick={handleButtonClicked}>Start</button>
    </div>
  );
}

export default RunAlgButton;
