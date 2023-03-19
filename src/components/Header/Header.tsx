import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const Logo = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

const CartIcon = styled.i`
  font-size: 2rem;
  color: #000000;
  cursor: pointer;
`;

const Header = () => {

    return (
        <HeaderContainer>
            <Link style={{textDecoration: "none"}} to="/">
                <Logo>
                    Logo
                </Logo>
            </Link>
            <Link to='/cart'>
                <CartIcon className="fa fa-shopping-cart" aria-hidden="true">
            </CartIcon>
            </Link>
        </HeaderContainer>
    );
};

export default Header;
