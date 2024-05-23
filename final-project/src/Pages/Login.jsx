import {Container, Heading, Input, Stack, Box, Button} from "@chakra-ui/react"
import axios from "axios"
import { useContext, useState } from "react";
import { AuthContext } from "../Context.jsx/AuthContext";
import {useNavigate} from "react-router-dom"
export default function Login(){
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let {setToken,setIsauth}=useContext(AuthContext)
  let navigate=useNavigate()
     async function LoginUser(){
        try {
           let result=await axios.post("https://reqres.in/api/login",{
              email,
              password
           })
           setToken(result.data.token)
           setIsauth(true)
           navigate("/products")
        } catch (error) {
            console.log(error);
        }
     }
    return <>
     <Box align="center">
      <Container border="red" w="400px">
              <Heading as="h6" size="lg" m="10px">Login User</Heading>
             <Stack spacing="10px">
              <Input border="2px solid blue" placeholder="Enter email..." value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <Input border="2px solid blue" placeholder="Enter password..." value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <Button onClick={LoginUser}>Login !</Button>
             </Stack>
      </Container>
     </Box>
    </>
}