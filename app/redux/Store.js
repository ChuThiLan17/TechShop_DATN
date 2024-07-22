import { combineReducers, legacy_createStore as createStore } from "redux";
import { loginReducer } from "./reducer/loginReducer";
import { productReducer } from "./reducer/productReducer";


const rootReducer = combineReducers({
    loginReducer: loginReducer,
    productReducer: productReducer
});

const Store = createStore(rootReducer);

export default Store;