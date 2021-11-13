
import { ActionTypes } from "../constants/action-types"
export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS ,
        payLoad : products
    }
}

export const selectedProduct = (product) => {
    return {
        type : ActionTypes.SELECTED_PRODUCT ,
        payLoad : product
    }
}