import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Rss, LogIn, UserRoundPen } from 'lucide-react';

export default function RightSidebar() {
  return (
    <div className='w-full h-full flex flex-col p-3 sm:p-4 space-y-3 sm:space-y-4'>
      <div className='flex items-end mb-0'>
        {/* Profile - Left side */}
        <div className='flex items-center space-x-2 text-xxs mb-2'>
          <UserRoundPen className='w-4 h-4 ' />
          <span className='text-gray-300  font-medium'>Profile</span>
          <span className='text-gray-400 hidden sm:inline'>|</span>
          <span className='text-gray-300 truncate'>0x78..0x78</span>
          <LogIn className='w-4 h-4' />
          <div className='absolute inset-0 opacity-0'>
            <ConnectButton />
          </div>
        </div>

        {/* Spacer */}
        <div className='flex-1'></div>

        {/* Feed Tab - Right aligned but not floating */}
        <div className='relative bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-t-lg'>
          <div className='flex items-center space-x-2'>
            <Rss className='text-gray-300 w-4 h-4' />
            <span className='text-gray-300 text-xs sm:text-sm font-medium'>
              Feed
            </span>
          </div>
        </div>
      </div>

      {/* Post Composer - Connected to Feed tab */}
      <div className='bg-gray-800 p-3 sm:p-4 mb-3 sm:mb-4'>
        <div className='flex items-center space-x-3 mb-3 sm:mb-4'>
          <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-600 rounded-full'></div>
          <div>
            <div className='text-white font-medium text-sm sm:text-base'>
              What's happening?
            </div>
          </div>
        </div>

        <div className='bg-gray-700 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3 border border-gray-600'>
          <input
            type='text'
            placeholder='Share your thoughts...'
            className='w-full bg-transparent text-white placeholder-gray-400 outline-none text-xs sm:text-sm'
          />
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 sm:space-x-3 text-gray-400'>
            <button className='hover:text-white'>
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5'
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
            <button className='hover:text-white text-xs sm:text-sm'>GIF</button>
          </div>
          <button className='bg-white hover:bg-gray-100 text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm'>
            Post Now
          </button>
        </div>
      </div>

      {/* Activity Feed - Scrollable container */}
      <div className='flex-1 overflow-y-auto space-y-3 sm:space-y-4'>
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
            reactions: '❤️ 💬 🔄',
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
            className='bg-gray-700 rounded-lg p-3 sm:p-4 border border-gray-600'
          >
            <div className='flex items-start space-x-2 sm:space-x-3'>
              <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex-shrink-0'></div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center space-x-2 mb-1'>
                  <div className='text-white text-xs sm:text-sm font-medium'>
                    {item.name}
                  </div>
                  <div className='text-gray-400 text-xs'>{item.time}</div>
                </div>
                <div className='text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 break-words'>
                  {item.message}
                </div>

                {/* Image placeholder for Song Chewie */}
                {item.hasImage && (
                  <div className='w-full h-24 sm:h-32 bg-gray-600 rounded-lg mb-2 sm:mb-3 flex items-center justify-center'>
                    <span className='text-gray-400 text-xs sm:text-sm'>
                      Image
                    </span>
                  </div>
                )}

                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-3 sm:space-x-4 text-gray-400 text-xs'>
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
  );
}
