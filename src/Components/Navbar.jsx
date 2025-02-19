import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg rounded-xl fixed w-[80%] top-10 left-45 z-50 
      before:absolute before:w-0 before:h-[2px] before:bottom-0 before:left-0 
      before:bg-gradient-to-r before:from-blue-400 before:via-blue-500 before:to-blue-600 
      hover:before:w-full before:transition-all before:duration-1000 before:ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="public/Favicon.png" alt="Logo" className='w-15' />
            <h1 className="text-xl font-bold text-gray-800">Vaultora</h1>
          </div>

          <div className="hidden sm:flex sm:space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100">
              About
            </a>
            <a href="/services" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100">
              Services
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100">
              Contact
            </a>
          </div>

          <div className="sm:hidden">
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100">
            Home
          </a>
          <a href="/about" className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100">
            About
          </a>
          <a href="/services" className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100">
            Services
          </a>
          <a href="/contact" className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
