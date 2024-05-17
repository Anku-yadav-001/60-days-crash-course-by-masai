import { useState } from "react"
import axios from "axios"

function Login(){
    let [token,setToken]=useState("")
        let [formState,setFormSatate]=useState({
            email:"",
            password:""
        })
        let {email,password}=formState

        async function handleSubmit(e){
            e.preventDefault()
            try {
                let resp=await axios.post("https://reqres.in/api/login",{
                    email,
                    password
                })
                setToken(resp.data.token)
            } catch (error) {
                console.log(error);
            }
        }
        function handeChange(e){
            let {name,value}=e.target
            let newData={
                ...formState,
                [name]:value
            }
            setFormSatate(newData)
        }
    return <>
     <h1>Login Page</h1>
     <div className="formdata">
        <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="text" value={email} onChange={handeChange} placeholder="enter email" name="email"/><br />
        <label>Password: </label>
        <input type="text" value={password} onChange={handeChange} placeholder="enter password" name="password"/><br />
        <input type="submit" value="Login" className="button"/>
        </form>
        {token && <h4>Login Successful: <span style={{color:"blue"}}>{token}</span></h4>}
     </div>
    </>
}
export default Login