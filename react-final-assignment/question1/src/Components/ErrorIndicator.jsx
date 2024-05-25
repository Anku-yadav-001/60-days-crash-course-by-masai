import {Alert,AlertIcon,AlertTitle,AlertDescription, Container} from "@chakra-ui/react"

export function ErrorIndicator(){

    return <>
    <Container maxW="40%" textAlign="center" pt="15rem">
    <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription>Please try again !</AlertDescription>
    </Alert>
    </Container>
    </>
}