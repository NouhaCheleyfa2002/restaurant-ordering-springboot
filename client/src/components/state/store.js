import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./authentication/Reducer";
import { thunk } from "redux-thunk";
import {restaurantReducer} from "./restaurant/Reducer";
import { MenuItemReducer } from "./Menu/Reducer";
import { cartReducer } from "./cart/Reducer";
import { orderReducer } from "./order/Reducer";


const rootReducer=combineReducers({
    auth:authReducer,
    restaurant: restaurantReducer,
    menu: MenuItemReducer,
    cart: cartReducer,
    order: orderReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));