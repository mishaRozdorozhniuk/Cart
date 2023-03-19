import {CartProductsAction, CartProductsActionTypes} from "../../types/cartProducts";
import {Dispatch} from "redux";

// Create action-creator for saving products
export const saveProductToCart = (product: any) => {
    return async (dispatch: Dispatch<CartProductsAction>) => {
        try {
            // Action-creator will dispatch action with payload, which include whole selected product
            dispatch({type: CartProductsActionTypes.SAVE_CART_PRODUCT, payload: product})
        } catch {
            console.log('error')
        }
    }
}

// Create action-creator for deleting products by id
export const deleteProductFromCart = (id: number) => {
    return async (dispatch: Dispatch<CartProductsAction>) => {
        try {
            dispatch({type: CartProductsActionTypes.DELETE_CART_PRODUCT, payload: id})
        } catch {
            console.log('error')
        }
    }
}

// Create action-creator for increase product quantity by id
export const increaseProductQuantity = (id: number) => {
    return async (dispatch: Dispatch<CartProductsAction>) => {
        try {
            dispatch({type: CartProductsActionTypes.INCREASE_PRODUCT_QUANTITY, payload: id})
        } catch {
            console.log('error')
        }
    }
}

// Create action-creator for decrease product quantity by id
export const decreaseProductQuantity = (id: number) => {
    return async (dispatch: Dispatch<CartProductsAction>) => {
        try {
            dispatch({type: CartProductsActionTypes.DECREASE_PRODUCT_QUANTITY, payload: id})
        } catch {
            console.log('error')
        }
    }
}

// Create action-creator to get total price of all products on cart page
export const getProductsTotal = () => {
    return async (dispatch: Dispatch<CartProductsAction>) => {
        try {
            dispatch({type: CartProductsActionTypes.GET_TOTAL_PRICE})
        } catch (e){
            console.log(e)
        }
    }
}

