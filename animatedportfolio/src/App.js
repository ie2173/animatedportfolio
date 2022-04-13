import logo from './logo.svg'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './component/Home'
import About from './component/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
