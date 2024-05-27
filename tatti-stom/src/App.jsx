import { useState } from 'react'
import './App.css'
import Login from './assets/Login'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './assets/layout/MainLayout'
import Dashboard from './assets/Home'
import UserList from './assets/PatientList'
import AddPatients from './assets/addPatients'
import PrivateRoute from './assets/routing/PrivateRoute'
import Events from './assets/events'

function App() {

  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute element={<MainLayout/>}/>}>
          <Route index element={<Dashboard />} />
          <Route path='patients' element={<UserList />}/>
          <Route path='AddPatients' element={<AddPatients />} />
          <Route path='events' element={<Events/>}/>
        </Route>
        <Route path='*' element={<h1>404</h1>}/>
      </Routes>
    </>
  )
}

export default App
