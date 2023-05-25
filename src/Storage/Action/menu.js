import axios from "axios"
import {API_URL} from "@env"

export const getMyRecipe = (token) => async (dispatch,getState) => {
    try{
        dispatch({type:"MY_RECIPE_REQUEST"})
        let headers = {
            headers:{
              "Authorization": `Bearer ${token}`
        }}
        const result = await axios.get(API_URL+"/recipe/myRecipe",headers)
        console.log(result)
        result.data.data && dispatch({type:"MY_RECIPE_SUCCESS",payload:result.data.data})
    } catch(err){
        console.log(err)
        dispatch({type:"MY_RECIPE_ERROR"})
    }
}

export const getSearchRecipe = (search) => async (dispatch,getState) => {
    try{
        dispatch({type:"SEARCH_RECIPE_REQUEST"})
        const result = await axios.get(API_URL+"/recipe?search="+search)
        console.log(result)
        result.data.data && dispatch({type:"SEARCH_RECIPE_SUCCESS",payload:result.data.data})
    } catch(err){
        console.log(err)
        dispatch({type:"SEARCH_RECIPE_ERROR"})
    }
}

export const getDetailRecipe = (id) => async (dispatch,getState) => {
    try{
        dispatch({type:"DETAIL_RECIPE_REQUEST"})
        const result = await axios.get(API_URL+"/recipe/detail/"+id)
        console.log(result)
        result.data.data && dispatch({type:"DETAIL_RECIPE_SUCCESS",payload:result.data.data})
    } catch(err){
        console.log(err)
        dispatch({type:"DETAIL_RECIPE_ERROR"})
    }
}

export const addRecipe = (token,data) => async (dispatch,getState) => {
    try{
        dispatch({type:"ADD_RECIPE_REQUEST"})
        let headers = {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
        }}
        const result = await axios.post(API_URL+"/recipe",data,headers)
        console.log(result)
        result && dispatch({type:"ADD_RECIPE_SUCCESS",payload:result})
    } catch(err){
        console.log(err)
        dispatch({type:"ADD_RECIPE_ERROR"})
    }
}

export const editRecipe = (token,data,id) => async (dispatch,getState) => {
    try{
        dispatch({type:"EDIT_RECIPE_REQUEST"})
        let headers = {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
        }}
        const result = await axios.put(API_URL+"/recipe/update/"+id,data,headers)
        console.log(result)
        result && dispatch({type:"EDIT_RECIPE_SUCCESS",payload:result})
    } catch(err){
        console.log(err)
        dispatch({type:"EDIT_RECIPE_ERROR"})
    }
}

export const deleteRecipe = (token,id) => async (dispatch,getState) => {
    try{
        dispatch({type:"DELETE_RECIPE_REQUEST"})
        let headers = {
            headers:{
                "Authorization": `Bearer ${token}`
        }}
        const result = await axios.delete(API_URL+"/recipe/delete/"+id,headers)
        console.log(result)
        result && dispatch({type:"DELETE_RECIPE_SUCCESS",payload:result})
    } catch(err){
        console.log(err)
        dispatch({type:"DELETE_RECIPE_ERROR"})
    }
}

export const editProfile = (token,data) => async (dispatch,getState) => {
    try{
        dispatch({type:"EDIT_PROFILE_REQUEST"})
        let headers = {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
        }}
        const result = await axios.put(API_URL+"/users/updateProfile",data,headers)
        console.log(result)
        result && dispatch({type:"EDIT_PROFILE_SUCCESS",payload:result})
    } catch(err){
        console.log(err)
        dispatch({type:"EDIT_PROFILE_ERROR"})
    }
}