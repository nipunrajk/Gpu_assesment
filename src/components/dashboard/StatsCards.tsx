export default function StatsCards() {
  return (
    <div className='mb-8'>
      <div className='grid grid-cols-6 gap-4'>
        {/* Main datacenter card */}
        <div className='col-span-2 bg-gray-900 rounded-lg p-6 border border-gray-800'>
          <h3 className='text-gray-400 text-sm mb-2'>
            Our Datacenter in Glance
          </h3>
          <div className='text-4xl font-bold text-white mb-1'>4,254</div>
          <div className='text-orange-400 text-sm flex items-center'>
            <span>99.9% Uptime</span>
            <svg
              className='w-4 h-4 ml-1'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>

        {/* Regional GPU stats */}
        <div className='bg-gray-900 rounded-lg p-4 border border-gray-800 text-center'>
          <div className='text-gray-400 text-xs mb-1'>United States</div>
          <div className='text-xl font-bold text-white'>508 GPUs</div>
        </div>

        <div className='bg-gray-900 rounded-lg p-4 border border-gray-800 text-center'>
          <div className='text-gray-400 text-xs mb-1'>United Kingdom</div>
          <div className='text-xl font-bold text-white'>354 GPUs</div>
        </div>

        <div className='bg-gray-900 rounded-lg p-4 border border-gray-800 text-center'>
          <div className='text-gray-400 text-xs mb-1'>United Arab Emirates</div>
          <div className='text-xl font-bold text-white'>154 GPUs</div>
        </div>

        <div className='bg-gray-900 rounded-lg p-4 border border-gray-800 text-center'>
          <div className='text-gray-400 text-xs mb-1'>Australia</div>
          <div className='text-xl font-bold text-white'>104 GPUs</div>
        </div>

        <div className='bg-gray-900 rounded-lg p-4 border border-gray-800 text-center'>
          <div className='text-gray-400 text-xs mb-1'>Spain</div>
          <div className='text-xl font-bold text-white'>21 GPUs</div>
        </div>
      </div>
    </div>
  );
}
