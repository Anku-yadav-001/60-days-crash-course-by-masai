import { Container, Spinner } from "@chakra-ui/react"

export function LoadingIndicator(){

    return <>
     <Container maxW="40%" textAlign="center" pt="15rem">
     <Spinner
        thickness='10px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
     </Container>
    </>
}