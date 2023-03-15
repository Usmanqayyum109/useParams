import React from 'react'
import About from './About'
import Contact from './Contact'
import User from './User'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Error from './Error'

export default function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path='/' Component={() => <About name = "About"/>}/>
        <Route path='Contact' Component={() => <Contact name = "Contact" />}/>
        <Route path='User/:firstName/:lastName' element={<User />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
   
    </div>
  )
}
