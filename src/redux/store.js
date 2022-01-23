import { combineReducers, createStore } from "redux";
import productReducer, { selectedProductReducer } from "./reducers/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
    allProducts : productReducer , 
    product : selectedProductReducer
});

const store = createStore(rootReducer ,composeWithDevTools());

export default store;