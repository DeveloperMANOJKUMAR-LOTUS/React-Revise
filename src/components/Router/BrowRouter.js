import React from 'react'
import { BrowserRouter, Route,Routes   } from 'react-router-dom'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import NoPage from '../pages/NoPage'
import Home from '../pages/Home'
function BrowRouter() {
  return (
    <div>Browser Router
        <ul>
            <p>Routers</p>
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>

        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Home' element={<Home />}></Route>
              <Route path='/Blog' element={<Blog />}></Route>
              <Route path='/Contact' element={<Contact />}></Route>
              <Route path='*' element={<NoPage />}></Route>
           </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default BrowRouter