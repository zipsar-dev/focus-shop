import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : {};
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (id) => {
        setCart((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const removeFromCart = (id) => {
        setCart((prev) => {
            const newQty = Math.max((prev[id] || 0) - 1, 0);
            const updated = { ...prev };
            if (newQty === 0) {
                delete updated[id];
            } else {
                updated[id] = newQty;
            }
            return updated;
        });
    };

    const deleteFromCart = (id) => {
        setCart((prev) => {
            const updated = { ...prev };
            delete updated[id];
            return updated;
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
