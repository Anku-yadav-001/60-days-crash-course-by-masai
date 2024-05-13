import { useEffect } from "react"
import { useState } from "react"


function Timer(){
    let [time,setTime]=useState(0)

   useEffect(function(){
    function TimerComponent(){
        const timer=setInterval(()=>{
            setTime(prev=>prev+1)
        },1000)
   
    return ()=>{
        clearInterval(timer)//cleanup function clear timer when the component will unmount
    }
}
  TimerComponent()
   },[])//no dependency, it run only once when the component will mount
    return <>
       <h1>Timer Component</h1>
       <p>Timer:{time}</p>
    </>
}
export default Timer