import {Box, Button, Flex, Heading, VStack} from "@chakra-ui/react"
import { useContext } from "react"
import {Link} from "react-router-dom"
import {AuthContext} from "../Context/AuthContext.jsx"
export function Navbar(){
    let {isAuth,logout} = useContext(AuthContext)
    let links=[
        {
            to:"/",
            label:"HOME"
        },
        {
            to:"/about",
            label:"ABOUT"
        },
        {
            to:"/contact",
            label:"CONTACT"
        },
        {
            to:"/tickets",
            label:"TICKETS"
        },
        {
            to:"/login",
            label:"LOGIN"
        },
    ]
    return <>
       <Box bg="blue">
            <Flex p="10px" justify="end" color="white">
            {
                links?.map((items)=>(
                        <Link to={items.to} key={items.to}><Heading as="h6" size="md" pr="30px" m="10px">{items.label}</Heading></Link>
                ))
            }
            {isAuth?<Button variant='outline' onClick={logout}>LOGOUT</Button>:""}
            </Flex>
       </Box>
    </>
}