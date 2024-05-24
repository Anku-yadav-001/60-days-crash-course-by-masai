import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import {Home} from "../Pages/Home"
import {About} from "../Pages/About"
import {Contact} from "../Pages/Contact"
import {Tickets} from "../Pages/Tickets"
import {Login} from "../Pages/Login"

export function AllRoutes(){

    return <>
      <Box>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/tickets" element={<Tickets/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Box>
    </>
}