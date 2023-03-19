import React, {FC} from 'react';
import styled from "styled-components";
import Button from "../Button/Button";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  text-align: left;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 11px 37px -16px rgba(0,0,0,0.75);
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 200px;
  object-fit: contain;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem;
`;

const ProductStock = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0 1rem.5rem;
  font-weight: 400;
`;

const ProductPrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  color: #ce0c0c;
`;

const ProductQuantity = styled.div`
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
`;

const ProductQuantityIncrease = styled.button`
  font-size: 2rem;
  margin: 0 15px 0 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const ProductQuantityDecrease = styled.button`
  font-size: 2rem;
  margin: 0 0 0 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  
`;

const ProductQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 10px 0;
  border: 1px solid #dadada;
  padding: 5px;
  border-radius: 5px;
`;

interface ProductInterface {
    id: number;
    title: number;
    stock: number;
    price: number;
    images: string;
    quantity?: number;
}

interface ProductProps {
    id: number;
    title: number;
    stock: number;
    price: number;
    image: string;
    product?: ProductInterface;
    handleAddToCart?: (product: ProductInterface | any) => void;
    handleRemoveFromCart?: (id: number) => void;
    incrementProductQuantity?: (id: number) => void;
    decrementProductQuantity?: (id: number) => void;
    isHideDeleteButton?: boolean;
    isShowQuantity?: boolean;
    quantity?: number;
}

const Product: FC<ProductProps> = ({
                                       id,
                                       title,
                                       stock, price,
                                       image,
                                       handleAddToCart,
                                       product,
                                       isHideDeleteButton,
                                       handleRemoveFromCart,
                                       isShowQuantity,
                                       incrementProductQuantity,
                                       decrementProductQuantity,
                                       quantity
}) => {
    return (
        <ProductContainer>
            <ProductImage src={image} alt="product-photo" />
            <ProductName>{title}</ProductName>
            <ProductStock>In stock: {stock}</ProductStock>
            <ProductPrice>{price}$</ProductPrice>
            {/*Show quantity part depend on isShowQuantity prop*/}
            {isShowQuantity &&
                <ProductQuantityWrapper>
                    <ProductQuantityIncrease onClick={() => incrementProductQuantity?.(id)}>
                        +
                    </ProductQuantityIncrease>
                    <ProductQuantity>{quantity}</ProductQuantity>
                    <ProductQuantityDecrease onClick={() => decrementProductQuantity?.(id)}>
                        -
                    </ProductQuantityDecrease>
                </ProductQuantityWrapper>
            }
            {/*Show and hide button with text "add to cart" or "delete" depend on prop isHideDeleteButton*/}
            {isHideDeleteButton ?
                <Button onClick={() => handleAddToCart ? handleAddToCart(product) : null}>add to cart</Button> :
                <Button onClick={() => handleRemoveFromCart ? handleRemoveFromCart(id) : null}>delete</Button>}
        </ProductContainer>
    );
};

export default Product;