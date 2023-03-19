import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header/Header";
import ProductsList from "../components/ProductsList/ProductsList";
import Cart from "../components/Cart/Cart";

// Create Routs file to conveniently manage routes throughout the project. We have 2 Routs: ProductList and Cart
export const ReactRouters = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ProductsList />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};

