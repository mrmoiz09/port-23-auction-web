import { useState } from 'react'
import { Navbars } from './components/Navbars'
import Topslider from './components/Topslider'
import { Upcommingauctions } from './components/Upcommingauction'
import Browselot from './components/Browselot'
import { Assdf } from './components/Assdf'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbars/>
    <Topslider/>
    <Upcommingauctions/>
   <Browselot/>
<Assdf/>
    </>
  )
}

export default App
