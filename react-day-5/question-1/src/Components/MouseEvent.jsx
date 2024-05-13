import { useEffect, useState } from "react"

function MouseEvent(){
    let [mousePosition,setMousePosition]=useState({//state for store the positon of mouse pointer
        x:0,
        y:0
    })

    useEffect(function(){
        function mouseSituation(e){//update the position of mouse when the component is mount or update or any event is occur on mouse
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })
            console.log(mousePosition);
        }
        document.addEventListener("mousemove",mouseSituation)
        
        return ()=>{///cleanup function for reset the value when the component is unmount
            document.removeEventListener("mousemove",mouseSituation)
        }
    },[])
   return <>
     <h1>Mouse Position Tracker</h1>
     <p>X postion: {mousePosition.x}</p>
     <p>Y postion: {mousePosition.y}</p>
   </>
}
export default MouseEvent
