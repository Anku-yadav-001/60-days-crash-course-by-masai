import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import { AuthContextProvider } from './Context/AuthContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </ChakraProvider>
  </BrowserRouter>
)
