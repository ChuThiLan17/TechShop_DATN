import { KEY_ACTION_CLEAR, KEY_ACTION_GET, KEY_ACTION_SET } from "../../constants/KeyRedux";

const initialState = {
    cart_products: [],
};

export const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    //console.log({ type, payload });
    switch (type) {
        case KEY_ACTION_SET.SET_CART_PRODUCT:
            return {
                ...state,
                cart_products: payload.cart_products,
            }
        case KEY_ACTION_CLEAR.CLEAR_USER:
            return initialState;
        default:
            return state;
    }
};