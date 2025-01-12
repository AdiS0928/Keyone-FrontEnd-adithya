'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { isActiveItem, items } from './data';
import { Menu, CloseLarge } from '@carbon/icons-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 md:top-[10px] left-1/2 transform -translate-x-1/2 w-[95vw] max-w-[1400px] z-20 transition-all duration-300 rounded-lg',
        isScrolled ? 'bg-secondary-200' : 'bg-transparent' // Apply bg-secondary-200 on scroll
      )}
      style={{
        color: '#000',
      }}
    >
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="block py-2.5 z-10 mr-4 md:mr-0" aria-label="home">
            <Image alt="logo" height={140} width={140} src="/theme/brand/logo.png" />
          </Link>
        </div>
        <ul className="hidden lg:flex items-center h-14 my-2 bg-white/50 rounded text-white px-2">
          {items.map((item) => (
            <li
              key={item.url}
              className="px-4 py-2 rounded cursor-pointer border border-transparent flex items-center justify-center"
            >
              <Link
                href={item.url}
                className={cn(
                  'flex items-center gap-3 hover:bg-white hover:text-black px-4 py-2 rounded',
                  isActiveItem(item.url, pathname) && 'text-black bg-white'
                )}
              >
                <span className='poppins'>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 min-[1024px]:hidden">
          <button onClick={handleMenuOpen} className="border-2 z-10 border-black text-black p-1" aria-label={isMobileMenuOpen ? 'close menu' : 'open menu'}>
            {isMobileMenuOpen ? <CloseLarge size={24} /> : <Menu size={24} />}
          </button>
          <div
            className={cn(
              'fixed inset-0 z-30 bg-white text-primary-100 flex flex-col items-center justify-center transition-all duration-500 h-[100vh] w-[100vw]',
              isMobileMenuOpen ? 'translate-y-0' : 'translate-y-[-100%]'
            )}
          >
            <div className="flex justify-between items-center w-full px-4 py-4">
              <h2 className="text-2xl">Menu</h2>
              <button
                onClick={handleMenuOpen}
                className="text-primary-100 p-1"
                aria-label="close menu"
              >
                <CloseLarge size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow space-y-4">
              {items.map((item, index) =>
                item.children ? (
                  item.children.map((child, jndex) => (
                    <Link
                      href={child.url}
                      key={jndex}
                      className="text-lg hover:underline"
                      onClick={handleMenuOpen}
                    >
                      {child.label}
                    </Link>
                  ))
                ) : (
                  <Link
                    href={item.url}
                    key={index}
                    className={cn(
                      'text-lg hover:underline',
                      isActiveItem(item.url, pathname) && 'underline'
                    )}
                    onClick={handleMenuOpen}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
