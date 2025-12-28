import { api } from "../../config/api";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS,
    FIND_CART_REQUEST, FIND_CART_SUCCESS, FIND_CART_FAILURE, GET_ALL_CART_ITEMS_REQUEST,
    GET_ALL_CART_ITEMS_SUCCESS, GET_ALL_CART_ITEMS_FAILURE,
    UPDATE_CARTITEM_REQUEST,
    UPDATE_CARTITEM_SUCCESS,
    UPDATE_CARTITEM_FAILURE,
    REMOVE_CARTITEM_REQUEST,
    REMOVE_CARTITEM_SUCCESS,
    REMOVE_CARTITEM_FAILURE,
    CLEAR_CART_REQUEST,
    CLEAR_CART_SUCCESS,
    CLEAR_CART_FAILURE
 } from "./ActionType";

export const findCart = (token) => {
    return async (dispatch)=> {
        dispatch({type: FIND_CART_REQUEST})
        try {
            const response = await api.get(`/cart/`, 
                {
                    headers:{
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            dispatch({type: FIND_CART_SUCCESS , payload:response.data})
        } catch (error) {
            dispatch({type: FIND_CART_FAILURE , payload:error})
        }
    }
}

export const getAllCartItem = (reqData) => {
    return async (dispatch)=> {
        dispatch({type: GET_ALL_CART_ITEMS_REQUEST})
        try {
            const response = await api.get(`/carts/${reqData.cardId}/items`, 
                {
                    headers:{
                        Authorization: `Bearer ${reqData.token}`,
                    },
                }
            );
            dispatch({type: GET_ALL_CART_ITEMS_SUCCESS , payload:response.data})
        } catch (error) {
            dispatch({type: GET_ALL_CART_ITEMS_FAILURE , payload:error})
        }
    }
}

export const addItemToCart = (reqData) => {
    return async (dispatch)=> {
        dispatch({type: ADD_ITEM_TO_CART_REQUEST})
        try {
            const {data} = await api.put(`/cart/add`, reqData.cartItem, 
                {
                    headers:{
                        Authorization: `Bearer ${reqData.token}`,
                    },
                }
            );
            dispatch({type: ADD_ITEM_TO_CART_SUCCESS , payload:data})
        } catch (error) {
            dispatch({type: ADD_ITEM_TO_CART_FAILURE , payload:error.message})
        }
    }
}

export const updateCartItem = (reqData) => {
    return async (dispatch)=> {
        dispatch({type: UPDATE_CARTITEM_REQUEST})
        try {
            const {data} = await api.put(`/cart-item/update`, reqData.data, 
                {
                    headers:{
                        Authorization: `Bearer ${reqData.jwt}`,
                    },
                }
            );
            dispatch({type: UPDATE_CARTITEM_SUCCESS , payload:data})
        } catch (error) {
            dispatch({type: UPDATE_CARTITEM_FAILURE , payload:error.message})
        }
    }
}

export const removeCartItem = (cartItemId, jwt) => {
    return async (dispatch)=> {
        dispatch({type: REMOVE_CARTITEM_REQUEST})
        try {
            const {data} = await api.delete(`/cart-item/${cartItemId}/remove`,
                {
                    headers:{
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("remove cart item", data);
            
            dispatch({type: REMOVE_CARTITEM_SUCCESS , payload:cartItemId})
        } catch (error) {
            dispatch({type: REMOVE_CARTITEM_FAILURE , payload:error.message})
        }
    }
}

export const clearCart = () => {
    return async (dispatch)=> {
        dispatch({type: CLEAR_CART_REQUEST})
        try {
            const {data} = await api.put(`/cart/clear`,{},
                {
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    },
                }
            );
            
            dispatch({type: CLEAR_CART_SUCCESS , payload:data})
        } catch (error) {
            dispatch({type: CLEAR_CART_FAILURE , payload:error.message})
        }
    }
}