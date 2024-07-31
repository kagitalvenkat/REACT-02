import React, { useState } from 'react'
import UserComp from './pages/UserComp'

const App = () => {
  const [dataFromChild, setDataFromChild] = useState([]);
  
  const handleAdd = (data)=>{
    console.log(data); 
    setDataFromChild(data)
  }
  return (
    <>
      <div style={{backgroundColor:"tomato" , color:'white' ,textAlign:'center'}}>
      <h3>App Component {dataFromChild}</h3><hr/>
      </div>
       
      <UserComp add={handleAdd} name='RUDRA' address='Hyd'/>    
    </>
  )
}

export default App
