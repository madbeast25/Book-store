import React from 'react'
import Home from './components/Home/Home'
import About from './components/about/About'

import Login from './components/login/Login'
import AuthenticatedRoute from './components/authenticatedUser/authenticatedUser'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound/NotFound'
import Register from './components/register/Register'
import AdminDashboard from './components/Admin/AdminDashboard'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
   
      
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="admin-dashboard"
        element={
          <AuthenticatedRoute>
            <AdminDashboard />
          </AuthenticatedRoute>
        }
      />
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  
  </BrowserRouter>
  )
}

export default App
