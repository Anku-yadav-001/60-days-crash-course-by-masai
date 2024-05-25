import { Box, Button, Container, Flex, SimpleGrid, Card, CardHeader, Heading, CardBody, Select, HStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {LoadingIndicator} from "../Components/LoadingIndicator.jsx"
import {ErrorIndicator} from "../Components/ErrorIndicator.jsx"
export function Tickets() {
  let [tickets, setTickets] = useState([]);
  let [priority1, setPriority] = useState("");
  let [status, setStatus] = useState("");
  let [loading,setLoading]=useState(false)
  let [err,setErr]=useState(false)
  let navigate = useNavigate();

  async function getData() {
    setLoading(true)
    try {
      let selectedParams = {};
      if (priority1) {
        selectedParams._sort = "priority";
        selectedParams._order = priority1;
      }
      if (status) {
        selectedParams.status = status;
      }
      let resp = await axios({
        method: "get",
        url: `http://localhost:3000/tickets`,
        params: selectedParams
      });
      setTickets(resp.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErr(true)
    }
  }

  useEffect(() => {
    getData();
  }, [priority1, status]);

if(loading){
   return <LoadingIndicator/>
}
if(err){
  return <ErrorIndicator/>
}
  return (
    <Box>
      <Container maxW="60%" p="2vh">
        <Flex justify="end">
          <Button variant="outline" colorScheme="blue" m="2vh" onClick={() => navigate("/tickets/create-ticket")}>
            Create Ticket
          </Button>
        </Flex>
        <HStack spacing={10} mb="10px">
          <Select placeholder="Sort by Priority" value={priority1} onChange={(e) => setPriority(e.target.value)}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
          <Select placeholder="Filter by Status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="progress">Progress</option>
            <option value="completed">Completed</option>
          </Select>
        </HStack>
        <hr />
        <SimpleGrid columns={{ base: "1", sm: "1", md: "2", lg: "3" }} spacing={10} mt="2vh">
          {tickets.map((item) => (
            <Card key={item.id} border="2px solid red" borderRadius="5px">
              <CardHeader>
                <Heading size="md">{item.title}</Heading>
              </CardHeader>
              <CardBody>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Status: {item.status}
                  </Heading>
                  <Heading size="xs" textTransform="uppercase">
                    Priority: {item.priority}
                  </Heading>
                </Box>
              </CardBody>
              <Button variant="solid" colorScheme="red" m="10px" onClick={() => navigate(`/tickets/view-ticket/${item.id}`)}>
                View
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
