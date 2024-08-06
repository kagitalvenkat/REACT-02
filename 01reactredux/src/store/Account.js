import React from 'react'
import {useSelector} from 'react-redux'

const Account = () => {
    const data = useSelector((state)=>{
        return state
    })
    
  return (
    <>
        <div className='container-sm col-sm-6'>
            <h4>Account Details</h4>
            <table className="table table-danger">
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>Name</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-success'>
                        <td>{data.balance}</td>
                        <td>{data.fullname}</td>
                        <td>{data.mobile}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Account