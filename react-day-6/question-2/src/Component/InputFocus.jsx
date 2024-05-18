import { useEffect } from "react"
import { useRef } from "react"

function InputFocus(){
      let inputRef=useRef(null)
      function focusInput(){
        inputRef.current.focus()
      }
      useEffect(function(){
                focusInput()
      },[])
    
    return <>
    <div>
        <label>name: </label>
        <input type="text" ref={inputRef} placeholder="enter name" />
    </div>
    </>
}
export default InputFocus