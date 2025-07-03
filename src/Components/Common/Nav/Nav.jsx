import { ShoppingCart } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const Username = "Sample"
  const Navigate = useNavigate();
  const cartCount = 4

  const handleButton = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`relative w-[90%] h-[60px] px-4 sm:px-6 md:px-8 lg:px-10 left-1/2 transform -translate-x-1/2 rounded-xl shadow-[0px_2px_8px_2px_rgba(0,_0,_0,_0.1)] flex items-center justify-between bg-white z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'top-4' : 'top-10'
    }`}>
      {/* Left Section - Logo */}
      <h1 className='font-bold text-xl sm:text-2xl font-heading cursor-pointer' onClick={() => Navigate('/')}>Logo</h1>
      
      {/* Right Section - Cart & User Actions */}
      <div className='flex items-center justify-center gap-3 sm:gap-5 font-secondary'>
        <div className='cursor-pointer relative'>
          {cartCount >= 1 ? (
            <div className='h-4 w-4 text-xs rounded-full flex items-center justify-center text-white bg-[#517ef1] absolute -top-2 -right-2'>{cartCount}</div>
          ) : ""}
          <ShoppingCart size={20} />
        </div>

        <button className='px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded bg-[#517ef1] text-white font-semibold outline-none cursor-pointer text-xs sm:text-sm' onClick={handleButton}>
          <span className='hidden sm:inline'>{isLoggedIn ? Username : 'Login / Sign up'}</span>
          <span className='sm:hidden'>{isLoggedIn ? Username : 'Login'}</span>
        </button>
      </div>
    </div>
  )
}

export default Nav