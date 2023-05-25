const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const addRecipe = (state = initialState, action) => {
    switch(action.type){
        case "ADD_RECIPE_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "ADD_RECIPE_SUCCESS":
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "ADD_RECIPE_ERROR":
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

export default addRecipe;