"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center space-x-2">
            <Image src="/tsum.logo.jpeg" priority alt="Logo" width={40} height={40} className="rounded-full" />
            <h6 className="text-sm text-center mb-0">Tsum Records</h6>
          </Link>
          <div className="flex items-center justify-center space-x-4">
            <nav className={`hidden md:flex space-x-6`}>
              {['Home', 'Artists', 'Music', 'Merch', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="hover:text-pink-300 font-horizon text-sm transition duration-300 ease-in-out"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <Link href="/user" className="hover:text-pink-300 transition duration-300 ease-in-out flex items-center justify-center">
              <FaUser className="inline-block text-lg" />
            </Link>
            <Link href="/cart" className="hover:text-pink-300 transition duration-300 ease-in-out flex items-center justify-center">
              <FaShoppingCart className="inline-block text-lg" />
            </Link>
            <button className="md:hidden text-white" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>
        <nav
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-black z-5 pb-4`}
        >
          <ul className="flex flex-col space-y-4 items-center">
            {['Home', 'Artists', 'Music', 'Merch', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="hover:text-pink-300 font-horizon text-sm transition duration-300 ease-in-out"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
