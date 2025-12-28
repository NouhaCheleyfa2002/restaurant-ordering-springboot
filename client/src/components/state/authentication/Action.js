
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
    LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAILURE, ADD_TO_FAVORITE_REQUEST,
    ADD_TO_FAVORITE_FAILURE,GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, ADD_TO_FAVORITE_SUCCESS, LOGOUT } from './ActionTypes';
import { api } from '../../config/api';
import { API_URL } from '../../config/api';
import axios from 'axios';

export const registerUser=(reqData) =>async(dispatch)=>{ 
    dispatch({type:REGISTER_REQUEST});
    try{
        
        //api call
        const {data}= await api.post(`/auth/signup`, reqData.userData);
        if(data.jwt)localStorage.setItem('token', data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate('/admin/restaurant');
        }
        else{
            reqData.navigate('/');
        }
        dispatch({type:REGISTER_SUCCESS, payload:data.jwt});
        console.log("register success", data);
        
    }catch(error){
        dispatch({type:REGISTER_FAILURE, payload:error});
        console.log("error", error);
        
    }
    
}

export const loginUser=(reqData) =>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    try{
        
        //api call
        const {data}= await api.post(`/auth/signin`, reqData.userData);
        if(data.jwt)localStorage.setItem('token', data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate('/admin/restaurant');
        }
        else{
            reqData.navigate('/');
        }
        dispatch({type:LOGIN_SUCCESS, payload:data.jwt});
        console.log("login success", data);
        
    }catch(error){
        dispatch({type:LOGIN_FAILURE, payload:error});
        
    }
    
}

export const getUser=(jwt) =>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST});
    try{
        
        //api call
        const {data}= await api.get('/users/profile', {
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        
        dispatch({type:GET_USER_SUCCESS, payload:data});
        console.log("user profile", data);
        
        
    }catch(error){
        dispatch({type:GET_USER_FAILURE, payload:error});
        console.log("error", error);
        
    }
    
}

export const addToFavorite=(jwt, restaurantId) =>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST});
    try{
        //api call
        const {data}= await api.put(`/restaurants/${restaurantId}/add-favorite`,{}, {
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        
        dispatch({type:ADD_TO_FAVORITE_SUCCESS, payload:data});
        console.log("added to favorite", data);
        
        
    }catch(error){
        dispatch({type:ADD_TO_FAVORITE_FAILURE, payload:error});
        console.log("error", error);
        
    }
}

export const logout=() =>async(dispatch)=>{
    dispatch({type:LOGOUT});
    try{
        
        localStorage.clear();
        dispatch({type:LOGOUT});
        console.lOg("logout success");
        
        
    }catch(error){
        console.log("error", error);
        
    }
    
}

