import {Box, Container, Flex, Heading, Text} from "@chakra-ui/react"
export function Contact(){

    return <>
      <Box >
        <Container maxW="80%" textAlign="center">
            <Heading as="h1" size="2xl" m="5vh">Contact Us</Heading>
            <Text fontSize="1.5rem" color="gray"> 
            We know that choosing the right institute or a career path can be a difficult and tiring process, and that's why we're here for you. Contact us to ask any questions, we'll respond over email as soon as possible!
            </Text>
            <img src="https://masaischool.com/images/contact/mail.svg" alt="" style={{marginLeft:"28rem"}}/>
            <Heading as="h6" size="lg">Write to us at</Heading>
            <Text fontSize="1.2rem">admissions@masaischool.com</Text>
        </Container>
      </Box>
    </>
}