import { GET_RESTAURANT_ORDER_REQUEST,GET_RESTAURANT_ORDER_SUCCESS, GET_RESTAURANT_ORDER_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS, UPDATE_ORDER_STATUS_FAILURE
 } from "./ActionType";
 import { api } from "../../config/api";
import { GET_ALL_CART_ITEMS_FAILURE } from "../cart/ActionType";

 export const updateOrderStatus = (orderId, orderStatus, jwt) => {
     return async (dispatch)=> {
         dispatch({type: UPDATE_ORDER_STATUS_REQUEST})
         try {
             const response = await api.put(`/admin/orders/${orderId}/${orderStatus}`,{},
                 {
                     headers:{
                         Authorization: `Bearer ${jwt}`,
                     },
                 }
             );
             
             dispatch({type: UPDATE_ORDER_STATUS_SUCCESS , payload:response.data})
         } catch (error) {
             dispatch({type: UPDATE_ORDER_STATUS_FAILURE, error})
         }
     }
 }

 export const fetchRestaurantOrder = (restaurantId, orderStatus, jwt) => {
     return async (dispatch)=> {
         dispatch({type: GET_RESTAURANT_ORDER_REQUEST})
         try {
             const {data} = await api.get(`/admin/order/restaurant/${restaurantId}`,
                 {
                    params:{order_status: orderStatus},
                     headers:{
                         Authorization: `Bearer ${jwt}`,
                     },
                 }
             );
             
             dispatch({type: GET_RESTAURANT_ORDER_SUCCESS , payload:data})
         } catch (error) {
             dispatch({type: GET_ALL_CART_ITEMS_FAILURE, error})
         }
     }
 }