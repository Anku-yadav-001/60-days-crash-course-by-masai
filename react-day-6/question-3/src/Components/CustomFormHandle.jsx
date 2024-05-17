import { useRef, useState } from "react"


function CustomeFormHandle(){
    let ref1=useRef(null)
    let ref2=useRef(null)
    let [error,setErr]=useState("")
    let [msg,setMas]=useState("")
 
    function handleSubmit(e){
        e.preventDefault()
        let formData={
            input1:ref1.current.value,
            input2:ref2.current.value
        }
        if(formData.input1==""){
            setErr("Input field 1 can't be empty")
            return 
        }
        else{
            setErr("Valid")
        }
        if(formData.input2.length<5){
            setMas("at least 5 charactors in field 2")
        }
        else{
            setMas("Valid")
        }
    }

    return <>
    <div>
        <form onSubmit={handleSubmit}>
        <input ref={ref1} type="text" placeholder="enter anything"/>
        <p>{error}</p>
        <input ref={ref2} type="text" placeholder="enter at least 8 characters"/>
        <p>{msg}</p>
         <input type="submit" value="Submit" />
        </form>
    </div>
    </>
}
export default CustomeFormHandle