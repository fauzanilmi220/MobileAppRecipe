const initialState = {
    data: null,
    isLoading:false,
    isError:false,
    isSuccess:true
}

const detailRecipe = (state = initialState, action) => {
    switch(action.type){
        case "DETAIL_RECIPE_REQUEST":
            return {
                ...state,
                isLoading:true,
                isError:false,
                isSuccess:false
            }
        case "DETAIL_RECIPE_SUCCESS":
            return {
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false,
                isSuccess:true
            }
        case "DETAIL_RECIPE_ERROR":
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

export default detailRecipe;