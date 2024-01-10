import React from 'react'
import Header from '../../components/UserComponents/Header/Header'
import Footer from '../../components/UserComponents/Footer/Footer'
import Home from '../../components/UserComponents/Home/Home'
import ContactUs from '../../components/UserComponents/ContactUs/ContactUs'
import Profile from '../../components/UserComponents/Profile/Profile'
import Projects from '../../components/UserComponents/Projects/Projects'
import About from '../../components/UserComponents/About/About'


function UserHome() {
  return (
    <div className='overflow-hidden'>
        <Header/>
        <Home/>
        <About/>
        <Profile/>
        <Projects/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default UserHome