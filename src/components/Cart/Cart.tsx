import React, {FC, useEffect} from 'react';
import {useTypesSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import styled from "styled-components";
import Product from "../ProductsList/Product";

const ProductContainer = styled.div`
  padding: 0 25px;
`;

const ProductTotalWrapper = styled.div`
  margin-left: auto;
  margin-top: auto;
`;

const ProductTotal = styled.span`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  font-weight: bold;
  font-size: 22px;
`;

const ProductInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
  justify-content: center;
`;

const EmptyCartMessage = styled.p`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
`;

interface ProductInterface {
    id: number;
    title: number;
    stock: number;
    price: number;
    images: string;
    quantity?: number;
}

const Cart: FC = () => {
    // Use custom selector hook to get products for cart page
    const selector = useTypesSelector(state => state.cartProducts)

    // Get all action-creators
    const {deleteProductFromCart, increaseProductQuantity, decreaseProductQuantity, getProductsTotal} = useActions()

    // Get total price
    useEffect(() => {
        getProductsTotal()
    }, [selector.cartProducts])

    // Function to delete product from cart
    const handleRemoveFromCart = (id: number) => {
        deleteProductFromCart(id)

        // Implement the ability to save the state of the basket between user sessions using local storage
        const items = JSON.parse(localStorage.getItem('product')|| "[]");

        const index = items.findIndex((item: ProductInterface) => +item.id === +id);

        items.splice(index, 1);

        const updatedItems = JSON.stringify(items);

        localStorage.setItem('product', updatedItems);
    }

    // Function to increase product quantity
    const incrementProductQuantity = (id: number) => {
        increaseProductQuantity(id)
    }

    // Function to decrease product quantity
    const decrementProductQuantity = (id: number) => {
        decreaseProductQuantity(id)
    }

    return (
        <ProductContainer>
            <ProductTotalWrapper>
                <ProductTotal>Total: {selector.total}$</ProductTotal>
            </ProductTotalWrapper>
            <ProductInner>
                {selector.cartProducts?.length ? selector.cartProducts.map((el: ProductInterface) => (
                    // Using React.Fragment to set key, and also to not create unnecessary div.
                    <React.Fragment key={el.id}>
                        <Product id={el.id}
                                 incrementProductQuantity={incrementProductQuantity}
                                 decrementProductQuantity={decrementProductQuantity}
                                 isShowQuantity={true}
                                 handleRemoveFromCart={handleRemoveFromCart}
                                 title={el.title}
                                 stock={el.stock}
                                 price={el.price}
                                 image={el.images[0]}
                                 quantity={el.quantity}/>
                    </React.Fragment>
                    )) : <EmptyCartMessage>You have no saved items</EmptyCartMessage>}
            </ProductInner>
        </ProductContainer>
    );
};

export default Cart;