import * as actionTypes from "./ActionType";

const initialState = {
    loading:false,
    orders: [],
    error: null
};

export const restaurantsOrderReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_RESTAURANT_ORDER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return{...state, error: null, loading:true};
        case GET_RESTAURANT_ORDER_SUCCESS:
            return{...state,loading:false, orders: action.payload}; 
        case UPDATE_ORDER_STATUS_SUCCESS:
            const updatedOrders = state.orders.map((order)=> 
            order.id === action.payload.id?action.payload:order);
            return{...state,loading:false, orders: updatedOrders}; 
        case GET_RESTAURANT_ORDER_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return{...state,loading:false, error: action.error}; 
        default:
            return state;
    }
}