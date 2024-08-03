import React, { useState } from 'react'


const LoginForm = () => {
    const [data,setData] = useState({
        userName:'',
        password:''
    });
    const {userName,password} = data;
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        
    }

  return (
    <>
        <dev style={{margin:10}}>
            <center>
                <form onSubmit={handleSubmit}>
                <input type='text' name='userName' value={userName} onChange={handleChange}/><br/>
                <input type='password' name='password' value={password} onChange={handleChange}/><br/>
                <input type='submit' value='Submit' ></input>
                </form>
            </center>
        </dev>
    </>
  )
}

export default LoginForm