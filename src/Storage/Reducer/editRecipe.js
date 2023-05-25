const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:false
}

const editRecipe = (state = initialState, action) => {
    switch(action.type){
        case "EDIT_RECIPE_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "EDIT_RECIPE_SUCCESS":
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "EDIT_RECIPE_ERROR":
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

export default editRecipe;