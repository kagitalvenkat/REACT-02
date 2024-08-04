import React from 'react'
import './NavBar.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import ProductsDetails from './ProductsDetails'
const NavBar = () => {
  return (
    <div>        
        <BrowserRouter>
      
            <ul>
                <Link to="/"> <li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>                
                <Link to="/about"> <li>About Us</li></Link>
                <Link to="/contact"> <li>Contact Us</li></Link>
            </ul>
            <div>
              
              <Link to="/products/desk"> <li>Desk</li></Link>
              <Link to="/products/shirts"> <li>Shirts</li></Link>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/products' exact element={<Products/>}></Route>
                <Route path='/products/:category' element={<ProductsDetails/>}></Route>               
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default NavBar