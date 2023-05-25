const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true,
    errorMessage:null
}

const register = (state = initialState, action) => {
    switch(action.type){
        case "REGISTER_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false,
                data:null
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "REGISTER_ERROR":
            return {
            ...state,
            errorMessage:action.payload,
            isLoading:false,
            isError:true,
            isSuccess:false
        }
        default:
            return state
    }
}

export default register;