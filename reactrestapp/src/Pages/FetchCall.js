import React, { useEffect,useState } from 'react'

function FetchCall() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => setData(json))
    },[])
  return (
    <div>
      <h4>Fectch Call.</h4><hr/>
      {
        data.map((data,index)=>{
            return <li key={data.id}>
               {index+1} - {data.title}
            </li>
        })
      }
    </div>
  )
}

export default FetchCall
