import React from 'react'
import { v4 as uuidv4 } from "uuid";

function NumberBar({index, indexesScanned, maxNumber, num}) {
   
   let barLength = (num/maxNumber) * 100;
   console.log(barLength);

   if(index < indexesScanned){
      return (
         <div id={`bar-${index}`} className="scanned" style={{height: barLength}}>
          
         </div>
      )
   } else {
      return (
        <div id={`bar-${index}`} style={{height: barLength}}>
          
         </div>
      )
   }

}

export default NumberBar
