import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import {Home} from "../Pages/Home"
import {About} from "../Pages/About"
import {Contact} from "../Pages/Contact"
import {Tickets} from "../Pages/Tickets"
import {Login} from "../Pages/Login"
import {PrivateRoute} from "../Routes/PrivateRoute.jsx"
import {TicketCreate} from "../Pages/TicketCreate.jsx"
import {TicketView} from "../Pages/TicketView.jsx"
import { TicketEdit } from "../Pages/TicketEdit.jsx";
export function AllRoutes(){

    return <>
      <Box>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path="/about" element={<PrivateRoute><About/></PrivateRoute>}/>
          <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>}/>
          <Route path="/tickets" element={<PrivateRoute><Tickets/></PrivateRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/tickets/create-ticket" element={<TicketCreate/>}/>
          <Route path="/tickets/view-ticket/:id" element={<TicketView/>}/>
          <Route path="/tickets/view-ticket/edit-ticket/:id" element={<TicketEdit/>}/>
        </Routes>
      </Box>
    </>
}