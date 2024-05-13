import { useEffect } from "react"


function TitleChange({title}){
    useEffect(function(){
           document.title=title//set the title when the component is update or mount

           return ()=>{//when component is unmount cleanup function reset the title
            document.title="Default title"
           }
        },[title])//dependency array, when the title is change the component will rerender.
    return <>
    <h1>Document Title Change</h1>
    </>
}
export default TitleChange