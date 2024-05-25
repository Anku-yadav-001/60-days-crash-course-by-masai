import {Container,Heading,VStack,Input,Button, Textarea,Select, useStatStyles} from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {LoadingIndicator} from "../Components/LoadingIndicator.jsx"
import {ErrorIndicator} from "../Components/ErrorIndicator.jsx"

export function TicketCreate(){
    let [title,setTitle]=useState("")
    let [description,setDescription]=useState("")
    let [assignee,setAssignee]=useState("")
    let [status,setStatus]=useState("")
    let [priority,setPriority]=useState(+"")
    let navigate=useNavigate()
    let [loading,setLoading]=useState(false)
    let [err,setErr]=useState(false)
    
    async function handleSubmit(){
      setLoading(true)
      try {
        let resp=await axios.post("http://localhost:3000/tickets",{
            title,
            description,
            assignee,
            status,
            priority
        })
        if(resp.status==201){
          navigate("/tickets")
        }
        setLoading(false)
        
      } catch (error) {
        setLoading(false)
        setErr(true)
      }
    }

    if(loading){
      return <LoadingIndicator/>
   }
   if(err){
     return <ErrorIndicator/>
   }
    return <>
      <Container maxW="30%" textAlign="center" mt="2rem" border="5px solid blue" p="20px" borderRadius="15px">
              <Heading as="h6" size="lg" mb="1rem">Create Ticket!</Heading>
              <VStack spacing="20px">
              <Input placeholder="Enter Title..." value={title} onChange={(e)=>setTitle(e.target.value)}/>
               <Textarea placeholder="Enter Description..." value={description} onChange={(e)=>setDescription(e.target.value)}/>
               <Select placeholder="select Assignee" value={assignee} onChange={(e)=>setAssignee(e.target.value)}>
                  <option value="Aman">Aman</option>
                  <option value="Rohit">Rohit</option>
                  <option value="Ram">Ram</option>
                  <option value="Varun">Varun</option>
                  <option value="Anku">Anku</option>
                </Select>
                <Select placeholder="Select Status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                  <option value="pending">Pending</option>
                  <option value="progress">Progress</option>
                  <option value="completed">Completed</option>
                </Select>
                <Select placeholder="Select Priority" value={priority} onChange={(e)=>setPriority(Number(e.target.value))}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </Select>
              <Button variant="outline" colorScheme="blue" width="200px" onClick={handleSubmit}>Create Ticket</Button>
              </VStack>
      </Container>
    </>
}