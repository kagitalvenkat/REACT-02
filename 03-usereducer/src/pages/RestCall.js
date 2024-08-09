import React, {useReducer } from 'react'
import './RestCall.css'
import { ACTIONS, dataReducer, INITIAL_STATE } from './DataReducer';
const RestCall = () => {
    const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE);
    const getProducts =()=>{
        dispatch({type: ACTIONS.FETCH_START})
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(res =>{return res.json()})
                .then(
                    res => 
                   dispatch({type: ACTIONS.FETCH_COMPLETE, payload:res}) 
                )
                .catch(err => dispatch({type:ACTIONS.FETCH_ERROR})
                )
    };

  return (
    <div>
        <div>
          <button onClick={getProducts}>
            <div>
              {(state.loading) ? 'Loading' : 'Get Dog Image..'}
            </div>
          </button>
        </div>
        <div>
         <img src={state.data.message} height={300} alt={state.message} />
         {console.log(state)
         }
        </div>
        <div>
         {state.error && "OOPs ! Something went wrong "}
        </div>
    </div> 
  )
}

export default RestCall