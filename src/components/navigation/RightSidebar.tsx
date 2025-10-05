import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Rss, LogIn } from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className='w-full h-full flex flex-col p-4 space-y-4'>
      {/* Profile and Feed - Standalone elements at top */}
      <div className='flex justify-between  items-center mb-0'>
        {/* Profile - Standalone element */}
        <div
          className='flex items-center space-x-2 mb-1'
          style={{
            borderRadius: '8px',
          }}
        >
          <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center'>
            <span className='text-white text-sm'>👤</span>
          </div>
          <span className='text-gray-300 text-sm font-medium'>Profile</span>
          <span className='text-gray-400'>|</span>
          <span className='text-gray-300 text-sm'>0x78..0x78</span>
          <LogIn />
          <div className='absolute inset-0 opacity-0'>
            <ConnectButton />
          </div>
        </div>

        {/* Feed Label - Standalone element */}
        <div className='flex flex-col items-center'>
          <div className='relative flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 transition-colors bg-gray-800 border-2 border-gray-600'>
            <Rss />
            <span className='text-gray-300 text-sm font-medium'>Feed</span>
          </div>
        </div>
      </div>

      {/* Post Composer - Separate standalone container */}
      <div className='bg-gray-800 border-2 border-gray-600 rounded-lg p-4'>
        <div className='flex items-center space-x-3 mb-4'>
          <div className='w-10 h-10 bg-gray-600 rounded-full'></div>
          <div>
            <div className='text-white font-medium'>What's happening?</div>
          </div>
        </div>

        <div className='bg-gray-700 rounded-lg p-3 mb-3 border border-gray-600'>
          <input
            type='text'
            placeholder='Share your thoughts...'
            className='w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm'
          />
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3 text-gray-400'>
            <button className='hover:text-white'>
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
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </button>
            <button className='hover:text-white text-sm'>GIF</button>
          </div>
          <button className='bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-lg font-medium text-sm'>
            Post Now
          </button>
        </div>
      </div>

      {/* Activity Feed - Scrollable container */}
      <div className='flex-1 overflow-y-auto space-y-4'>
        {/* Activity Items */}
        {[
          {
            name: 'Stephen Smith',
            time: '2h',
            message:
              'Just completed algorithm & data structures! Time for a breather. Suggestions for a binge-worthy show? 🤔',
            reactions: '❤️ 💬 🔄',
          },
          {
            name: 'Boost',
            time: '4h',
            message:
              'New GPU cluster available in US East region. Perfect for ML training workloads.',
            reactions: '❤️ 💬 �',
          },
          {
            name: 'Song Chewie',
            time: '6h',
            message:
              'Amazing performance improvements with the latest CUDA updates!',
            reactions: '❤️ 💬 🔄',
            hasImage: true,
          },
        ].map((item, index) => (
          <div
            key={index}
            className='bg-gray-700 rounded-lg p-4 border border-gray-600'
          >
            <div className='flex items-start space-x-3'>
              <div className='w-8 h-8 bg-gray-600 rounded-full flex-shrink-0'></div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center space-x-2 mb-1'>
                  <div className='text-white text-sm font-medium'>
                    {item.name}
                  </div>
                  <div className='text-gray-400 text-xs'>{item.time}</div>
                </div>
                <div className='text-gray-300 text-sm mb-3 break-words'>
                  {item.message}
                </div>

                {/* Image placeholder for Song Chewie */}
                {item.hasImage && (
                  <div className='w-full h-32 bg-gray-600 rounded-lg mb-3 flex items-center justify-center'>
                    <span className='text-gray-400 text-sm'>Image</span>
                  </div>
                )}

                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-4 text-gray-400 text-xs'>
                    <button className='hover:text-white flex items-center space-x-1'>
                      <span>💬</span>
                    </button>
                    <button className='hover:text-white flex items-center space-x-1'>
                      <span>🔄</span>
                    </button>
                    <button className='hover:text-white flex items-center space-x-1'>
                      <span>❤️</span>
                    </button>
                  </div>
                  <div className='text-gray-400 text-xs'>40K</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}
