import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import "./App.css"
import { action ,originals } from './urls'
import RowPost from './Components/RowPost/RowPost'
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall></RowPost>
    </div>
  )
}

export default App
