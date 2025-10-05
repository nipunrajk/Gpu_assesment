import {
  ChartNoAxesCombined,
  Users,
  List,
  Database,
  RadioTower,
  ArrowUpRight,
} from 'lucide-react';

export default function AstraSection() {
  return (
    <div className='mb-8'>
      {/* Top Section with Stats Cards */}
      <div className='mb-6'>
        {/* 4 Stats Cards in responsive grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-4'>
          {/* Active Users */}
          <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-3 sm:p-4 border border-orange-500/30'>
            <div className='flex items-center space-x-2 mb-2'>
              <Users />
              <div className='text-orange-400 text-xs sm:text-sm'>
                Active Users
              </div>
            </div>
            <div className='text-white text-xl sm:text-2xl font-bold'>705K</div>
          </div>

          {/* Total Subnets */}
          <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-3 sm:p-4 border border-orange-500/30'>
            <div className='flex items-center space-x-2 mb-2'>
              <List />
              <div className='text-orange-400 text-xs sm:text-sm'>
                Total Subnets
              </div>
            </div>
            <div className='text-white text-xl sm:text-2xl font-bold'>11K</div>
          </div>

          {/* $GPU Distributed */}
          <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-3 sm:p-4 border border-orange-500/30'>
            <div className='flex items-center space-x-2 mb-2'>
              <Database />
              <div className='text-orange-400 text-xs sm:text-sm'>
                $GPU Distributed
              </div>
            </div>
            <div className='text-white text-xl sm:text-2xl font-bold'>1.1m</div>
          </div>

          {/* $GPU Price with Chart */}
          <div className='bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg p-3 sm:p-4 border border-orange-500/30 relative'>
            <div className='flex items-center space-x-2 mb-2'>
              <RadioTower />
              <div className='text-orange-400 text-xs sm:text-sm'>
                $GPU Price
              </div>
            </div>
            <div className='text-white text-xl sm:text-2xl font-bold'>
              $0.43
            </div>
            <div className='absolute top-2 right-2 w-12 h-6 sm:w-16 sm:h-8'>
              <ChartNoAxesCombined className='w-full h-full' />
            </div>
          </div>
        </div>

        {/* Stretched Join Subnet Banner */}
        <div className='bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg p-3 sm:p-4 mb-4'>
          <div className='flex items-center space-x-3'>
            <div className='flex -space-x-2'>
              <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full border-2 border-gray-800'></div>
              <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full border-2 border-gray-800'></div>
              <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full border-2 border-gray-800'></div>
            </div>
            <div>
              <div className='text-white font-medium text-sm sm:text-base'>
                Join 11K+ Subnets earning{' '}
                <span className='text-orange-400'>400K $GPU</span>
              </div>
            </div>
          </div>
        </div>

        {/* Try Astra Section */}
        <div className='bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-800 mb-6'>
          <div className='flex items-center space-x-4'>
            <div className='w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0'>
              <span className='text-white text-base sm:text-lg font-bold'>
                A
              </span>
            </div>
            <div className='flex-1 min-w-0'>
              <h3 className='text-white text-base sm:text-lg font-bold mb-1'>
                Try Astra
              </h3>
              <p className='text-gray-300 text-xs sm:text-sm break-words'>
                Generate images & videos using state-of-the-art generative
                models powered by GPU with exclusive partnership with{' '}
                <span className='text-blue-400'>AI Devtools</span>
              </p>
            </div>
          </div>
        </div>

        {/* Datacenter Stats - Responsive Layout */}
        <div className='bg-gray-900 rounded-lg border border-gray-800 overflow-hidden'>
          {/* Mobile: Stack vertically, Desktop: Horizontal */}
          <div className='flex flex-col sm:flex-row'>
            {/* Our Datacenter in Glance */}
            <div className='flex p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-gray-800'>
              <div className='text-gray-400 text-xs sm:text-sm mb-2'>
                Our Datacenter in Glance
              </div>
              <div className='text-white text-2xl sm:text-4xl font-bold mb-1'>
                4,254
              </div>
              <div className='text-orange-400 text-xs sm:text-sm flex items-center'>
                <span>99.9% Uptime</span>
                <ArrowUpRight />
              </div>
            </div>

            <div className='flex overflow-hidden'>
              <div className='grid grid-cols-2 sm:grid-cols-5 h-full text-xs sm:text-sm'>
                {/* United States */}
                <div className='p-2 sm:p-3 md:p-6 border-r border-gray-800 text-center'>
                  <div className='text-gray-400 mb-1 sm:mb-2'>
                    United States
                  </div>
                  <div className='text-white text-base sm:text-lg md:text-3xl font-bold'>
                    508
                  </div>
                  <div className='text-gray-400'>GPUs</div>
                </div>

                {/* United Kingdom */}
                <div className='p-2 sm:p-3 md:p-6 border-b sm:border-b-0 sm:border-r border-gray-800 text-center'>
                  <div className='text-gray-400 mb-1 sm:mb-2'>
                    United Kingdom
                  </div>
                  <div className='text-white text-base sm:text-lg md:text-3xl font-bold'>
                    354
                  </div>
                  <div className='text-gray-400'>GPUs</div>
                </div>

                {/* United Arab Emirates */}
                <div className='p-2 sm:p-3 md:p-6 border-r border-gray-800 text-center'>
                  <div className='text-gray-400 mb-1 sm:mb-2'>
                    <span className='sm:hidden'>UAE</span>
                    <span className='hidden sm:inline'>
                      United Arab Emirates
                    </span>
                  </div>
                  <div className='text-white text-base sm:text-lg md:text-3xl font-bold'>
                    154
                  </div>
                  <div className='text-gray-400'>GPUs</div>
                </div>

                {/* Australia */}
                <div className='p-2 sm:p-3 md:p-6 border-b sm:border-b-0 sm:border-r border-gray-800 text-center'>
                  <div className='text-gray-400 mb-1 sm:mb-2'>Australia</div>
                  <div className='text-white text-base sm:text-lg md:text-3xl font-bold'>
                    104
                  </div>
                  <div className='text-gray-400'>GPUs</div>
                </div>

                {/* Spain */}
                <div className='p-2 sm:p-3 md:p-6 text-center'>
                  <div className='text-gray-400 mb-1 sm:mb-2'>Spain</div>
                  <div className='text-white text-base sm:text-lg md:text-3xl font-bold'>
                    21
                  </div>
                  <div className='text-gray-400'>GPUs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
