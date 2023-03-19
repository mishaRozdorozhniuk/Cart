interface Product {
    id: number;
    title: number;
    stock: number;
    price: number;
    images: string;
    quantity?: number;
}

export interface CartProductsState {
    cartProducts: any[],
    total?: number
}

// Here we create enum which include all action types
export enum CartProductsActionTypes {
    SAVE_CART_PRODUCT = "SAVE_CART_PRODUCT",
    DELETE_CART_PRODUCT = "DELETE_CART_PRODUCT",
    INCREASE_PRODUCT_QUANTITY = "INCREASE_PRODUCT_QUANTITY",
    DECREASE_PRODUCT_QUANTITY = "DECREASE_PRODUCT_QUANTITY",
    GET_TOTAL_PRICE = "GET_TOTAL_PRICE"
}

interface SaveProductToCartAction {
    type: CartProductsActionTypes.SAVE_CART_PRODUCT;
    payload: Product[]
}

interface DeleteProductsFromCartAction {
    type: CartProductsActionTypes.DELETE_CART_PRODUCT;
    payload: number
}

interface IncreaseProductQuantityAction {
    type: CartProductsActionTypes.INCREASE_PRODUCT_QUANTITY;
    payload: number
}

interface DecreaseProductQuantityAction {
    type: CartProductsActionTypes.DECREASE_PRODUCT_QUANTITY;
    payload: number
}

interface GetTotalProductsPriceAction {
    type: CartProductsActionTypes.GET_TOTAL_PRICE
}

// Merging all actions
export type CartProductsAction = SaveProductToCartAction
                                | DeleteProductsFromCartAction
                                | IncreaseProductQuantityAction
                                | DecreaseProductQuantityAction
                                | GetTotalProductsPriceAction
