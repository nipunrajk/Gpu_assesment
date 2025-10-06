import { useState } from 'react';
import {
  MessageCircle,
  List,
  ChartBarStacked,
  ArrowLeftRight,
  Server,
} from 'lucide-react';
import { navigationItems } from '../../constants/navigation';
import { useAppContext } from '../../context/AppContext';

export default function Sidebar() {
  // Local state for immediate UI responsiveness
  const [activeItem, setActiveItem] = useState('dapp');

  // Context API for assessment (demonstrates proper usage)
  const { setActiveNavItem, dashboardData } = useAppContext();

  const handleItemClick = (itemId: string) => {
    console.log('Sidebar navigation clicked:', itemId);
    setActiveItem(itemId); // Local state for UI
    setActiveNavItem(itemId); // Context state for global access
  };

  return (
    <div className='w-56 lg:w-60 xl:w-64 border-r border-gray-800 flex flex-col h-screen flex-shrink-0'>
      {/* Logo */}
      <div className='p-4 sm:p-6 pb-0'>
        <div className='flex items-center space-x-3'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-base sm:text-lg'>G</span>
          </div>
          <span className='text-white font-bold text-lg sm:text-xl'>
            GPU.NET
          </span>
        </div>
      </div>

      {/* Wallet Balance */}
      <div className='p-4 sm:p-6'>
        <div className='mb-3'></div>
        <div className='bg-slate-700 rounded-lg p-3 sm:p-4 border border-gray-700'>
          <div className='text-gray-400 text-xs sm:text-sm font-medium'>
            Wallet Balance
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <div className='w-5 h-5 sm:w-6 sm:h-6 bg-gray-700 rounded-full flex items-center justify-center'>
                <span className='text-white text-xs font-bold'>G</span>
              </div>
              <span className='text-white text-xl sm:text-2xl font-bold'>
                {dashboardData.balance.split('.')[0]}
              </span>
              <span className='text-gray-400 text-sm'>
                .{dashboardData.balance.split('.')[1]}
              </span>
            </div>
            <button className='w-6 h-6 sm:w-8 sm:h-8 bg-white hover:bg-gray-700 rounded-full flex items-center justify-center border border-gray-600'>
              <span className='text-black text-base sm:text-lg'>+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className='flex-1 p-3 sm:p-4 space-y-1 overflow-y-auto'
        style={{ pointerEvents: 'all' }}
      >
        {navigationItems.map((item) => (
          <div key={item.id} className='relative'>
            <button
              onClick={() => handleItemClick(item.id)}
              className={`relative w-full flex items-center space-x-3 p-2 sm:p-3 rounded-lg text-left transition-all duration-200 cursor-pointer select-none touch-manipulation ${
                activeItem === item.id
                  ? 'text-white'
                  : 'text-gray-400 hover:bg-gray-900 hover:text-white'
              }`}
              type='button'
              style={{ pointerEvents: 'all' }}
            >
              <div
                className={`active-indicator ${
                  activeItem === item.id ? 'active' : ''
                }`}
              />
              <div className='w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center'>
                {item.id === 'dapp' && <Server />}
                {item.id === 'astra-chat' && <MessageCircle />}
                {item.id === 'subnet' && <List />}
                {item.id === 'quest' && <ChartBarStacked />}
                {item.id === 'ganscan' && <ArrowLeftRight />}
                {item.id === 'gvex' && (
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
                  </svg>
                )}
              </div>
              <span className='font-medium text-sm sm:text-base'>
                {item.label}
              </span>
            </button>

            {/* Sub-items for dApp */}
            {item.id === 'dapp' && activeItem === 'dapp' && item.subItems && (
              <div className='ml-6 sm:ml-8 mt-2 space-y-1'>
                {item.subItems.map((subItem, index) => (
                  <button
                    key={index}
                    onClick={() => console.log('Sub-item clicked:', subItem)}
                    className='block w-full text-left text-gray-400 hover:text-white text-xs sm:text-sm py-1 px-2 rounded transition-colors cursor-pointer select-none'
                    type='button'
                  >
                    {subItem}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className='p-3 sm:p-4'>
        {/* Social Icons */}
        <div className='flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4'>
          <button className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center'>
            <svg
              className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
          </button>
          <button className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center'>
            <span className='text-gray-400 font-bold text-xs sm:text-sm'>
              X
            </span>
          </button>
          <button className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center'>
            <svg
              className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                clipRule='evenodd'
              />
            </svg>
          </button>
          <button className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center'>
            <svg
              className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>

        {/* Status */}
        <div className='flex items-center space-x-2 mb-1 sm:mb-2'>
          <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full'></div>
          <span className='text-gray-400 text-xs'>
            {dashboardData.systemStatus}
          </span>
        </div>

        {/* Copyright */}
        <div className='text-gray-500 text-xs'>
          © 2025 - All Rights Reserved by GPU
        </div>
      </div>
    </div>
  );
}
