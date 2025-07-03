import { ShoppingCart, Menu, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const Username = "Sample"
  const Navigate = useNavigate();
  const cartCount = 4

  const handleButton = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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
    <>
      <div className={`relative w-[90%] h-[60px] px-4 sm:px-6 md:px-8 lg:px-10 left-1/2 transform -translate-x-1/2 rounded-xl shadow-[0px_2px_8px_2px_rgba(0,_0,_0,_0.1)] flex items-center justify-between bg-white z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'top-4' : 'top-10'
      }`}>
        {/* Left Section - Mobile/Tablet Menu + Logo */}
        <div className='flex items-center gap-3'>
          {/* Mobile/Tablet Menu Button */}
          <button 
            className='lg:hidden flex items-center justify-center p-2'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <h1 className='font-bold text-xl sm:text-2xl font-heading cursor-pointer' onClick={() => Navigate('/')}>Logo</h1>
        </div>
        
        {/* Desktop Navigation - Center */}
        <ul className='hidden lg:flex items-center justify-center gap-5 text-sm font-body'>
          <li className='cursor-pointer' onClick={() => Navigate('/')}>Shop Review / Test Series</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Blog</li>
        </ul>

        {/* Right Section - Cart & User Actions */}
        <div className='flex items-center justify-center gap-3 sm:gap-5 font-body'>
          <div className='cursor-pointer relative'>
            {cartCount >= 1 ? (
              <div className='h-4 w-4 text-xs rounded-full flex items-center justify-center text-white bg-[#e31952] absolute -top-2 -right-2'>{cartCount}</div>
            ) : ""}
            <ShoppingCart size={20} className='sm:block' />
          </div>

          <button className='px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-[#e31952] text-white font-semibold outline-none cursor-pointer text-xs sm:text-sm' onClick={handleButton}>
            <span className='hidden sm:inline'>{isLoggedIn ? Username : 'Login / Sign up'}</span>
            <span className='sm:hidden'>{isLoggedIn ? Username : 'Login'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50' onClick={toggleMobileMenu}>
          <div className='bg-white w-[80%] h-full shadow-lg' onClick={(e) => e.stopPropagation()}>
            <div className='p-6'>
              <div className='flex justify-between items-center mb-8'>
                <h2 className='font-bold text-xl font-heading'>Menu</h2>
                <button onClick={toggleMobileMenu}>
                  <X size={24} />
                </button>
              </div>
              
              <ul className='space-y-6 text-lg font-body'>
                <li className='cursor-pointer py-2 border-b border-gray-100' onClick={() => {Navigate('/'); toggleMobileMenu()}}>
                  Shop Review / Test Series
                </li>
                <li className='cursor-pointer py-2 border-b border-gray-100' onClick={toggleMobileMenu}>
                  About
                </li>
                <li className='cursor-pointer py-2 border-b border-gray-100' onClick={toggleMobileMenu}>
                  Blog
                </li>
              </ul>

              <div className='mt-8 space-y-4'>
                <div className='flex items-center gap-3'>
                  <div className='cursor-pointer relative'>
                    {cartCount >= 1 ? (
                      <div className='h-4 w-4 text-xs rounded-full flex items-center justify-center text-white bg-[#e31952] absolute -top-2 -right-2'>{cartCount}</div>
                    ) : ""}
                    <ShoppingCart size={20} />
                  </div>
                  <span className='text-sm font-body'>Shopping Cart</span>
                </div>
                
                <button className='w-full px-4 py-3 rounded-xl bg-[#e31952] text-white font-semibold outline-none cursor-pointer' onClick={handleButton}>
                  {isLoggedIn ? Username : 'Login / Sign up'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav