import React, { useState } from 'react'

const Child = (props) => {
    const [data,setData] = useState("")
    const clickHandle = ()=>{
        props.dataToParent(data)
    }
 
  return (
    <>
    
      <div style={{backgroundColor:'gray', color:'white', margin:'10px' ,padding:'7px'}}>
        <h5>This data- {props.name} is cmng from parent</h5>
        <input style={{width:"20%",margin:"10px"}} className="form-control form-control-lg" type='text' name={data} onChange={e =>setData( e.target.value)} />
        <button onClick={clickHandle} className="btn btn-danger">Submit</button>
    </div>
    </>
  )
}

export default Child