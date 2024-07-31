import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [data,setData] = useState("");

    const handleDataFromChild = (cData)=>{
        setData(
            cData
        )
    }
  return (
    <div>
        <p >Data form child:<strong style={{color:'tomato'}}>{data}</strong> </p>
        <Child dataToParent={handleDataFromChild} name="REACT JS"></Child>
    </div>
  )
}

export default Parent