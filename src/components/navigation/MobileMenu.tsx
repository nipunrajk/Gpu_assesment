import { useState } from 'react';
import { X } from 'lucide-react';

const navigationItems = [
  { id: 'dapp', label: 'dApp', active: true },
  { id: 'astra-chat', label: 'Astra Chat', active: false },
  { id: 'subnet', label: 'Subnet', active: false },
  { id: 'quest', label: 'Quest', active: false },
  { id: 'ganscan', label: 'GANscan', active: false },
  { id: 'ovex', label: 'OVEX', active: false },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeItem, setActiveItem] = useState('dapp');

  if (!isOpen) return null;

  return (
    <div className='lg:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-50'>
      <div className='fixed inset-y-0 left-0 w-64 bg-gray-800 border-r border-gray-700 flex flex-col'>
        {/* Header */}
        <div className='p-4 border-b border-gray-700 flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>G</span>
            </div>
            <span className='text-white font-semibold text-lg'>GPU.NET</span>
          </div>
          <button onClick={onClose} className='text-gray-400 hover:text-white'>
            <X />
          </button>
        </div>

        {/* Navigation */}
        <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
          {/* Wallet Balance */}
          <div className='mb-6'>
            <div className='flex items-center space-x-3 p-3 rounded-lg bg-gray-700/50'>
              <div className='w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center'>
                <span className='text-white text-xs font-bold'>$</span>
              </div>
              <div>
                <div className='text-orange-400 text-sm font-medium'>3900</div>
                <div className='text-gray-400 text-xs'>GPU</div>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item.id);
                onClose();
              }}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                activeItem === item.id
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <div className='w-6 h-6 flex items-center justify-center text-sm'>
                {item.id === 'dapp' && '📱'}
                {item.id === 'astra-chat' && '💬'}
                {item.id === 'subnet' && '🌐'}
                {item.id === 'quest' && '🎯'}
                {item.id === 'ganscan' && '🔍'}
                {item.id === 'ovex' && '📊'}
              </div>
              <span className='font-medium'>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom Status */}
        <div className='p-4 border-t border-gray-700'>
          <div className='flex items-center space-x-2 text-sm'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            <span className='text-gray-400'>All Systems Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}
