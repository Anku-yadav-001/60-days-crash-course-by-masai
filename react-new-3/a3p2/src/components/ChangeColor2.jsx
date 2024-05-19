// src/components/ChangeColor2.jsx

import { useRef } from "react";

function ChangeColor2() {
  const divRef = useRef(null);

  function getColor(){
    let latters='0123456789ABCDEF'
    let color="#"
    for(let i=0;i<6;i++){
      color=color+latters[Math.floor(Math.random()*16)]
    }
    return color
  }
  const handleChangeColor = () => {
    // complete the missing code
    divRef.current.style.backgroundColor=getColor()
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      >
        Color Box
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default ChangeColor2;
