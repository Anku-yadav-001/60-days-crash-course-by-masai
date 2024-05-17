import { useRef } from "react"

function DynamicFormInput(){
    let inputRef1=useRef(null)// 4 ref variables to store the value of ref
    let inputRef2=useRef(null)
    let inputRef3=useRef(null)
    let inputRef4=useRef(null)

    function handleKey(e,ref){
        if(e.key==="Tab"){//only when the `Tab` key is press
            e.preventDefault()
            console.log("Working....");
            ref.current.focus()//focus method just focus on the same input 
        }
    }
    return <>
          <div>
            <input ref={inputRef1} type="text" onKeyDown={(e)=>handleKey(e,inputRef2)} placeholder="input field 1" />
            <input ref={inputRef2} type="text" onKeyDown={(e)=>handleKey(e,inputRef3)} placeholder="input field 2" />
            <input ref={inputRef3} type="text" onKeyDown={(e)=>handleKey(e,inputRef4)} placeholder="input field 3" />
            <input ref={inputRef4} type="text" onKeyDown={(e)=>handleKey(e,inputRef1)} placeholder="input field 4" />

           
          </div>
    </>
}
export default DynamicFormInput