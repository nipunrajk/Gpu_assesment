import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import MobileMenu from './MobileMenu';

export default function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className='bg-black border-b border-gray-800 px-3 sm:px-4 lg:px-6 py-3 lg:py-4'>
        <div className='flex items-center justify-between'>
          {/* Left side - Mobile menu button */}
          <div className='flex items-center space-x-2 lg:space-x-4'>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className='lg:hidden p-2 text-gray-400 hover:text-white'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>

            {/* Mobile logo */}
            <div className='lg:hidden flex items-center space-x-2'>
              <div className='w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>G</span>
              </div>
              <span className='text-white font-semibold'>GPU.NET</span>
            </div>
          </div>

          {/* Right side - Wallet Connection */}
          <div className='flex items-center space-x-4'>
            <ConnectButton />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
