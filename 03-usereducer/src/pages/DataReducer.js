export const INITIAL_STATE = {
    loading: false,
    data: {},
    error:false
}

export const ACTIONS = {
    "FETCH_START":"FETCH_START",
    "FETCH_COMPLETE":"FETCH_COMPLETE",
    "FETCH_ERROR":"FETCH_ERROR"
}

export const dataReducer = (state,action)=>{
    switch (action.type) {
        case ACTIONS.FETCH_START:
            return {
                loading:true,
                data:{},
                error:false
            }
        case ACTIONS.FETCH_COMPLETE:     
            
            return {
                loading:false,
                data: action.payload,
                error:false
            }
        case ACTIONS.FETCH_ERROR:
            return {
                loading:false,
                data: {},
                error:true
            }
        default:
            return state;
    }
}