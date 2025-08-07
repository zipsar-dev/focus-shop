/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  // Store cart item details including kit type and price
  const [cartDetails, setCartDetails] = useState(() => {
    const storedDetails = localStorage.getItem("cartDetails");
    return storedDetails ? JSON.parse(storedDetails) : {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
  }, [cartDetails]);

  // Helper function to create a unique key for product + kit combination
  const createCartKey = (id, kitType = "Lite Kit") => {
    return `${id}_${kitType}`;
  };

  const addToCart = (id, options = {}) => {
    const kitType = options.kitType || "Lite Kit";
    const cartKey = createCartKey(id, kitType);

    setCart((prev) => ({
      ...prev,
      [cartKey]: (prev[cartKey] || 0) + 1,
    }));

    // Store kit information and price if provided
    if (options.kitType && options.price !== undefined) {
      setCartDetails((prev) => ({
        ...prev,
        [cartKey]: {
          productId: id,
          kitType: options.kitType,
          price: options.price,
          addedAt: new Date().toISOString(),
        },
      }));
    }
  };

  const removeFromCart = (id, kitType = "Lite Kit") => {
    const cartKey = createCartKey(id, kitType);

    setCart((prev) => {
      const newQty = Math.max((prev[cartKey] || 0) - 1, 0);
      const updated = { ...prev };
      if (newQty === 0) {
        delete updated[cartKey];
        // Also remove from cart details when quantity reaches 0
        setCartDetails((prevDetails) => {
          const updatedDetails = { ...prevDetails };
          delete updatedDetails[cartKey];
          return updatedDetails;
        });
      } else {
        updated[cartKey] = newQty;
      }
      return updated;
    });
  };

  const deleteFromCart = (id, kitType = "Lite Kit") => {
    const cartKey = createCartKey(id, kitType);

    setCart((prev) => {
      const updated = { ...prev };
      delete updated[cartKey];
      return updated;
    });

    // Also remove from cart details
    setCartDetails((prev) => {
      const updated = { ...prev };
      delete updated[cartKey];
      return updated;
    });
  };

  // Helper function to get quantity for a specific product and kit combination
  const getProductQuantity = (id, kitType = "Lite Kit") => {
    const cartKey = createCartKey(id, kitType);
    return cart[cartKey] || 0;
  };

  // Helper function to get cart total with kit-specific pricing
  const getCartTotal = () => {
    return Object.keys(cart).reduce((total, cartKey) => {
      const quantity = cart[cartKey];
      const details = cartDetails[cartKey];
      const price = details ? details.price : 0;
      return total + quantity * price;
    }, 0);
  };

  // Helper function to get total items count
  const getCartCount = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  // Helper function to get cart items with full details
  const getCartItems = () => {
    return Object.keys(cart).map((cartKey) => {
      const details = cartDetails[cartKey];
      return {
        cartKey,
        id: details?.productId || parseInt(cartKey.split("_")[0]),
        quantity: cart[cartKey],
        kitType: details?.kitType || "Lite Kit",
        price: details?.price || 0,
        addedAt: details?.addedAt,
      };
    });
  };

  // Function to clear entire cart
  const clearCart = () => {
    setCart({});
    setCartDetails({});
  };

  const contextValue = useMemo(
    () => ({
      cart,
      cartDetails,
      addToCart,
      removeFromCart,
      deleteFromCart,
      getProductQuantity,
      getCartTotal,
      getCartCount,
      getCartItems,
      clearCart,
      createCartKey, // Expose this for components that need it
    }),
    [cart, cartDetails]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
