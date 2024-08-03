import React, { useState } from 'react'
import ClassComp from './ClassComp';

const StateComp = () => {
    const [name,setName] = useState("RUDRA");
    const clickHandle = ()=>{
        setName(
            "Sai Rudra"
        )
    }

    const handleChangeParentData = (data)=>{
        console.log(data)
        setName(
            data
        )
    }
  return (
    <>
        <div>
            StateComp : {name} <br/>
            <button onClick={clickHandle}> ChangeName</button>
            <hr/>
            <ClassComp uname={name} parentData={handleChangeParentData}/>
        </div>

    </>
  )
}

export default StateComp