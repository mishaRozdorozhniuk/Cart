// Import types for our initialState and types for action
import {CartProductsActionTypes, CartProductsState, CartProductsAction} from "../../types/cartProducts";

// Set initial state
const initialState: CartProductsState = {
    cartProducts: [],
    total: 0
}

export const cartProductsReducer = (state = initialState, action: CartProductsAction): CartProductsState => {
    switch (action.type) {
        case CartProductsActionTypes.SAVE_CART_PRODUCT:
            // Simple logic to adding product to cart array
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload]
            }
        case CartProductsActionTypes.DELETE_CART_PRODUCT:
            // logic to deleting product from cart array by id
            return {
                ...state,
                cartProducts: state.cartProducts.filter((item) => item.id !== action.payload),
            }
        case CartProductsActionTypes.INCREASE_PRODUCT_QUANTITY:
            // Increase quantity for single product by id
            return {
                ...state,
                cartProducts: state.cartProducts.map((item) => {
                    if(item.id === action.payload) {
                        return {...item, quantity: item.quantity + 1}
                    }
                    return item
                })
            }
        case CartProductsActionTypes.DECREASE_PRODUCT_QUANTITY:
            // Decrease quantity for single product by id
            return {
                ...state,
                cartProducts: state.cartProducts.map((item) => {
                    // Add validation if quantity equal 0 to prevent negative numbers
                    if(item.id === action.payload && item.quantity !== 0) {
                        return {...item, quantity: item.quantity - 1}
                    }
                    return item
                })
            }
        case CartProductsActionTypes.GET_TOTAL_PRICE:
            // Get total price using reduce method
            return {
                ...state,
                total: state.cartProducts.reduce((cartTotal, product) => {
                    const {price, quantity} = product;
                    const itemTotal = price * quantity

                    cartTotal += itemTotal

                    return cartTotal
                }, 0)
            }
        default:
            return state
    }
}
