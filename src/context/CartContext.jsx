import React, { createContext, useState, useEffect, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : {};
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

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

    const contextValue = useMemo(() => ({
        cart,
        addToCart,
        removeFromCart,
        deleteFromCart,
    }), [cart]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};