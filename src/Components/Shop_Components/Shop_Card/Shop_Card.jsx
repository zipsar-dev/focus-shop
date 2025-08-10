import { useNavigate } from "react-router-dom";
import { useKit } from "../../../context/KitContext"; // Import the Kit context
import products from "../../../data/products";

const ProductCard = ({ product, currentPrice, selectedKit }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/material/${product.keyName}`);
  };

  // Function to get the appropriate shop path based on selected kit
  const getShopPath = (product, kitType) => {
    if (kitType === "Lite Kit") {
      return product.lite_shop_path;
    } else {
      // For both "Essentials Kit" and "Pro Kit", use essential_shop_path
      return product.essential_shop_path;
    }
  };

  const handleBuyNow = (e) => {
    navigate(`/material/${product.keyName}`);
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

          {/* {product.tag && (
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded mt-2">
              {product.tag}
            </span>
          )} */}

          {/* Show offer only if it's not the COMBO offer */}
          {/* {product.offer &&
            !product.offer.includes("Recommended Use code COMBO") && (
              <p className="text-red-500 text-xs mt-1 font-medium">
                {product.offer}
              </p>
            )} */}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-lg font-bold">₹ {currentPrice}</span>
            <span className="text-xs text-gray-500">{selectedKit}</span>
          </div>

          {/* Direct Buy Now button */}
          <button
            onClick={handleBuyNow}
            className="text-sm cursor-pointer bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ShopCard() {
  const { selectedKit, getProductPrice } = useKit(); // Use the Kit context

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

            return (
              <ProductCard
                key={index}
                product={product}
                currentPrice={currentPrice}
                selectedKit={selectedKit}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
