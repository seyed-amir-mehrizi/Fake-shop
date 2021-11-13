import { ActionTypes } from "../constants/action-types";


const initialState = {
    products: [
        {
            id : 1,
            title : "Amir",
            category : "Programmer"
        }
    ]
}
export const ProductReducer = (state = initialState, {type , payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }

}