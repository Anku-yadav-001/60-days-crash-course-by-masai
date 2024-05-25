import {Container,Heading,VStack,Input,Button, Textarea,Select, useToast} from "@chakra-ui/react"
import { useState ,useEffect} from "react"
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import {LoadingIndicator} from "../Components/LoadingIndicator.jsx"
import {ErrorIndicator} from "../Components/ErrorIndicator.jsx"


export function TicketEdit(){
    let {id}=useParams()
    let navigate=useNavigate()
    let [loading,setLoading]=useState(false)
    let [err,setErr]=useState(false)
    let [ticket,setTicket]=useState({})
    let toast=useToast()
    async function getUserDetails(){
      setLoading(true)
      try {
        let resp=await axios.get(`http://localhost:3000/tickets/${id}`)
        setTicket(resp.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setErr(true)
      }
    }
    async function handleSubmit(){
      setLoading(true)
      try {
        let resp=await axios.put(`http://localhost:3000/tickets/${id}`,{
            title:ticket.title,
            description:ticket.description,
            assignee:ticket.assignee,
            status:ticket.status,
            priority:ticket.priority
        })
        if(resp.status==200){
          toast({
            title: `Ticket updated successfully`,
            status: "success",
            isClosable: true,
          })
          navigate("/tickets")
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setErr(true)
      }
    }
    useEffect(function(){
      getUserDetails()
    },[id])
    if(loading){
      return <LoadingIndicator/>
   }
   if(err){
     return <ErrorIndicator/>
   }
   let {title,description,assignee,priority,status}=ticket
    return <>
      <Container maxW="30%" textAlign="center" mt="2rem" border="5px solid blue" p="20px" borderRadius="15px">
              <Heading as="h6" size="lg" mb="1rem">Edit Ticket!</Heading>
              <VStack spacing="20px">
              <Input placeholder="Enter Title..." value={title} onChange={(e)=>{setTicket({...ticket,title:e.target.value})}}/>
               <Textarea placeholder="Enter Description..." value={description} onChange={(e)=>{setTicket({...ticket,description:e.target.value})}}/>
               <Select placeholder="select Assignee" value={assignee} onChange={(e)=>{setTicket({...ticket,assignee:e.target.value})}}>
                  <option value="Aman">Aman</option>
                  <option value="Rohit">Rohit</option>
                  <option value="Ram">Ram</option>
                  <option value="Varun">Varun</option>
                  <option value="Anku">Anku</option>

                </Select>
                <Select placeholder="Select Status" value={status} onChange={(e)=>{setTicket({...ticket,status:e.target.value})}}>
                  <option value="pending">Pending</option>
                  <option value="progress">Progress</option>
                  <option value="completed">Completed</option>
                </Select>
                <Select placeholder="Select Priority" value={priority} onChange={(e)=>{setTicket({...ticket,priority:Number(e.target.value)})}}>
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
              <Button variant="outline" colorScheme="blue" width="200px" onClick={handleSubmit}>Edit Ticket</Button>
              </VStack>
      </Container>
    </>
}