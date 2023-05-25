const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:false
}

const editProfile = (state = initialState, action) => {
    switch(action.type){
        case "EDIT_PROFILE_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "EDIT_PROFILE_SUCCESS":
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "EDIT_PROFILE_ERROR":
            return {
            ...state,
            data:action.payload,
            isLoading:false,
            isError:true,
            isSuccess:false
        }
        default:
            return state
    }
}

export default editProfile;