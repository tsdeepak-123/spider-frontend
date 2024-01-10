import React from 'react'
import Header from '../../components/UserComponents/Header/Header'
import Footer from '../../components/UserComponents/Footer/Footer'
import Home from '../../components/UserComponents/Home/Home'
import ContactUs from '../../components/UserComponents/ContactUs/ContactUs'
import Profile from '../../components/UserComponents/Profile/Profile'
import Projects from '../../components/UserComponents/Projects/Projects'


function UserHome() {
  return (
    <div>
        <Header/>
        <Home/>
        <Profile/>
        <Projects/>
        <ContactUs/>
        <div className='mt-14'>
        <Footer/>
        </div>  
    </div>
  )
}

export default UserHome