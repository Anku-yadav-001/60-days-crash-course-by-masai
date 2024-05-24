import {Box, Container, Heading} from "@chakra-ui/react"
export function Home(){

    return <>
       <Box>
            <Container border="2px solid red" maxW='70%'>
              <img src="https://i.pinimg.com/originals/0a/7e/eb/0a7eeb41ca4c7d8495c73891ec784e52.jpg" alt="" style={{width:"100%",height:"70vh"}}/>
              <Heading as="h3" size="lg" mt="-30%">We help cannabies clubs find real estate</Heading>
              <p>Found by a former city planner and a connabies industry pioneer. Our team has decades of experience finding and permitting peroperties for cannonies businesses. We understand the unique challanges and opportunities of the cannabies industry, and we're here to help you succed.</p>
            </Container>
       </Box>
    </>
}