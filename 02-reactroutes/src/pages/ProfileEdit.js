// import React, { useContext, useState } from 'react'
import React, { useState } from 'react'
import AppContext from './AppContext';
import { useOutletContext } from 'react-router-dom';

const ProfileEdit = () => {
    // const context = useContext(AppContext);
    const context = useOutletContext(AppContext);
    const [userName, setUserName] = useState();
    const handleChange =(e)=>{
        setUserName(e.target.value);
    }
    const updateUserName = ()=>{
        // context.setName(userName)
        context.setUserName(userName)
    }
  return (
    <div className='mt-2'>
        <input type='text' name={userName} placeholder='Provide Username ...' onChange={handleChange}/>
        <button className='btn btn-sm btn-danger' onClick={updateUserName}>Update</button>
    </div>
  )
}

export default ProfileEdit