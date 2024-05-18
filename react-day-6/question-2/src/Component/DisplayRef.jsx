import { useRef } from "react"

function DisplayRef(){
    let inputRef=useRef(null)
    let newRef=useRef(null)

    function handleInput(){
        if(inputRef.current && newRef.current){
            newRef.current.innerText=inputRef.current.value
        }
    }

    return <>
      <div>
        <input type="text" placeholder="enter name" ref={inputRef} onChange={handleInput}/>
        <p ref={newRef}>Value: </p>
      </div>
    </>
}
export default DisplayRef