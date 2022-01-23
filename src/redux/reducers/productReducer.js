import { SET_PRODUCTS } from "../constants/action-types"

const initialState = {
    products: []
}
const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state , products : payload
            }

        default:
            return state;
    }

}

export default productReducer;