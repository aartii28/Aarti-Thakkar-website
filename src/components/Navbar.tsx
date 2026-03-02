import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Women in Tech', href: '#women-in-tech' },
    { name: 'Insights', href: '#insights' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-coffee-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 group"
        >
          <Coffee className="w-6 h-6 text-coffee-medium group-hover:rotate-12 transition-transform" />
          <span className="font-serif text-xl font-bold tracking-tight">Aarti Thakkar</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-coffee-medium hover:text-coffee-dark transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 bg-coffee-dark text-cream rounded-full text-sm font-medium hover:bg-coffee-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-coffee-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream border-b border-coffee-dark/5 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif text-coffee-dark"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-serif text-coffee-light"
          >
            Get in Touch
          </a>
        </motion.div>
      )}
    </nav>
  );
}
