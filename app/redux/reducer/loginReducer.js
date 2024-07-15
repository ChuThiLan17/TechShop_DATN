import { KEY_ACTION_CLEAR, KEY_ACTION_GET, KEY_ACTION_SET } from "../../constants/KeyRedux";

const initialState = {
    user: null,
};

export const loginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    //console.log({ type, payload });
    switch (type) {
        case KEY_ACTION_SET.SET_USER:
            return {
                ...state,
                user: payload.user,
            }
        case KEY_ACTION_CLEAR.CLEAR_USER:
            return initialState;
        default:
            return state;
    }
};
