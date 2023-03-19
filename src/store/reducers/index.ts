import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {cartProductsReducer} from "./cartProductsReducer";

// Create combine reducer, which include reducer with products and cartProducts
export const rootReducer = combineReducers({
    products: productsReducer,
    cartProducts: cartProductsReducer
})

// using typeof we get type of rootReducer for use it in custom hook useTypedSelector
export type RootState = ReturnType<typeof rootReducer>