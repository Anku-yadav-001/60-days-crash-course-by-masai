import { useState } from 'react'
import {Box, Button, Container, SimpleGrid} from "@chakra-ui/react"
function App() {

  return (
    <>
     {/* <Box w="100%" bg="red" h="20vh" fontSize="40px" fontWeight="800" display="flex" alignItems="center" justifyContent="center">
      Hello aman 
      how are you
     </Box>
     <Container bg="blue" p="20px" textAlign="center" fontWeight="800" fontSize="35px">
       I'm a computer science engineer <br />
     <Button onClick={()=>alert("Yeh this is CHAKRA UI")} _hover={{ bg: "yellow.900" }}>Click me</Button>
     </Container>
     <Box w="100%" bg="red" h="20vh" fontSize="40px" fontWeight="800" display="flex" alignItems="center" justifyContent="center">
      Narmadapuram and bansal college of engineering
     </Box> */}
     <SimpleGrid columns={{
      sm: '1', // ~480px. em is a relative unit and is dependant on the font size.
      md: '2', // ~768px
      lg: '3', // ~992px
     
     }} spacing={5}>
        <Box bg={{
          sm: 'blue', // ~480px. em is a relative unit and is dependant on the font size.
          md: 'green', // ~768px
          lg: 'pink', // ~992px
       
        }} height='120px'>2</Box>
        <Box bg={{
          sm: 'pink', // ~480px. em is a relative unit and is dependant on the font size.
          md: 'green', // ~768px
          lg: 'pink', // ~992px
       
        }} height='120px'>1</Box>
        <Box bg={{
          sm: 'blue', // ~480px. em is a relative unit and is dependant on the font size.
          md: 'black', // ~768px
          lg: 'aqua', // ~992px
       
        }} height='120px'>4</Box>
        <Box bg='red' height='120px'>3</Box>
        <Box bg='yellow' height='120px'>6</Box>
        <Box bg={{
          sm: 'blue', // ~480px. em is a relative unit and is dependant on the font size.
          md: 'aqua', // ~768px
          lg: 'pink', // ~992px
       
        }} height='120px'>5</Box>
        <Box bg='yellow' height='120px'>8</Box>
        <Box bg='red' height='120px'>7</Box>
        <Box bg='yellow' height='120px'>10</Box>
        <Box bg={{
          sm: 'blue', // ~480px. em is a relative unit and is dependant on the font size.
          md: 'green', // ~768px
          lg: 'pink', // ~992px
       
        }} height='120px'>9</Box>
    </SimpleGrid>
    </>
  )
}

export default App
