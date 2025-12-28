import { api } from "../../config/api";
import { GET_USERS_ORDERS_FAILURE,GET_USERS_ORDERS_REQUEST,GET_USERS_ORDERS_SUCCESS,
    CREATE_ORDER_FAILURE,CREATE_ORDER_SUCCESS, CREATE_ORDER_REQUEST
 } from "./ActionType";

export const createOrder = (reqData) => {
    return async (dispatch)=> {
        dispatch({type: CREATE_ORDER_REQUEST})
        try {
            const {data} = await api.post(`/order`,reqData.order,
                {
                    headers:{
                        Authorization: `Bearer ${reqData.jwt}`,
                    },
                }
            );
            
            dispatch({type: CREATE_ORDER_SUCCESS , payload:data})
        } catch (error) {
            dispatch({type: CREATE_ORDER_FAILURE , payload:error.message})
        }
    }
}

export const getUsersOrders = (jwt) => {
    return async (dispatch)=> {
        dispatch({type: GET_USERS_ORDERS_REQUEST})
        try {
            const {data} = await api.get(`/order/user`,
                {
                    headers:{
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            
            dispatch({type: GET_USERS_ORDERS_SUCCESS , payload:data})
        } catch (error) {
            dispatch({type: GET_USERS_ORDERS_FAILURE, payload:error.message})
        }
    }
}