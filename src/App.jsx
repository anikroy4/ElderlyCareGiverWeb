
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayOuts from './components/rootlayouts/RootLayOuts'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Service from './components/pages/service/Service'
import Event from './components/pages/event/Event'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayOuts/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/event" element={<Event/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
