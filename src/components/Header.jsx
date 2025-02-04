import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    
    <nav className="">
      <div className="max-w-10xl mx-auto px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 mr-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-900 hover:text-orange-400 dark:text-gray-200 hover:dark:text-orange-400 px-3 py-2 rounded-md transition-colors"
              >
                {item.name}
              </Link>
              
            ))}
            
          </div>
         

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-orange-400 p-2"
              aria-label="Toggle menu"
            >
              {/* Simple hamburger menu using spans */}
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
    
  );
};

export default Header;