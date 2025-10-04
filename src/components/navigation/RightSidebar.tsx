export default function RightSidebar() {
  return (
    <div className='w-80 bg-gray-900 border-l border-gray-800 p-4 overflow-y-auto'>
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
        <h3 className='text-white font-semibold'>Feed</h3>

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
