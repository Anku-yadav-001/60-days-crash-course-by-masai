import { useRef, useState } from "react"

function RealTimevalidation(){
        let inputRef=useRef(null)
        let [isValid,setValid]=useState(false)

        function handleChange(){
            setValid(inputRef.current.value.length>=8)
        }
    return <>
      <div>
        <input ref={inputRef} type="text" onChange={handleChange} style={{border: isValid ? "5px solid green":"5px solid red"}} placeholder="enter atleast 8 characters" />
        {isValid?<p style={{color:"green"}}>Valid input</p>:<p style={{color:"red"}}>Invald input</p>}
      </div>
    </>
}
export default RealTimevalidation