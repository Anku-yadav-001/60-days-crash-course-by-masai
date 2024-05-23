import {Link} from "react-router-dom"
import {Box, Button, Flex, Heading} from "@chakra-ui/react"
export default function Navbar(){

    let links=[
        {
            to:"/",
            label:"HOME"
        },
        {
            to:"/about",
            label:"ABOUT"
        },{
            to:"/products",
            label:"PRODUCTS"
        },{
            to:"/login",
            label:"LOGIN"
        },{
            to:"/cart",
            label:"CART"
        },
    ]
    return <>
        <Box bg="blue.100" p="10px">
            <Flex p="10px" justify="space-evenly" align="center">
            {
                links.map((ele)=>(
                    <Link to={ele.to} key={ele.to}><Heading as="h5" size="md">{ele.label}</Heading></Link>
                ))
            }
            <Button colorScheme='blue'>Logout</Button>
            </Flex>
        </Box>
    </>
}