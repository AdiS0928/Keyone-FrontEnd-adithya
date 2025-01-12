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
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    if (url.startsWith('#')) {
      // Remove the # from the ID
      const sectionId = url.substring(1);
      scrollToSection(sectionId);
    } else {
      // Regular navigation for non-anchor links
      window.location.href = url;
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 md:top-[10px] left-1/2 transform -translate-x-1/2 w-full md:w-[95vw] max-w-[1400px] z-20 transition-all duration-300 md:rounded-lg',
        isScrolled ? 'bg-secondary-200' : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <Link href="/" className="block py-2.5 z-10 mr-4 md:mr-0" aria-label="home">
            <Image 
              alt="logo" 
              height={140} 
              width={140} 
              src="/theme/brand/logo.png" 
              className="w-[100px] md:w-[140px] h-auto"
            />
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
                onClick={(e) => handleNavClick(e, item.url)}
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
          <button 
            onClick={handleMenuOpen} 
            className="border-2 z-10 border-black text-black p-1 rounded-md" 
            aria-label={isMobileMenuOpen ? 'close menu' : 'open menu'}
          >
            {isMobileMenuOpen ? <CloseLarge size={24} /> : <Menu size={24} />}
          </button>
          <div
            className={cn(
              'fixed inset-0 z-30 bg-white text-black flex flex-col transition-all duration-500 h-[100vh] w-[100vw]',
              isMobileMenuOpen ? 'translate-y-0' : 'translate-y-[-100%]'
            )}
          >
            <div className="flex justify-between items-center w-full px-6 py-6 border-b">
              <h2 className="text-xl font-medium text-black">Menu</h2>
              <button
                onClick={handleMenuOpen}
                className="text-black p-1 rounded-md hover:bg-gray-100"
                aria-label="close menu"
              >
                <CloseLarge size={24} className="text-black fill-current" />
              </button>
            </div>
            <div className="flex flex-col px-6 py-8 space-y-6 overflow-y-auto">
              {items.map((item, index) =>
                item.children ? (
                  item.children.map((child, jndex) => (
                    <Link
                      href={child.url}
                      key={jndex}
                      onClick={(e) => handleNavClick(e, child.url)}
                      className="text-lg font-medium hover:text-gray-600 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))
                ) : (
                  <Link
                    href={item.url}
                    key={index}
                    onClick={(e) => handleNavClick(e, item.url)}
                    className={cn(
                      'text-lg font-medium hover:text-gray-600 transition-colors',
                      isActiveItem(item.url, pathname) && 'text-primary-100'
                    )}
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
