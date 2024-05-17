import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
function Users(){
       let [users,setUsers]=useState([])
    async function getData(){
        try {
            let resp=await axios.get("https://reqres.in/api/users?page=2")
            setUsers(resp.data.data)
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(function(){
        getData()
    },[])
    return <>
     <h1>Users Page</h1>
     <div style={{width:"40%",margin:"auto"}}>
        {
            users?.map((ele)=>(
                <div key={ele.id} style={{margin:"10px",border:"2px solid red",margin:"10px",width:"100%"}}>
                    <h2>Username: {ele.first_name} {ele.last_name}</h2>
                    <Link to={`/users/${ele.id}`}>Click here for more details</Link>
                </div>
            ))
        }
     </div>
    </>
}
export default Users