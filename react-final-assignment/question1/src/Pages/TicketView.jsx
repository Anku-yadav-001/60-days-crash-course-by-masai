import { Box, Container, Card, CardHeader, CardBody, Heading, Stack,Text, StackDivider, Button,useToast} from "@chakra-ui/react"
import {useParams} from "react-router-dom"
import {LoadingIndicator} from "../Components/LoadingIndicator.jsx"
import {ErrorIndicator} from "../Components/ErrorIndicator.jsx"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react"

export function TicketView() {
  let { id }=useParams()
  let [loading,setLoading]=useState(false)
  let [err,setErr]=useState(false)
  let [singleUser,setSingleUser]=useState({})
  let navigate=useNavigate()
  let toast=useToast()
  async function getUserDetails(){
    setLoading(true)
    try {
      let resp=await axios.get(`http://localhost:3000/tickets/${id}`)
      setSingleUser(resp.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErr(true)
    }
  }
  async function handleDelete(){
    setLoading(true)
    try {
      let resp=await axios.delete(`http://localhost:3000/tickets/${id}`)
      if(resp.status==200){
        toast({
          title: `Ticket deleted successfully`,
          status: "success",
          isClosable: true,
        })
        navigate('/tickets')
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
  return <>
      <Container maxW="30%" border="4px solid red" borderRadius="10px" mt="5vh">
        <Card>
          <CardHeader>
            <Heading size='md'>{singleUser.title}</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Description
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {singleUser.description}
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Assignee
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {singleUser.assignee}
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Status
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {singleUser.status}
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Priority
                </Heading>
                <Text pt='2' fontSize='sm'>
                  {singleUser.priority}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        {/* <HStack spacing="20px" textAlign="center"> */}
            <Button variant="outline" colorScheme="red" m="10px" onClick={()=>navigate(`/tickets/view-ticket/edit-ticket/${id}`)}>Edit</Button>
            <Button variant="outline" colorScheme="red" m="10px" onClick={handleDelete}>Delete</Button>
        {/* </HStack> */}
        </Card>
      </Container>
  </>
}