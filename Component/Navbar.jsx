import React, { useState } from 'react'
import Frame1 from "../assets/Frame1.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-[#D2E6E4] border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-2">
            <img src={Frame1} alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-gray-800 text-lg">MyBrand</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#Home" className="text-orange-700 hover:text-indigo-600 font-medium">Home</a>
            <a href="#Courses" className="text-gray-700 hover:text-indigo-600 font-medium">Courses</a>
            <a href="#Features" className="text-gray-700 hover:text-indigo-600 font-medium">Features</a>
            <a href="#Contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
            <button className="ml-4 px-4 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">Sign in</button>
            <button className="ml-2 px-4 py-1 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">Log in</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center space-y-[4px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-0.5 w-6 bg-gray-800 transition ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-3 flex flex-col gap-3 bg-[#D2E6E4] p-4 rounded-lg shadow-md">
            <a href="#Home" className="text-orange-700 hover:text-indigo-600 font-medium">Home</a>
            <a href="#Courses" className="text-gray-700 hover:text-indigo-600 font-medium">Courses</a>
            <a href="#Features" className="text-gray-700 hover:text-indigo-600 font-medium">Features</a>
            <a href="#Contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
            <button className="mt-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">Sign in</button>
            <button className="mt-2 px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">Log in</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
