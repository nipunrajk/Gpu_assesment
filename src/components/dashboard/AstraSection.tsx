export default function AstraSection() {
  return (
    <div className='mb-8'>
      {/* Top Section with AI GPU Ecosystem and Stats */}
      <div className='grid grid-cols-12 gap-6 mb-8'>
        {/* Left Side - AI GPU Ecosystem */}
        <div className='col-span-4 space-y-6'>
          <div>
            <div className='text-orange-400 text-lg mb-2'>AI for</div>
            <div className='text-white text-6xl font-bold mb-2'>One</div>
            <div className='flex items-center space-x-4 mb-4'>
              <svg
                className='w-12 h-12 text-white'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M13 3l3.293 3.293-7 7-1.586-1.586L13 3z' />
                <path d='M19 13l-3.293-3.293-7 7 1.586 1.586L19 13z' />
              </svg>
              <div className='text-white text-6xl font-bold'>GPU</div>
            </div>
            <div className='text-orange-400 text-4xl font-bold mb-2'>
              Ecosystem
            </div>
            <div className='text-orange-400 text-lg'>& Universe</div>
          </div>
        </div>

        {/* Center - Stats Cards */}
        <div className='col-span-5 space-y-4'>
          <div className='grid grid-cols-3 gap-3'>
            <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-4 border border-orange-500/30'>
              <div className='flex items-center space-x-2 mb-2'>
                <svg
                  className='w-4 h-4 text-orange-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                <div className='text-orange-400 text-sm'>Active Users</div>
              </div>
              <div className='text-white text-2xl font-bold'>705K</div>
            </div>

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

            <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-4 border border-orange-500/30'>
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
                <div className='text-orange-400 text-sm'>$GPU Distributed</div>
              </div>
              <div className='text-white text-2xl font-bold'>1.1m</div>
            </div>
          </div>

          {/* Join Subnet Banner */}
          <div className='bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg p-4'>
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
          <div className='bg-gray-900 rounded-lg p-4 border border-gray-800'>
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
        </div>

        {/* Right Side - Chart */}
        <div className='col-span-3 flex items-center justify-center'>
          <div className='w-full h-80 bg-gray-900 rounded-lg border border-gray-800 flex flex-col items-center justify-center relative'>
            {/* Price Display */}
            <div className='text-center mb-4'>
              <div className='text-orange-400 text-sm mb-1'>$GPU Price</div>
              <div className='text-white text-4xl font-bold'>$0.43</div>
            </div>

            {/* Chart Line Simulation */}
            <div className='relative w-32 h-24'>
              <svg
                className='w-full h-full text-orange-400'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M0 20 L8 16 L16 12 L24 8 L32 4' />
                <circle cx='32' cy='4' r='3' fill='currentColor' />
                <circle cx='24' cy='8' r='2' fill='currentColor' />
                <circle cx='16' cy='12' r='2' fill='currentColor' />
                <circle cx='8' cy='16' r='2' fill='currentColor' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
