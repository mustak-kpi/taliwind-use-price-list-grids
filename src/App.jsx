import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Price from './componentes/Price/Price'
import Deashbord from './componentes/Deashbord/Deashbord'
import Varictial from './componentes/VarrictalCart/Varictial'
import PhoneBare from './componentes/PhoneBare/PhoneBare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar></Navbar>
        <h1 className='text-7xl text-red-500'>welcome to my tailwind</h1>
        <Price></Price>
        <Deashbord></Deashbord>
        <Varictial></Varictial>
        <PhoneBare></PhoneBare>
    </div>
  )
}

export default App
