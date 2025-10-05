import Sidebar from '../navigation/Sidebar';
import TopHeader from '../navigation/TopHeader';
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
      <div className='flex-1 flex flex-col'>
        {/* Main Dashboard */}
        <main className='flex-1 flex overflow-hidden'>
          {/* Main Content with Gray Background and TopHeader (70%) */}
          <div
            className='flex-1 flex flex-col m-2 rounded-lg overflow-hidden'
            style={{ flexBasis: '70%' }}
          >
            <div className='bg-gray-900 rounded-lg flex flex-col h-full'>
              {/* Top Notification Banner - Only for Dashboard */}
              <div className='bg-gray-900 border-b border-gray-800 px-4 py-2 rounded-t-lg'>
                <div className='flex items-center justify-center space-x-8 text-sm text-gray-300'>
                  <span>🎯 Drops with Astra Quest Now</span>
                  <span>📱 nVidia RTX 6087 is now available in dApp</span>
                  <span>📈 Block Rate has been doubled now</span>
                  <span>💰 Earn $000 Drop</span>
                </div>
              </div>
              <TopHeader />
              <div className='p-6 flex-1 overflow-y-auto'>
                <Dashboard />
              </div>
            </div>
          </div>

          {/* Right Sidebar - Social Feed with Gray Background (30%) */}
          <div
            className='hidden xl:block bg-gray-800 m-2 rounded-lg overflow-y-auto'
            style={{ flexBasis: '30%' }}
          >
            <RightSidebar />
          </div>
        </main>
      </div>
    </div>
  );
}
