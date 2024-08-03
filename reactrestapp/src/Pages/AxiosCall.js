import axios from "axios";
import React,{useEffect,useState} from "react";

const AxiosCall = ()=>{
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => setData(response.data))
        .finally(() => {
            setLoading(false)
          })
    }, [])
    return (
        <div>
            <h5 style={{color:'tomato'}}>Axios Call</h5><hr></hr>
            {loading?(<div>Loading...</div>):(
                    <table border={1}>
                        <thead>
                            <tr>
                               <th>Id</th>
                               <th>Title</th>
                               <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>                            
                               {data.map((d)=>(
                                    <tr key={d.id}>
                                        <td>{d.id}</td>
                                        <td>{d.title}</td>
                                        <td>{d.userId}</td>
                                    </tr>
                               ))}
                            
                        </tbody>
                    </table>
            )}
        </div>
    )
}

export default AxiosCall;
