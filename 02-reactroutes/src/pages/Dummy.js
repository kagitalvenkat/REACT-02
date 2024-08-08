import React, { useState } from 'react'
import {Link, BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Profile from './Profile';
import AppContext from './AppContext';

const Dummy = () => {
    const [name,setName] = useState("kagital");
  return (
    <div>
        <BrowserRouter>
            <div style={{width:'500px'}}>
                <div>
                <nav>
                    React &nbsp;
                    <Link to='/profile' className='btn btn-sm btn-danger' ><span>{name}</span></Link>                    
                </nav>
                </div>
                <div className="navbar nav-link active" style={{backgroundColor: '#e3f2fd'}}>
                    <Link to='/'>Home</Link>&nbsp;
                    <Link to='/product/computer'>Computer</Link>&nbsp;
                    <Link to='/product/desk'>Desk</Link>&nbsp;
                    <Link to='/product/shirts'>Shirts</Link>&nbsp;
                    <Link to='/profile'>Profile</Link>&nbsp;
                </div>
            </div>
            <AppContext.Provider value={{name,setName}}>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/product/:name' element={<Product/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                {/* element={<Profile name={name} setName={setName}/>} */}
            </Routes>
            </AppContext.Provider>
        </BrowserRouter>
    </div>
  )
}

export default Dummy