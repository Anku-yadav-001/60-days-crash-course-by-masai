import { useState } from 'react'

function App() {
    let [username,setUsername]=useState("")
    let [age,setAge]=useState("")
    let [address,setAddress]=useState("")
    let [allData,setAllData]=useState([])

  function handleSubmit(e){
      e.preventDefault()
      setAllData(prev=>[...prev,{
        username,
        age,
        address
      }])
      
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='enter username'/>
          <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='enter age'/>
          <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='enter address'/>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        {
          allData.map((ele,ind)=>(
            <div key={ind}>
                <h4><strong>Name:</strong>{ele.username}</h4>
                <p><strong>Age: </strong>{ele.age}</p>
                <p><strong>Address: </strong>{ele.address}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
