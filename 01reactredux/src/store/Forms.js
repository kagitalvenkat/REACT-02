import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
const Forms = () => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState();
    const [reset, setReset] = useState("");


    const depositChange = (e)=>{
        const value = e.target.value
        setAmount(value)
    }
    const updateName = (e)=>{
        const name = e.target.value
        setName(name)
    }

    const updateMobile = (e)=>{
        const mobile = e.target.value
        setMobile(mobile)
    }

  return (
    <>
        <div className='container'>
            <h5 style={{color:'tomato'}}>Form</h5>
            <div className='row'>
             <div className='col-4'>
                <input type='text' 
                       className='form-control'
                       name={amount}
                       onChange={depositChange}
                       placeholder='Enter amount' 
                />
             </div>
                <button className='btn btn-primary col-1 mx-1'
                onClick={()=>{
                    dispatch({type:'deposit',payload: amount});
                    setAmount('')}}
                >Deposit</button>
                <button className='btn btn-danger col-1 '
                onClick={()=>{
                    dispatch({type:'withdraw',payload: amount});
                    setAmount('')}}
                >Withdraw</button>
            </div>

            <div className='row mt-1'>
             <div className='col-4'>
                <input type='text' 
                       className='form-control'
                       name={name}
                       onChange={updateName}
                       placeholder='Enter Name..' 
                />
             </div>
                <button className='btn btn-primary btn-sm col-2 mx-1'
                onClick={()=>{
                    dispatch({type:'updateName',payload: name});
                    setName('')}}
                >UpdateName</button>                
            </div>


            <div className='row mt-1'>
             <div className='col-4'>
                <input type='text' 
                       className='form-control'
                       name={name}
                       onChange={updateMobile}
                       placeholder='Enter MobileNumber' 
                />
             </div>
                <button className='btn btn-primary btn-sm col-2 mx-1'
                onClick={()=>{
                    dispatch({type:'updateMobile',payload: mobile});
                    setMobile('')}}
                >UpdateMobile</button>                
            </div>

            <div className='row mt-3'>
             <div className='col-10'>
                <button className='btn btn-primary btn-sm col-2 mx-1'
                onClick={()=>{
                    dispatch({type:'default',payload: reset});
                    }}
                >Reset</button>                
            </div>
            </div>
        </div>
    </>
  )
}

export default Forms