// import React, { useContext, useState } from 'react'
import React, { useState } from 'react'
import ProfileEdit from './ProfileEdit';
import AppContext from './AppContext';
import { useOutletContext } from 'react-router-dom';

const Profile = () => {
 // const context = useContext(AppContext);
  const context = useOutletContext(AppContext);
  const [isProfileChagne, setIsProfileChagne] = useState(false);
  const changeProfile = ()=>{
    setIsProfileChagne(!isProfileChagne)
  }
  return (
    <div>
       {/* <h5>Welcome {context.name}</h5> */}
      <h5>Welcome {context.userName}</h5>
      <button onClick={changeProfile}>UpdateProfile</button>
      {isProfileChagne && <ProfileEdit/>}
    </div>
  )
}

export default Profile