import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUC, SET_PRODUCTS } from "../constants/action-types"

const initialState = {
    products: []
}
const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state, products: payload
            }
        default:
            return state;
    }

}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECTED_PRODUC:
            return {
                ...state, ...payload
            }
        case REMOVE_SELECTED_PRODUCT:
            return {}

        default:
            return state;
    }
}

export default productReducer;