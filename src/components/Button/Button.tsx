import React from "react";
import styled from "styled-components";

interface AddToCartButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const AddToCartButtonContainer = styled.button`
  background-color: #ff5722;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  font-size: 20px;

  &:hover {
    background-color: #f44336;
  }
`;

const Button: React.FC<AddToCartButtonProps> = ({ onClick, children} ) => {
    // Use children like text insight button
    return (
        <AddToCartButtonContainer onClick={onClick}>
            {children}
        </AddToCartButtonContainer>
    );
};

export default Button;
