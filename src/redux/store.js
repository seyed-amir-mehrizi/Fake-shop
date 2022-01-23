import { combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
    allProducts : productReducer
});

const store = createStore(rootReducer ,composeWithDevTools());

export default store;