import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import AuthContextProvider from './Context.jsx/AuthContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <BrowserRouter>
       <ChakraProvider>
          <App/>
       </ChakraProvider>
  </BrowserRouter>
  </AuthContextProvider>
)
