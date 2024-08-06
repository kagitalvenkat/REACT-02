
import { legacy_createStore as createStore } from 'redux';

const initialState = {
    balance : 0,
    fullname: '',
    mobile: null
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
  case "deposit":
    return { ...state,  balance:state.balance + +action.payload}
  case "withdraw":
    return {...state, balance : state.balance - +action.payload};
  case "updateName":
    return {...state, fullname : action.payload};
  case "updateMobile":
    return {...state, mobile : action.payload};
  case "reset":
      return initialState;
  default:
    return state
  }
}

 const Store = createStore(accountReducer)
// console.log(Store.getState());
// Store.dispatch({type:"deposit", payload:1000})
// console.log(Store.getState());
// Store.dispatch({type:"updateName", payload:"RUDRA"})
// console.log(Store.getState());
// Store.dispatch({type:"updateMobile", payload:9912345668})
// console.log(Store.getState());

// Store.dispatch({type:"withdraw", payload:500})
// console.log(Store.getState());


export default Store;


