import logo from './logo.svg';
import './App.css';
import {useState} from "react"
function App() {
  let [count,setCount]=useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count: {count}</h1>
       <div className='container'>
        <button onClick={()=>setCount(count+1)}>Increase count</button>
        <button onClick={()=>setCount(count-1)}>Decrease count</button>
       </div>
      </header>
    </div>
  );
}

export default App;
