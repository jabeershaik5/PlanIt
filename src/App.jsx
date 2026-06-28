import { useState } from 'react'

import MainSection from './pages/MainSection'
import SideBar from './components/SideBar'
import UserLogIn from './pages/userLogIn'

import './styles/App.css'

function App() {
  return (
    // <div className='home_page'>
    //   <SideBar />
    //     <MainSection />
    // </div>
    <div className="home_page">
      <UserLogIn />
    </div>
  )
}

export default App
