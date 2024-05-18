import { useRef } from "react"
function ChangeColor(){
    let colorRef=useRef(null)
    
    function getNewColor(){
        let latters='0123456789ABCDEF'
        let color="#"
        for(let i=0;i<6;i++){
            color=color+latters[Math.floor(Math.random()*16)]
        }
        return color
    }

    function changeNewColor(){
        if(colorRef.current){
            colorRef.current.style.backgroundColor=getNewColor()
        }
    }
    return <>
       <div style={{width:"20%",height:"10vh",border:"2px solid"}} ref={colorRef}>

       </div>
       <button onClick={changeNewColor}>Change Color</button>
    </>
}
export default ChangeColor