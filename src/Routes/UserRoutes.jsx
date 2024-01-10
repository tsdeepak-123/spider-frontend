import React from 'react'
import { Routes,Route } from 'react-router-dom'
import UserHome from '../Pages/User/UserHome'

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserHome/>}/>
      </Routes>
    </div>
  )
}

export default UserRoutes