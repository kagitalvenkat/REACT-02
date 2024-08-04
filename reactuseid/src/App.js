import React from 'react'
import { InputComp } from './pages/InputComp'


const App = () => {
  return (
    <>
      <div>
        <h3>User Form</h3>
        <div className='input'>
          <InputComp label='FirstName' type='text' name='firstName' />
          <InputComp label='LastName' type='text' name='lastName' />
          <InputComp label='Email' type='text' name='email' />
          <InputComp label='Password' type='password' name='password' />
        </div>
      </div>
    </>
  )
}

export default App