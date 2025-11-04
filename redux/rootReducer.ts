import {combineReducers} from '@reduxjs/toolkit';
import authReducer from "./Slices/authSlice";
import productReducer from "./Slices/productSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
});

export default rootReducer;