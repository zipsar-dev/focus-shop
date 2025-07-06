import { ShoppingCart, X } from 'lucide-react';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const cartCount = Object.values(cart).reduce((acc, qty) => acc + qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartClick = () => {
    if (cartCount > 0) {
      navigate("/cart");
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      {/* Toast */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-auto bg-white text-blue-700 border border-black border-b-[5px] px-4 sm:px-6 py-2 rounded-full shadow-md z-[999] flex items-center gap-2 text-sm sm:text-base font-semibold">
          <X
            size={16}
            onClick={() => setShowToast(false)}
            className="cursor-pointer hover:text-red-500 transition"
          />
          <span className="truncate">Your cart is empty. Please add items to proceed.</span>
        </div>
      )}

      {/* Navbar */}
      <div
        className={`relative w-[90%] h-[60px] px-4 sm:px-6 md:px-8 lg:px-10 left-1/2 transform -translate-x-1/2 rounded-xl shadow-[0px_2px_8px_2px_rgba(0,_0,_0,_0.1)] flex items-center justify-between bg-white z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'top-4' : 'top-10'
        }`}
      >
        {/* Logo */}
        <h1 onClick={() => navigate('/')}>
          <img
            src='/Images/logo.png'
            alt='Focus Logo'
            className='w-24 sm:w-28 md:w-32 lg:w-36 cursor-pointer'
          />
        </h1>

        {/* Cart Button */}
        <div className='flex items-center justify-center gap-3 sm:gap-5 font-secondary'>
          <button
            onClick={handleCartClick}
            className="bg-white border border-black border-b-[5px] rounded-full px-4 sm:px-5 py-2 text-blue-700 font-semibold hover:bg-blue-50 transition flex items-center gap-2 relative cursor-pointer"
          >
            <ShoppingCart size={18} />
            <span className="text-xs sm:text-sm">Go to Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
