import React, { useReducer } from 'react'
import { ACTIONS, formReducer, INITIAL_STATE } from './formReducer';

const Forms = () => {

    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
    const handleInputChange = (e)=>{
        dispatch({
            type: ACTIONS.INPUT_CHANGE,
            payload: {
                name:e.target.name,
                value:e.target.value
            }
        })
    }
console.log(state);

  return (
    <div className='container w-400px'>
        <form>
            <h3 style={{color:'tomato' , marginTop:'20px'}}>Login</h3>
            <div className="form-group">             
             <input type='text'
                    name='email'
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder='Email.'/>
            </div>
            <div className="form-group">
                <input type='text'
                    name='name'
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder='FullName..'/>
            </div>
            <div className="form-group">
                <select name='country' className="form-control" onChange={handleInputChange}>
                    <option value='-1'>Select Country</option>
                    <option value='india'>India</option>
                    <option value='usa'>USA</option>
                    <option value='China'>China</option>
                    <option value='uk'>UK</option>
                </select>
            </div>
            
            <div className="form-group">
                <button type='button' className='btn btn-danger' onClick={()=>{dispatch({type: ACTIONS.DECREASE_AGE})}}>-</button>
                    Age is {state.age}
                <button type='button' className='btn btn-primary' onClick={()=>{dispatch({type: ACTIONS.INCREASE_AGE})}}>+</button>
            </div>
        </form>
    </div>
  )
}

export default Forms