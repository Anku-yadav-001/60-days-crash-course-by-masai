import { useState } from 'react'
import InputFocus from './Component/InputFocus'
import DisplayRef from './Component/DisplayRef'
import ChangeColor from './Component/ChangeColor'
function App() {
 
  return (
    <>
      <h1>Focusable Input Field</h1>
      <InputFocus/>
      <h1>Display ref value</h1>
      <DisplayRef/>
      <h1>Change Color Using useRef</h1>
      <ChangeColor/>
    </>
  )
}

export default App
