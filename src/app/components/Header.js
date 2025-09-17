'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-[#2c4a0f]">
          Farm Dung Exporter
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#hero" className="hover:text-[#78350f]">
            Home
          </a>
          <a href="#products" className="hover:text-[#78350f]">
            Products
          </a>
          <a href="#about" className="hover:text-[#78350f]">
            About Us
          </a>
          <a href="#benefits" className="hover:text-[#78350f]">
            Benefits
          </a>
          <a href="#contact" className="hover:text-[#78350f]">
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[#2c4a0f] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#92400e] transition"
        >
          Get Free Quote
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#78350f]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2 shadow-sm">
          <a href="#hero" className="block py-2 text-gray-700 hover:text-[#78350f]">
            Home
          </a>
          <a href="#products" className="block py-2 text-gray-700 hover:text-[#78350f]">
            Products
          </a>
          <a href="#about" className="block py-2 text-gray-700 hover:text-[#78350f]">
            About Us
          </a>
          <a href="#benefits" className="block py-2 text-gray-700 hover:text-[#78350f]">
            Benefits
          </a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-[#78350f]">
            Contact
          </a>
          <a
            href="#contact"
            className="mt-3 inline-block bg-[#78350f] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#92400e] transition"
          >
            Get Free Quote
          </a>
        </div>
      )}
    </header>
  );
}