import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function RightSidebar() {
  return (
    <div className='w-full p-4'>
      {/* Header with Profile and Feed */}
      <div className='flex items-start justify-between mb-6'>
        {/* Profile - Clickable with L-shaped border - Now uses ConnectButton directly */}
        <div
          className='relative flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 transition-colors bg-gray-800 border-2 border-gray-600'
          style={{
            borderRadius: '8px',
            borderBottomRightRadius: '0px',
            borderRight: 'none',
            borderBottom: 'none',
          }}
        >
          <div className='w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center'>
            <span className='text-white text-sm'>👤</span>
          </div>
          <span className='text-gray-300 text-sm font-medium'>Profile</span>
          <span className='text-gray-400'>|</span>
          <span className='text-gray-300 text-sm'>0x78..0x78</span>
          {/* Refresh/Connect icon */}
          <svg
            className='w-4 h-4 text-gray-400 ml-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
            />
          </svg>
          {/* Hidden ConnectButton that triggers the modal */}
          <div className='absolute inset-0 opacity-0'>
            <ConnectButton />
          </div>
        </div>

        {/* Feed Label with RSS icon and orange underline */}
        <div className='flex flex-col items-center'>
          <div className='flex items-center space-x-2 mb-1'>
            <svg
              className='w-4 h-4 text-gray-300'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248S0 22.546 0 20.752s1.456-3.248 3.252-3.248 3.251 1.454 3.251 3.248zM1.677 6.082v4.15c6.988 0 12.65 5.663 12.65 12.65h4.15c0-9.296-7.504-16.8-16.8-16.8zM1.677.901v4.15C14.475 5.051 24.926 15.502 24.926 28.3H29.076C29.076 12.98 16.997.901 1.677.901z' />
            </svg>
            <span className='text-gray-300 text-sm font-medium'>Feed</span>
          </div>
          <div className='w-full h-0.5 bg-orange-500'></div>
        </div>
      </div>

      {/* Profile Section */}
      <div className='mb-6'>
        <div className='flex items-center space-x-3 mb-4'>
          <div className='w-10 h-10 bg-gray-600 rounded-full'></div>
          <div>
            <div className='text-white font-medium'>What's happening?</div>
          </div>
        </div>

        <div className='bg-gray-800 rounded-lg p-3 mb-3 border border-gray-700'>
          <input
            type='text'
            placeholder='Share your thoughts...'
            className='w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm'
          />
        </div>

        <button className='w-full bg-white hover:bg-gray-100 text-black py-2 rounded-lg font-medium'>
          Post
        </button>
      </div>

      {/* Activity Feed */}
      <div className='space-y-4'>
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
            className='bg-gray-800 rounded-lg p-4 border border-gray-700'
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
                  <div className='w-full h-32 bg-gray-700 rounded-lg mb-3 flex items-center justify-center'>
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
  );
}
