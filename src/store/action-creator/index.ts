import * as ProductsActionCreators from './products'
import * as CardProductsActionCreators from './cartProducts'

export default {
    ...CardProductsActionCreators,
    ...ProductsActionCreators
}