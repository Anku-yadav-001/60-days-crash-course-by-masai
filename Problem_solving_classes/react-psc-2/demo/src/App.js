import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"
function App() {
  let [products,setProducts]=useState([])
async function getData(){
  try {
    let ans= await axios.get("https://fakestoreapi.com/products")
    setProducts(ans.data)
  } catch (error) {
    console.log(error);
  }
}
  useEffect(function(){
    getData()
  },[])
  return (
    <div className="App" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)"}}>
       {
        products.map((ele)=>(
          <div key={ele.id} style={{border:"2px solid red",width:"80%",textAlign:"center",padding:"10px",margin:"10px",borderRadius:"10px"}}>
              <h4>{ele.title}</h4>
              <p><b>Price:</b> {ele.price}</p>
              <p><b>Category:</b> {ele.category}</p>
              <p><b>Rating:</b> {ele.rating.rate}</p>
              <img src={ele.image} style={{width:"50%"}}/>
          </div>
        ))
       }
    </div>
  );
}

export default App;
