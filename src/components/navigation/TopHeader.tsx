import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import MobileMenu from './MobileMenu';

export default function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Banner */}
      <div className='bg-gray-900 border-b border-gray-800 px-4 py-2'>
        <div className='flex items-center justify-center space-x-8 text-sm text-gray-300'>
          <span>🎯 Drops with Astra Quest Now</span>
          <span>📱 nVidia RTX 6087 is now available in dApp</span>
          <span>📈 Block Rate has been doubled now</span>
          <span>💰 Earn $000 Drop</span>
        </div>
      </div>

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

          {/* Right side - Profile and navigation */}
          <div className='flex items-center space-x-4'>
            {/* Profile */}
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center'>
                <span className='text-white text-sm'>👤</span>
              </div>
              <span className='hidden sm:block text-gray-300 text-sm'>
                Profile
              </span>
              <span className='text-gray-400'>|</span>
              <span className='text-gray-300 text-sm'>0x78..0x78</span>
            </div>

            {/* Notifications */}
            <button className='text-gray-400 hover:text-white transition-colors'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 17h5l-5 5v-5z'
                />
              </svg>
            </button>

            {/* Feed */}
            <span className='text-gray-300 text-sm'>Feed</span>

            {/* Wallet Connection */}
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
