export default function AstraSection() {
  return (
    <div className='mb-8'>
      {/* Top Section with Stats Cards */}
      <div className='mb-6'>
        {/* 4 Stats Cards in a row */}
        <div className='grid grid-cols-4 gap-4 mb-4'>
          {/* Active Users */}
          <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-4 border border-orange-500/30'>
            <div className='flex items-center space-x-2 mb-2'>
              <svg
                className='w-4 h-4 text-orange-400'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' />
              </svg>
              <div className='text-orange-400 text-sm'>Active Users</div>
            </div>
            <div className='text-white text-2xl font-bold'>705K</div>
          </div>

          {/* Total Subnets */}
          <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-4 border border-orange-500/30'>
            <div className='flex items-center space-x-2 mb-2'>
              <svg
                className='w-4 h-4 text-orange-400'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
              </svg>
              <div className='text-orange-400 text-sm'>Total Subnets</div>
            </div>
            <div className='text-white text-2xl font-bold'>11K</div>
          </div>

          {/* $GPU Distributed */}
          <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-4 border border-orange-500/30'>
            <div className='flex items-center space-x-2 mb-2'>
              <svg
                className='w-4 h-4 text-orange-400'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='text-orange-400 text-sm'>$GPU Distributed</div>
            </div>
            <div className='text-white text-2xl font-bold'>1.1m</div>
          </div>

          {/* $GPU Price with Chart */}
          <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-4 border border-orange-500/30 relative'>
            <div className='flex items-center space-x-2 mb-2'>
              <svg
                className='w-4 h-4 text-orange-400'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z' />
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='text-orange-400 text-sm'>$GPU Price</div>
            </div>
            <div className='text-white text-2xl font-bold'>$0.43</div>
            {/* Mini chart */}
            <div className='absolute top-2 right-2 w-16 h-8'>
              <svg
                className='w-full h-full text-orange-400'
                fill='none'
                stroke='currentColor'
                strokeWidth='1'
              >
                <path d='M0 6 L4 4 L8 2 L12 1 L16 0' />
                <circle cx='16' cy='0' r='1' fill='currentColor' />
              </svg>
            </div>
          </div>
        </div>

        {/* Stretched Join Subnet Banner */}
        <div className='bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg p-4 mb-4'>
          <div className='flex items-center space-x-3'>
            <div className='flex -space-x-2'>
              <div className='w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-800'></div>
              <div className='w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-800'></div>
              <div className='w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-800'></div>
            </div>
            <div>
              <div className='text-white font-medium'>
                Join 11K+ Subnets earning{' '}
                <span className='text-orange-400'>400K $GPU</span>
              </div>
            </div>
          </div>
        </div>

        {/* Try Astra Section */}
        <div className='bg-gray-900 rounded-lg p-4 border border-gray-800 mb-6'>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center'>
              <span className='text-white text-lg font-bold'>A</span>
            </div>
            <div className='flex-1'>
              <h3 className='text-white text-lg font-bold mb-1'>Try Astra</h3>
              <p className='text-gray-300 text-sm'>
                Generate images & videos using state-of-the-art generative
                models powered by GPU with exclusive partnership with{' '}
                <span className='text-blue-400'>AI Devtools</span>
              </p>
            </div>
          </div>
        </div>

        {/* Datacenter Stats - Single Row */}
        <div className='bg-gray-900 rounded-lg border border-gray-800 overflow-hidden'>
          <div className='flex'>
            {/* Our Datacenter in Glance */}
            <div className='flex-1 p-6 border-r border-gray-800'>
              <div className='text-gray-400 text-sm mb-2'>
                Our Datacenter in Glance
              </div>
              <div className='text-white text-4xl font-bold mb-1'>4,254</div>
              <div className='text-orange-400 text-sm flex items-center'>
                <span>99.9% Uptime</span>
                <svg
                  className='w-3 h-3 ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>

            {/* United States */}
            <div className='flex-1 p-6 border-r border-gray-800 text-center'>
              <div className='text-gray-400 text-sm mb-2'>United States</div>
              <div className='text-white text-3xl font-bold'>508</div>
              <div className='text-gray-400 text-sm'>GPUs</div>
            </div>

            {/* United Kingdom */}
            <div className='flex-1 p-6 border-r border-gray-800 text-center'>
              <div className='text-gray-400 text-sm mb-2'>United Kingdom</div>
              <div className='text-white text-3xl font-bold'>354</div>
              <div className='text-gray-400 text-sm'>GPUs</div>
            </div>

            {/* United Arab Emirates */}
            <div className='flex-1 p-6 border-r border-gray-800 text-center'>
              <div className='text-gray-400 text-sm mb-2'>
                United Arab Emirates
              </div>
              <div className='text-white text-3xl font-bold'>154</div>
              <div className='text-gray-400 text-sm'>GPUs</div>
            </div>

            {/* Australia */}
            <div className='flex-1 p-6 border-r border-gray-800 text-center'>
              <div className='text-gray-400 text-sm mb-2'>Australia</div>
              <div className='text-white text-3xl font-bold'>104</div>
              <div className='text-gray-400 text-sm'>GPUs</div>
            </div>

            {/* Spain */}
            <div className='flex-1 p-6 text-center'>
              <div className='text-gray-400 text-sm mb-2'>Spain</div>
              <div className='text-white text-3xl font-bold'>21</div>
              <div className='text-gray-400 text-sm'>GPUs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
