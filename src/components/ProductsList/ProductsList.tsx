import React, {FC, useEffect} from 'react';
import {useTypesSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import styled from "styled-components";
import Product from "./Product";
import Loading from "../Loading/Loading";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  
  @media (max-width: 749px){
    grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
  }
`;

interface ProductInterface {
    id: number;
    title: number;
    stock: number;
    price: number;
    images: string;
    quantity?: number;
}

const ProductsList: FC = () => {
    // Using custom useSelector hook to get fetchedProduct, including additional info such as loading and error
    const {products, error, loading} = useTypesSelector(state => state.products)
    const selector = useTypesSelector(state => state.cartProducts)
    // Using custom hook to get action-creator fetchProducts - which will fetch all products after we call it in useEffect
    // and also saveProductToCart - action-creator which will save selected product
    const {fetchProducts, saveProductToCart} = useActions()

    // Action-creator call
    useEffect(() => {
        fetchProducts()
    }, [])

    // If loading equal true - show loader
    if(loading) {
        return <Loading />
    }

    // If error while fetching posts - show error message
    if(error) {
        return <h1>{error}</h1>
    }

    // Create function validator that will check if we already have same product in cart.
    // If we have - do nothing, if not - add.
    const isFound = (id: number) => selector.cartProducts.some(element => {
        return element.id === id;
    });

    // Function to save selected product in redux
    const handleAddToCart = (product: ProductInterface) => {
        // Usage of isFound validate function
        if(!isFound(product.id)) {
            saveProductToCart(product);
        }

        // Implement the ability to save the state of the basket between user sessions using local storage
        const items = JSON.parse(localStorage.getItem("product") || "[]");

        if(items.includes(product)) return

        items.push(product);

        localStorage.setItem("product", JSON.stringify(items));
    }

    return (
        <ProductContainer>
            {/*If we have products, generate Product component for each, and create React.Fragment to set react key*/}
            {products?.length && products.map((el: ProductInterface) => (
                <React.Fragment key={el.id}>
                    <Product
                        id={el.id}
                        title={el.title}
                        stock={el.stock}
                        price={el.price}
                        image={el.images[0]}
                        product={el}
                        isHideDeleteButton={true}
                        handleAddToCart={handleAddToCart}/>
                </React.Fragment>
            ))}
        </ProductContainer>
    );
};

export default ProductsList;