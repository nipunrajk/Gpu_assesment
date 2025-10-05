interface GPUCardProps {
  id: string;
  model: string;
  brand: string;
  type: string;
  price: string;
}

export default function GPUCard({
  id,
  model,
  brand,
  type,
  price,
}: GPUCardProps) {
  return (
    <div className='bg-gray-900 rounded-lg border border-gray-800 p-3 sm:p-4'>
      {/* Header */}
      <div className='mb-3 sm:mb-4'>
        <h3 className='text-white font-semibold text-base sm:text-lg mb-1'>{model}</h3>
        <div className='text-gray-400 text-sm'>#{id}</div>
      </div>

      {/* Brand */}
      <div className='flex items-center space-x-2 mb-3 sm:mb-4'>
        <div className='w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded flex items-center justify-center'>
          <span className='text-white text-xs font-bold'>B</span>
        </div>
        <span className='text-orange-400 text-sm font-medium'>{brand}</span>
        <span className='text-white text-sm truncate'>{type}</span>
      </div>

      {/* Specs */}
      <div className='space-y-2 mb-3 sm:mb-4'>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-400'>Storage Type</span>
          <span className='text-white'>nvme</span>
        </div>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-400'>GPU RAM</span>
          <span className='text-white'>80 GB</span>
        </div>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-400'>vCPU</span>
          <span className='text-white'>48</span>
        </div>
        <div className='flex justify-between text-sm'>
          <span className='text-gray-400'>CPU RAM</span>
          <span className='text-white'>64 GB</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className='flex space-x-1 mb-3 sm:mb-4'>
        <button className='flex-1 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-1 sm:px-2 rounded border border-gray-700'>
          x1
        </button>
        <button className='flex-1 bg-white hover:bg-gray-100 text-black text-xs sm:text-sm py-1.5 sm:py-2 px-1 sm:px-2 rounded font-medium'>
          x2
        </button>
        <button className='flex-1 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-1 sm:px-2 rounded border border-gray-700'>
          x4
        </button>
        <button className='flex-1 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm py-1.5 sm:py-2 px-1 sm:px-2 rounded border border-gray-700'>
          x8
        </button>
      </div>

      {/* Price and Rent button */}
      <div className='flex items-center justify-between mb-3 sm:mb-4'>
        <div className='flex items-center space-x-2'>
          <div className='w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full'></div>
          <span className='text-white font-semibold text-sm'>{price}</span>
        </div>
      </div>

      <button className='w-full bg-white hover:bg-gray-100 text-black py-2 rounded font-medium text-sm'>
        Rent Now
      </button>
    </div>
  );
}
