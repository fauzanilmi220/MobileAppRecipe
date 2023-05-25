import { combineReducers } from "redux";
import auth from "./auth";
import register from "./register";
import editProfile from "./editProfile";
import myRecipe from "./myRecipe";
import searchRecipe from "./searchRecipe";
import detailRecipe from "./detailRecipe";
import addRecipe from "./addRecipe";
import deleteRecipe from "./deleteRecipe";
import editRecipe from "./editRecipe";

const appReducers = combineReducers({
    auth, register,editProfile ,myRecipe, searchRecipe, detailRecipe, addRecipe, deleteRecipe, editRecipe
})

export default appReducers