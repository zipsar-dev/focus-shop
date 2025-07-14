import { useNavigate, useParams } from "react-router-dom";
import products from "../../../data/products";
import Nav from "../../../Components/Common/Nav/Nav";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const MaterialDetail = () => {
  const { id } = useParams();
  const material = products.find((material) => material.keyName === id);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const Navigate = useNavigate();
  if (!material) {
    return (
      <div className="w-full h-screen">
        <Nav />
        <div className="w-full h-full flex items-center justify-center flex-col gap-3">
          <h1 className="text-xl font-bold">Product not found</h1>
          <button
            className="px-3 py-2 border border-black border-b-3 text-blue-700 rounded-full"
            onClick={() => {
              Navigate("/");
            }}
          >
            Back To Home
          </button>
        </div>
      </div>
    );
  }

  const quantity = cart[material.id] || 0;

  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="w-full h-full md:h-[90vh] mt-6">
        <div className="w-[90%] mx-auto h-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <img
              src={material.image}
              alt="Product Image"
              className="h-[80%] object-fill"
            />
          </div>
          <div className="w-full md:w-1/2 h-full md:flex md:items-center md:justify-center">
            <div className="w-full md:w-[90%]">
              <h1 className="text-lg md:text-2xl font-bold my-4 flex gap-3 items-center flex-wrap">
                {material.title}
                {material.tag && (
                  <span className="px-3 py-2 rounded text-amber-800 text-xs bg-yellow-200/70">
                    {material.tag}
                  </span>
                )}
              </h1>
              <div className="flex gap-3 items-center">
                <h3 className="font-semibold">₹ {material.price}</h3>
              </div>
              <p className="mt-3 font-light text-gray-400 md:text-base text-sm">
                {material.description}
              </p>

              {/* Bullet Points */}
              {material.bulletPoints && material.bulletPoints.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {material.bulletPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-blue-500 font-bold">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {/* Offer */}
              {material.offer && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 font-semibold text-sm">
                    {material.offer}
                  </p>
                </div>
              )}

              <div className="w-full flex gap-5 mt-5">
                <div className="flex items-center border border-gray-300 rounded-full px-3 py-3 w-[100px] justify-between">
                  <button
                    onClick={() => removeFromCart(material.id)}
                    disabled={quantity === 0}
                    className="text-gray-500 hover:text-black disabled:opacity-40 cursor-pointer"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-sm">{quantity}</span>
                  <button
                    onClick={() => addToCart(material.id)}
                    className="text-gray-500 hover:text-black cursor-pointer"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  className="flex items-center gap-2 cursor-pointer rounded-full border border-black border-b-4 text-blue-500 px-8 py-1"
                  onClick={() => addToCart(material.id)}
                >
                  Add to Cart <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetail;
