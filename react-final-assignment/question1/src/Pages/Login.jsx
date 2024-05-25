import { Container, Heading,Input ,InputGroup,InputRightElement,Button, Spacer, VStack} from "@chakra-ui/react"
import { useContext, useState } from "react"
import axios from "axios"
import { LoadingIndicator } from "../Components/LoadingIndicator"
import { ErrorIndicator } from "../Components/ErrorIndicator"
import { AuthContext } from "../Context/AuthContext"
import {useNavigate} from "react-router-dom"
export function Login(){
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let [loading,setLoading]=useState(false)
  let [err,setErr]=useState(false)
  let {setToken,setIsauth}=useContext(AuthContext)
  let navigate=useNavigate()
  async function loginUser(){
    setLoading(true)
    try {
       let resp=await axios.post("https://reqres.in/api/login",{
          email,
          password
       })
       setIsauth(true)
       setToken(resp.data.token)
       setLoading(false)
       if(resp.status===200){
        navigate("/")
       }
    } catch (error) {
      setLoading(false)
      setErr(true)      
    }
  }
  function handleSubmit(e){
    e.preventDefault()
    loginUser()
  }
  if(loading){
    return <LoadingIndicator/>
  }
  if(err){
    return <ErrorIndicator/>
  }

    return <>
      <Container maxW="30%" textAlign="center" mt="2rem" border="5px solid blue" p="20px" borderRadius="15px">
              <Heading as="h6" size="lg" m="2rem">Login !</Heading>
              <VStack spacing="20px">
              <Input placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                 
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button variant="outline" colorScheme="blue" width="200px" onClick={handleSubmit}>Login</Button>
              </VStack>
      </Container>
    </>
}