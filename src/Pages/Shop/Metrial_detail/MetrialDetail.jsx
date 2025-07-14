import { useNavigate, useParams } from "react-router-dom";
import products from "../../../data/products";
import Nav from "../../../Components/Common/Nav/Nav";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Footer from "../../../Components/Common/Footer/Footer";

const MaterialDetail = () => {
  const { id } = useParams();
  const material = products.find((material) => material.keyName === id);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  function getAnyTwoOtherProducts(products, currentKeyName) {
    const otherProducts = products.filter((p) => p.keyName !== currentKeyName);
    const shuffled = otherProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }

  if (!material) {
    return (
      <div className="w-full h-screen">
        <Nav />
        <div className="w-full h-full flex items-center justify-center flex-col gap-3 px-4">
          <h1 className="text-xl font-bold text-center">Product not found</h1>
          <button
            className="px-4 py-2 border border-black border-b-4 text-blue-700 rounded-full hover:bg-gray-50 transition-colors"
            onClick={() => {
              navigate("/");
            }}
          >
            Back To Home
          </button>
        </div>
      </div>
    );
  }

  const quantity = cart[material.id] || 0;
  const recommendedProducts = getAnyTwoOtherProducts(products, id);

  return (
    <div className="w-full min-h-screen">
      <Nav />
      <div className="w-full mt-15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Product Section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Product Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="space-y-4">
                {/* Title and Tag */}
                <div className="space-y-2">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                    {material.title}
                  </h1>
                  {material.tag && (
                    <span className="inline-block px-3 py-1 rounded-full text-amber-800 text-xs sm:text-sm bg-yellow-200/70">
                      {material.tag}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    ₹ {material.price}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {material.description}
                </p>

                {/* Bullet Points */}
                {material.bulletPoints && material.bulletPoints.length > 0 && (
                  <ul className="space-y-2">
                    {material.bulletPoints.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm sm:text-base text-gray-600"
                      >
                        <span className="text-blue-500 font-bold mt-1">•</span>
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Offer */}
                {material.offer && (
                  <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 font-semibold text-sm sm:text-base">
                      {material.offer}
                    </p>
                  </div>
                )}

                {/* Add to Cart Section */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full sm:w-auto sm:min-w-[120px] justify-between">
                    <button
                      onClick={() => removeFromCart(material.id)}
                      disabled={quantity === 0}
                      className="text-gray-500 hover:text-black disabled:opacity-40 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-sm font-medium px-2">{quantity}</span>
                    <button
                      onClick={() => addToCart(material.id)}
                      className="text-gray-500 hover:text-black cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className="flex items-center justify-center gap-2 cursor-pointer rounded-full border border-black border-b-4 text-blue-500 px-6 py-2 hover:bg-gray-50 transition-colors flex-1 sm:flex-none"
                    onClick={() => addToCart(material.id)}
                  >
                    Add to Cart <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Products Section */}
          <div className="my-12 sm:my-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              You might also like
            </h2>

            {/* Mobile: Stack vertically */}
            <div className="block sm:hidden space-y-4">
              {recommendedProducts.map((product) => {
                const productQuantity = cart[product.id] || 0;
                return (
                  <div
                    key={product.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition cursor-pointer min-h-[180px]"
                    onClick={() => navigate(`/material/${product.keyName}`)}
                  >
                    <div className="flex gap-4 h-full">
                      <div className="w-32 h-32 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col min-w-0">
                        <h3 className="font-semibold text-base mb-3 line-clamp-2">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                          {product.description}
                        </p>
                        {product.tag && (
                          <span className="inline-block bg-yellow-200/70 text-amber-800 text-xs font-medium px-2 py-1 rounded mb-3 w-fit">
                            {product.tag}
                          </span>
                        )}
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-bold text-base">
                            ₹ {product.price}
                          </span>
                          <div
                            className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-[90px] justify-between"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFromCart(product.id);
                              }}
                              disabled={productQuantity === 0}
                              className="text-gray-500 hover:text-black disabled:opacity-40 cursor-pointer"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm">{productQuantity}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(product.id);
                              }}
                              className="text-gray-500 hover:text-black cursor-pointer"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tablet and Desktop: Horizontal layout */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedProducts.map((product) => {
                  const productQuantity = cart[product.id] || 0;
                  return (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition cursor-pointer min-h-[200px]"
                      onClick={() => navigate(`/material/${product.keyName}`)}
                    >
                      <div className="flex gap-4 h-full">
                        <div className="w-32 h-32 flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 flex flex-col min-w-0">
                          <h3 className="font-semibold text-base mb-3 line-clamp-2">
                            {product.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                            {product.description}
                          </p>
                          {product.tag && (
                            <span className="inline-block bg-yellow-200/70 text-amber-800 text-xs font-medium px-2 py-1 rounded mb-3 w-fit">
                              {product.tag}
                            </span>
                          )}
                          <div className="flex items-center justify-between mt-auto">
                            <span className="font-bold text-base">
                              ₹ {product.price}
                            </span>
                            <div
                              className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-[90px] justify-between"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFromCart(product.id);
                                }}
                                disabled={productQuantity === 0}
                                className="text-gray-500 hover:text-black disabled:opacity-40 cursor-pointer"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="text-sm">{productQuantity}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addToCart(product.id);
                                }}
                                className="text-gray-500 hover:text-black cursor-pointer"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MaterialDetail;
