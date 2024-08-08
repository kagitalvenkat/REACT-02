import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    const [userName,setUserName] =useState('RUDRA');
  return (
    <div className='container m-10'>
        <div style={{width:'500px'}}>
                <div>
                  <nav>
                      React &nbsp;
                      <Link to='/profile' className='btn btn-sm btn-danger' ><span>{userName}</span></Link>                    
                  </nav>
                </div>
                <div className="navbar nav-link active mt-2 mb-1" style={{backgroundColor: '#e3f2fd'}}>
                    <Link to='/'>Home</Link>&nbsp;
                    <Link to='/product/computer'>Computer</Link>&nbsp;
                    <Link to='/product/desk'>Desk</Link>&nbsp;
                    <Link to='/product/shirts'>Shirts</Link>&nbsp;
                    <Link to='/profile'>Profile</Link>&nbsp;
                </div>
                <Outlet context={{userName,setUserName}}/>
            </div>
    </div>
  )
}

export default NavBar