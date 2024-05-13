import { useEffect, useState } from "react";
import axios from "axios"
function FetchData(){
        let [users,setUsers]=useState([])

        useEffect(function(){
            async function getData(){
                try {
                    let resp=await axios.get("https://jsonplaceholder.typicode.com/users")//fetch data from the external api
                    setUsers(resp.data)
                } catch (error) {
                    console.log(error);
                }
            }
            getData()//invoke the function inside the useEffect
        },[])//data will render when the component mount
    return <>
     <h1>Fetch data..</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)"}}>
            {
                users.map((ele)=>(
                    <div key={ele.id} style={{border:"2px solid red",borderRadius:"10px",margin:"10px",padding:"10px"}}>
                        <p><strong>Name:</strong> {ele.name}</p>
                        <p><strong>Username:</strong> {ele.username}</p>
                        <p><strong>Mobile:</strong> {ele.phone}</p>
                        <p><strong>Website: </strong>{ele.website}</p>
                        <p><strong>Company:</strong> {ele.company.bs}</p>
                    </div>
                ))
            }
        </div>
    </>
}
export default FetchData;