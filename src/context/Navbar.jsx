import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center text-white py-4 font-bold">
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <div className="hidden md:block"></div>
        
        <div className={`${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-gray-900 md:static md:bg-transparent md:flex md:gap-4 lg:gap-15 md:items-center z-50 py-4 md:py-0`}>
          <p className="cursor-pointer hover:text-gray-200 text-2xl md:text-3xl lg:text-4xl mt-[-13px] px-4 md:px-0">strip</p>
          <p className="cursor-pointer hover:text-gray-200 px-4 py-2 md:py-0 md:px-0">Products</p>
          <p className="cursor-pointer hover:text-gray-200 px-4 py-2 md:py-0 md:px-0">Solutions</p>
          <p className="cursor-pointer hover:text-gray-200 px-4 py-2 md:py-0 md:px-0">Developers</p>
          <p className="cursor-pointer hover:text-gray-200 px-4 py-2 md:py-0 md:px-0">Resources</p>
          <p className="cursor-pointer hover:text-gray-200 px-4 py-2 md:py-0 md:px-0">Pricing</p>
        </div>
        
        <div className="hidden md:flex gap-4 lg:gap-6 mx-0 lg:mx-20 items-center">
          <p className="cursor-pointer hover:text-gray-200 text-sm lg:text-base">Sign in</p>
          <p className="cursor-pointer text-white bg-blue-500 py-1 px-3 lg:px-4 rounded-full text-sm lg:text-base">Contact Sales</p>
        </div>
        
        <div className="md:hidden flex gap-2 items-center">
          <p className="cursor-pointer hover:text-gray-200 text-sm">Sign in</p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;