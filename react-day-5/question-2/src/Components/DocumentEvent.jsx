import { useEffect } from "react"

function DocumentEvent(){

    useEffect(() => {
        const handleScroll = () => {
          console.log('Scrolled!');
        };
    
        window.addEventListener('scroll', handleScroll);//add scroll event on window

      return () => {//cleanup function 
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency  effect run only once when mount
    
    return <>
        <h1>Document Event</h1>
      
    </>
}
export default DocumentEvent