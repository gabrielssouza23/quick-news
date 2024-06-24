import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header.jsx'
import './app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Header />
     <div>section</div>
     <div>footer</div>
    </div>
  )
}

export default App
