import { combineReducers, legacy_createStore as createStore } from "redux";
import { loginReducer } from "./reducer/loginReducer";

const rootReducer = combineReducers({
    loginReducer:loginReducer,
});

const Store = createStore(rootReducer);

export default Store;