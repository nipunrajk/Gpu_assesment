import Sidebar from '../navigation/Sidebar';
import Dashboard from '../dashboard/Dashboard';
import RightSidebar from '../navigation/RightSidebar';

export default function MainLayout() {
  return (
    <div className='min-h-screen bg-gray-950 text-white flex flex-col md:flex-row'>
      {/* Left Sidebar - Hidden on mobile, shown on tablet+ */}
      <div className='hidden md:block'>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col bg-neutral-900'>
        {/* Main Dashboard */}
        <main className='flex-1 flex overflow-hidden'>
          <div
            className='flex-1 flex flex-col m-2'
            style={{ flexBasis: '70%' }}
          >
            {/* Top Notification Banner */}
            <div className='bg-black/40 px-4 py-2 mb-2'>
              <div className='flex items-center justify-between text-sm text-gray-300'>
                <span>🎯 Drops with Astra Quest Now</span>
                <span>|</span>
                <span>📱 nVidia RTX 6087 is now available in dApp</span>
                <span>|</span>
                <span>📈 Block Rate has been doubled now</span>
                <span>|</span>
                <span>💰 Earn $000 Drop</span>
              </div>
            </div>
            <div className='bg-gray-900 rounded-lg flex flex-col h-full'>
              <div className='p-6 flex-1 overflow-y-auto'>
                <Dashboard />
              </div>
            </div>
          </div>

          <div
            className='hidden xl:block m-2 overflow-y-auto'
            style={{ flexBasis: '30%' }}
          >
            <RightSidebar />
          </div>
        </main>
      </div>
    </div>
  );
}
