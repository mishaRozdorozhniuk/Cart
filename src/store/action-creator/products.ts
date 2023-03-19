import {ProductsAction, ProductsActionTypes} from "../../types/products";
import {Dispatch} from "redux";
import axios from "axios";

//Create action-creator fetchProducts which will call for fetching posts
export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS, })
            // db.json it is a local file in public folder
            const response = await axios.get("db.json")
            dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data.products})
        } catch {
            dispatch(
                {type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                    payload: "Error happened while fetching posts"
                })
        }
    }
}