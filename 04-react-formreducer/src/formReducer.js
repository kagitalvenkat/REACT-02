export const INITIAL_STATE = {
    email: '',
    name: '',
    country: '',
    age: 0
}

export const ACTIONS = {
    INPUT_CHANGE : 'INPUT_CHANGE',
    INCREASE_AGE : 'INCREASE_AGE',
    DECREASE_AGE : ' DECREASE_AGE'
}

export const formReducer = (state, action)=>{
    switch (action.type) {
        case ACTIONS.INPUT_CHANGE:
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

        case ACTIONS.INCREASE_AGE:
           return{
            ...state,
            age:state.age+1
           }
        case ACTIONS.DECREASE_AGE:
            return{
                ...state,
                age:state.age-1
               }
        default:
            return state;
    }
}

