import React from 'react'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Books from './Pages/Books'
import BookDetails from './Pages/BookDetails.jsx'
import Manage from './Pages/Manage'

import {BrowserRouter,Routes,Route} from "react-router-dom"


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/bookDetails/:id" element={<BookDetails/>}/>
          <Route path="/manage" element={<Manage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
