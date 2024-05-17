import React, { useState } from 'react'
import './App.css'
import DynamicFormInput from './Components/DynamicFormInput'
import RealTimevalidation from './Components/RealTimeValidation'
import CustomeFormHandle from './Components/CustomFormHandle'

function App() {
 
  return (
    <>
      <h1>Dynamic Form Using useRef</h1>
      <h2>Dynamic form input focus</h2>
      <DynamicFormInput/>
      <h2>Real time form validation</h2>
      <RealTimevalidation/>
      <h2>Custom Form handling</h2>
      <CustomeFormHandle/>
    </>
  )
}

export default App
