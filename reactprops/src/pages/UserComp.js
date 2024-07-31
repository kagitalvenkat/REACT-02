import React, { useState } from 'react';

const UserComp = (props,{add}) => {
    console.log(props);

    const [uname,setUname]= useState("");
    const handleClick=()=>{
       add(uname)
    }

    const handleChange = (e)=>{
        setUname({
            uname : e.target.value
       })
    }
    
  return (
    <>
        <div style={{backgroundColor:"gray" , color:'white' ,textAlign:'center'}}>
        <h3>Name :{props.name}</h3>
        <h3>Address :{props.address}</h3>        
        <input name={uname} onChange={handleChange}/>
        <button onClick={handleClick}>Update Name</button>
        </div>
       
    </>
  );
}

export default UserComp;
