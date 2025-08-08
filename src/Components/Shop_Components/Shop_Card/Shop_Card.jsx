import { useContext } from "react";
import { Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useKit } from "../../../context/KitContext"; // Import the Kit context
import products from "../../../data/products";

const ProductCard = ({
  product,
  quantity,
  onAdd,
  onRemove,
  currentPrice,
  selectedKit,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/material/${product.keyName}`);
  };

  const handleQuantityClick = (e) => {
    e.stopPropagation(); // Prevent card click when quantity buttons are clicked
  };

  return (
    <div
      className="product-card rounded-[16px] bg-white shadow-md p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 border border-gray-200 transition hover:shadow-lg hover:scale-[1.01] duration-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="w-full sm:w-[160px] shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-2 min-w-0">
        <div>
          <h3
            className="text-lg font-semibold truncate block text-ellipsis whitespace-nowrap"
            title={product.title}
          >
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          {product.bulletPoints && (
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
              {product.bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {product.tag && (
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded mt-2">
              {product.tag}
            </span>
          )}

          {product.offer && (
            <p className="text-red-500 text-xs mt-1 font-medium">
              {product.offer}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold">₹ {currentPrice}</span>
            <span className="text-xs text-gray-500">{selectedKit}</span>
          </div>
          <div
            className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-[100px] justify-between"
            onClick={handleQuantityClick}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              disabled={quantity === 0}
              className="text-gray-500 hover:text-black disabled:opacity-40 cursor-pointer"
            >
              <Minus size={16} />
            </button>
            <span className="text-sm">{quantity}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAdd();
              }}
              className="text-gray-500 hover:text-black cursor-pointer"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ShopCard() {
  const { addToCart, removeFromCart, getProductQuantity } =
    useContext(CartContext);
  const { selectedKit, getProductPrice } = useKit(); // Use the Kit context

  // Function to get the appropriate shop path based on selected kit
  const getShopPath = (product, kitType) => {
    if (kitType === "Lite Kit") {
      return product.lite_shop_path;
    } else {
      // For both "Essentials Kit" and "Pro Kit", use essential_shop_path
      return product.essential_shop_path;
    }
  };

  const handleBuy = () => {
    // Find the first product in cart
    const cartItems = products.filter((product) => {
      const quantity = getProductQuantity(product.id, selectedKit);
      return quantity > 0;
    });

    if (cartItems.length > 0) {
      const firstProduct = cartItems[0];
      const shopPath = getShopPath(firstProduct, selectedKit);
      if (shopPath) {
        window.open(shopPath, "_blank");
      }
    } else {
      alert("Please add items to cart first!");
    }
  };

  // Enhanced add to cart function that includes current price and kit info
  const handleAddToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    const currentPrice = getProductPrice(product);

    // Add to cart with additional kit information
    addToCart(productId, {
      kitType: selectedKit,
      price: currentPrice,
    });
  };

  // Enhanced remove from cart function
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId, selectedKit);
  };

  return (
    <div className="shop-card p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-[32px] p-6 md:p-12 max-w-[90%] md:max-w-[76%] mx-auto my-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-center sm:text-left">
            Shop Study Kits
          </h2>
          <div className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
            Current Kit:{" "}
            <span className="font-semibold text-blue-700">{selectedKit}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => {
            const currentPrice = getProductPrice(product);
            const quantity = getProductQuantity(product.id, selectedKit);

            return (
              <ProductCard
                key={index}
                product={product}
                quantity={quantity}
                currentPrice={currentPrice}
                selectedKit={selectedKit}
                onAdd={() => handleAddToCart(product.id)}
                onRemove={() => handleRemoveFromCart(product.id)}
              />
            );
          })}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleBuy}
            className="bg-white border border-black border-b-[5px] rounded-full px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition w-full sm:w-auto text-center cursor-pointer"
          >
            Buy Now →
          </button>
        </div>
      </div>
    </div>
  );
}
