import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-custom-dark/90 backdrop-blur-md shadow-lg py-3' 
      : 'bg-transparent py-5'
  }`;
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://i.imgur.com/XZGHXs9.png" 
              alt="AUTOSCALE" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-glow-white hover:text-glow ${
                  location.pathname === link.path ? 'text-glow-white text-glow' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="px-6 py-2 bg-white/10 text-white hover:bg-white/20 rounded-md transition-colors font-medium backdrop-blur-sm"
            >
              Get Started
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-custom-dark">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-sm font-medium transition-colors hover:text-glow-white ${
                  location.pathname === link.path ? 'text-glow-white text-glow' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="block w-full px-6 py-2 bg-white/10 text-white hover:bg-white/20 rounded-md text-center transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;