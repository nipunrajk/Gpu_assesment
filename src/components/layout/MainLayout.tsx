import { useState } from 'react';
import Sidebar from '../navigation/Sidebar';
import Dashboard from '../dashboard/Dashboard';
import RightSidebar from '../navigation/RightSidebar';
import MobileMenu from '../navigation/MobileMenu';

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gray-950 text-white flex flex-col md:flex-row overflow-hidden'>
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      {/* Left Sidebar - Hidden on mobile, shown on tablet+ */}
      <div className='hidden md:block'>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col bg-neutral-900 min-w-0 overflow-hidden'>
        {/* Mobile Header */}
        <div className='md:hidden flex items-center justify-between p-4 bg-black border-b border-gray-800'>
          <div className='flex items-center space-x-3'>
            <div className='w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>G</span>
            </div>
            <span className='text-white font-bold text-lg'>GPU.NET</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className='text-white p-2'
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
        </div>
        {/* Main Dashboard */}
        <main className='flex-1 flex overflow-hidden'>
          <div className='flex-1 flex flex-col m-1 sm:m-2 min-w-0'>
            {/* Top Notification Banner */}
            <div className='bg-black/40 px-2 sm:px-4 py-2 mb-2 overflow-hidden'>
              <div className='flex items-center text-sm text-gray-300 overflow-x-auto scrollbar-hide'>
                <div className='flex items-center space-x-2 sm:space-x-4 whitespace-nowrap min-w-0'>
                  <span className='flex-shrink-0'>🎯 Drops with Astra Quest Now</span>
                  <span className='hidden sm:inline flex-shrink-0'>|</span>
                  <span className='hidden sm:inline flex-shrink-0'>📱 nVidia RTX 6087 is now available in dApp</span>
                  <span className='hidden md:inline flex-shrink-0'>|</span>
                  <span className='hidden md:inline flex-shrink-0'>📈 Block Rate has been doubled now</span>
                  <span className='hidden lg:inline flex-shrink-0'>|</span>
                  <span className='hidden lg:inline flex-shrink-0'>💰 Earn $000 Drop</span>
                </div>
              </div>
            </div>
            <div className='bg-gray-900 rounded-lg flex flex-col h-full'>
              <div className='p-3 sm:p-6 flex-1 overflow-y-auto'>
                <Dashboard />
              </div>
            </div>
          </div>

          <div className='hidden xl:block w-80 2xl:w-96 m-1 sm:m-2 overflow-y-auto flex-shrink-0'>
            <RightSidebar />
          </div>
        </main>
      </div>
    </div>
  );
}
