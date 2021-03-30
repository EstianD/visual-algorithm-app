import React, { useRef, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";

const NumberBar = React.forwardRef(({index, indexesScanned, maxNumber, num}, ref) => {
   let barLength = (num/maxNumber) * 100;
   
   const elRef = useRef(null);

   useEffect(() => {
      console.log(elRef.current)
   }, [])

   if(index < indexesScanned){
      return (
         <div id={`bar-${index}`} className="scanned" style={{height: barLength}} ref={elRef}>
          
         </div>
      )
   } else {
      return (
        <div id={`bar-${index}`} style={{height: barLength}} ref={elRef}>
          
         </div>
      )
   }
})

// function NumberBar({index, indexesScanned, maxNumber, num}) {
   
//    let barLength = (num/maxNumber) * 100;
//    console.log(barLength);

//    if(index < indexesScanned){
//       return (
//          <div id={`bar-${index}`} className="scanned" style={{height: barLength}}>
          
//          </div>
//       )
//    } else {
//       return (
//         <div id={`bar-${index}`} style={{height: barLength}}>
          
//          </div>
//       )
//    }

// }

export default NumberBar
