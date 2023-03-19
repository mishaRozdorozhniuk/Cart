interface ProductInterface {
    id: number;
    title: number;
    stock: number;
    price: number;
    images: string;
    quantity?: number;
}

// Create types for Products state
export interface ProductsState {
    products?: ProductInterface[],
    loading: boolean,
    error: null | string,
}

// Here we create enum which include all action types
export enum ProductsActionTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS
}

interface FetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: ProductInterface[]
}

interface FetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string
}

// Merging all actions to set it like type in reducer file for action
export type ProductsAction = FetchProductsAction
                           | FetchProductsSuccessAction
                           | FetchProductsErrorAction
