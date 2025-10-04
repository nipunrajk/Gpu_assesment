import { useState } from 'react';

const navigationItems = [
  {
    id: 'dapp',
    label: 'dApp',
    active: true,
    subItems: ['Provide GPUs', 'Get Credits', 'Profile'],
  },
  { id: 'astra-chat', label: 'Astra Chat', active: false },
  { id: 'subnet', label: 'Subnet', active: false },
  { id: 'quest', label: 'Quest', active: false },
  { id: 'ganscan', label: 'GANscan', active: false },
  { id: 'gvex', label: 'GVEX', active: false },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('dapp');

  return (
    <div className='w-64 lg:w-72 xl:w-64 bg-black border-r border-gray-800 flex flex-col h-screen'>
      {/* Logo */}
      <div className='p-6 border-b border-gray-800'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-lg'>G</span>
          </div>
          <span className='text-white font-bold text-xl'>GPU.NET</span>
        </div>
      </div>

      {/* Wallet Balance */}
      <div className='p-6 border-b border-gray-800'>
        <div className='mb-3'>
          <div className='text-gray-400 text-sm font-medium'>
            Wallet Balance
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <div className='w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center'>
              <span className='text-white text-xs font-bold'>G</span>
            </div>
            <span className='text-white text-2xl font-bold'>3900</span>
            <span className='text-gray-400 text-sm'>.88</span>
          </div>
          <button className='w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center border border-gray-600'>
            <span className='text-white text-lg'>+</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className='flex-1 p-4 space-y-1 overflow-y-auto'>
        {navigationItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors group ${
                activeItem === item.id
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-900 hover:text-white'
              }`}
            >
              <div className='w-5 h-5 flex items-center justify-center'>
                {item.id === 'dapp' && (
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
                  </svg>
                )}
                {item.id === 'astra-chat' && (
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
                {item.id === 'subnet' && (
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
                  </svg>
                )}
                {item.id === 'quest' && (
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
                {item.id === 'ganscan' && (
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                )}
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
              <span className='font-medium'>{item.label}</span>
            </button>

            {/* Sub-items for dApp */}
            {item.id === 'dapp' && activeItem === 'dapp' && item.subItems && (
              <div className='ml-8 mt-2 space-y-1'>
                {item.subItems.map((subItem, index) => (
                  <button
                    key={index}
                    className='block w-full text-left text-gray-400 hover:text-white text-sm py-1 px-2 rounded transition-colors'
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
      <div className='p-4 border-t border-gray-800'>
        {/* Social Icons */}
        <div className='flex items-center space-x-3 mb-4'>
          <button className='w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center'>
            <svg
              className='w-4 h-4 text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
          </button>
          <button className='w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center'>
            <span className='text-gray-400 font-bold text-sm'>X</span>
          </button>
          <button className='w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center'>
            <svg
              className='w-4 h-4 text-gray-400'
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
          <button className='w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center'>
            <svg
              className='w-4 h-4 text-gray-400'
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
        <div className='flex items-center space-x-2 mb-2'>
          <div className='w-2 h-2 bg-green-500 rounded-full'></div>
          <span className='text-gray-400 text-xs'>All Systems Operational</span>
        </div>

        {/* Copyright */}
        <div className='text-gray-500 text-xs'>
          © 2025 - All Rights Reserved by GPU
        </div>
      </div>
    </div>
  );
}
