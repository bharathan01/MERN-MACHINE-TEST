import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
      <Header/>
    </section>
      <section>
        <Outlet/>
      </section>
    </>
  )
}

export default App
