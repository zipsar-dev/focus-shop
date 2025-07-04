import { ShoppingCart } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const cartCount = 4; // Replace with dynamic cart count if needed

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`relative w-[90%] h-[60px] px-4 sm:px-6 md:px-8 lg:px-10 left-1/2 transform -translate-x-1/2 rounded-xl shadow-[0px_2px_8px_2px_rgba(0,_0,_0,_0.1)] flex items-center justify-between bg-white z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'top-4' : 'top-10'
      }`}
    >
      {/* Left Section - Logo */}
      <h1 onClick={() => navigate('/')}>
        <img
          src='public/Images/logo.png'
          alt='Focus Logo'
          className='w-24 sm:w-28 md:w-32 lg:w-36 cursor-pointer'
        />
      </h1>

      {/* Right Section - Cart Button */}
      <div className='flex items-center justify-center gap-3 sm:gap-5 font-secondary'>
        <button
  onClick={() => Navigate("/cart")}
  className="bg-white border border-black border-b-[5px] rounded-full px-4 sm:px-5 py-2 text-blue-700 font-semibold hover:bg-blue-50 transition flex items-center gap-2"
>
  <ShoppingCart size={18} />
  <span className="text-xs sm:text-sm">Go to Cart</span>
  {cartCount > 0 && (
    <span className="ml-1 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
      {cartCount}
    </span>
  )}
</button>

      </div>
    </div>
  );
};

export default Nav;
