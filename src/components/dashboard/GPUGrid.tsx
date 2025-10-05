import GPUCard from './GPUCard';

const gpuData = [
  {
    id: '124852',
    model: 'H100 PCIe',
    brand: 'AMD',
    type: 'EPYC7H48 9654',
    price: '$0.45/ Per Hour',
  },
  {
    id: '124852',
    model: 'H100 PCIe',
    brand: 'AMD',
    type: 'EPYC7H48 9654',
    price: '$0.45/ Per Hour',
  },
  {
    id: '124852',
    model: 'H100 PCIe',
    brand: 'AMD',
    type: 'EPYC7H48 9654',
    price: '$0.45/ Per Hour',
  },
  {
    id: '124852',
    model: 'H100 PCIe',
    brand: 'AMD',
    type: 'EPYC7H48 9654',
    price: '$0.45/ Per Hour',
  },
  {
    id: '124852',
    model: 'H100 PCIe',
    brand: 'AMD',
    type: 'EPYC7H48 9654',
    price: '$0.45/ Per Hour',
  },
  {
    id: '124852',
    model: 'H100 PCIe',
    brand: 'AMD',
    type: 'EPYC7H48 9654',
    price: '$0.45/ Per Hour',
  },
  {
    id: '124852',
    model: 'H100 PCIe',
    brand: 'AMD',
    type: 'EPYC7H48 9654',
    price: '$0.45/ Per Hour',
  },
  {
    id: '124852',
    model: 'H100 PCIe',
    brand: 'AMD',
    type: 'EPYC7H48 9654',
    price: '$0.45/ Per Hour',
  },
];

export default function GPUGrid() {
  return (
    <div>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0'>
        <h2 className='text-lg sm:text-xl font-semibold text-white'>Latest added GPUs</h2>
        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-sm'>
          <select className='bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white w-full sm:w-auto'>
            <option>Location</option>
          </select>
          <select className='bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white w-full sm:w-auto'>
            <option>GPU Type</option>
          </select>
          <select className='bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white w-full sm:w-auto'>
            <option>Storage</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4'>
        {gpuData.map((gpu, index) => (
          <GPUCard key={index} {...gpu} />
        ))}
      </div>
    </div>
  );
}
