import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (title) => {
        setCart((prev) => ({
            ...prev,
            [title]: (prev[title] || 0) + 1,
        }));
    };

    const removeFromCart = (title) => {
        setCart((prev) => ({
            ...prev,
            [title]: Math.max((prev[title] || 0) - 1, 0),
        }));
    };

    const deleteFromCart = (title) => {
        setCart((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[title];
            return updatedCart;
        });
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
