// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/
     let timer=setInterval(()=>{
        setCount((prev)=>{
            if(prev>=9){
              clearInterval(timer)
            }
          return prev+1
        })
     },1000)

     function cleanupFunction(){
      clearInterval(timer)
     }
     return cleanupFunction
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
