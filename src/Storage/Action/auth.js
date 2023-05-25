import axios from "axios"
import {API_URL} from "@env"

export const login = (data) => async (dispatch,getState) => {
    try{
        dispatch({type:"LOGIN_REQUEST"})
        const result = await axios.post(API_URL+"/auth/login",data)
        console.log(result)
        result.data.data && dispatch({type:"LOGIN_SUCCESS",payload:result.data})
    } catch(err){
        console.log(err)
        dispatch({type:"LOGIN_ERROR",payload:err.response.data})
    }
}

export const logout = () => {
    return(dispatch,getState) => {
        dispatch({type:"DELETE_STORE_TOKEN"})
    }
}

export const register = (data) => async (dispatch,getState) => {
    try{
        dispatch({type:"REGISTER_REQUEST"})
        const result = await axios.post(API_URL+"/auth/register",data)
        console.log(result)
        result.data && dispatch({type:"REGISTER_SUCCESS",payload:result.data})
    } catch(err){
        console.log(err)
        dispatch({type:"REGISTER_ERROR",payload:err.response.data})
    }
}