export default function AstraPromo() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 mb-6 border border-gray-600'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <div className='w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center'>
            <span className='text-2xl'>🚀</span>
          </div>
          <div>
            <h3 className='text-white text-xl font-bold mb-1'>Try Astra</h3>
            <p className='text-gray-300 text-sm mb-2'>
              Generate images & videos using state-of-the-art
            </p>
            <p className='text-gray-300 text-sm'>
              generative models powered by GPU
            </p>
          </div>
        </div>
        <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium'>
          Try Now
        </button>
      </div>
    </div>
  );
}
