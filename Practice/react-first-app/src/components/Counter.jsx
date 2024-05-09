
import {useState} from "react";
function Counter(){
    let [count,setCount]=useState(0)
    return <>
        <h2>Counter component</h2>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>INC</button>
        <button onClick={()=>setCount(count-1)}>DEC</button>
    </>
}
export default Counter;