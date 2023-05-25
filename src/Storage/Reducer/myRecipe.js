const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const myRecipe = (state = initialState, action) => {
    switch(action.type){
        case "MY_RECIPE_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "MY_RECIPE_SUCCESS":
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "MY_RECIPE_ERROR":
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

export default myRecipe;