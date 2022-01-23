import { SELECTED_PRODUC, SET_PRODUCTS } from "../constants/action-types"

export const setProduct = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectProduct = (product) => {
    return {
        type : SELECTED_PRODUC,
        payload:product
    }
}