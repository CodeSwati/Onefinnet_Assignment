import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Category from './components/Category'
import { Routes, Route } from 'react-router-dom'
import Fruits from './components/Fruits'
import Beverage from './components/Beverage'
import Biscuit from './components/Biscuit'
import Meat from './components/Meat'
import Bakery from './components/Bakery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div 
      className="bg-gradient-to-r from-slate-300 to-green-900
      bg-cover bg-center bg-no-repeat">
        <Navbar/>
        <Main/>
      </div>
      <div>
         <Category/> 
          <Routes>
            <Route path='fruits' element={<Fruits/>}/>
            <Route path='bakery' element={<Bakery/>}/>
            <Route path='meat' element={<Meat/>}/>
            <Route path='beverage' element={<Beverage/>}/>
            <Route path='biscuit' element={<Biscuit/>}/>

          </Routes>
      </div>
    </>
  )
}

export default App
