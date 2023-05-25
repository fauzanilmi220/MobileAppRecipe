const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const searchRecipe = (state = initialState, action) => {
    switch(action.type){
        case "SEARCH_RECIPE_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "SEARCH_RECIPE_SUCCESS":
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "SEARCH_RECIPE_ERROR":
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

export default searchRecipe;