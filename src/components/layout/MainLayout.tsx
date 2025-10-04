import { ConnectButton } from '@rainbow-me/rainbowkit';
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
        {/* Top Notification Banner - Full Width */}
        <div className='bg-gray-900 border-b border-gray-800 px-4 py-2'>
          <div className='flex items-center justify-center space-x-8 text-sm text-gray-300'>
            <span>🎯 Drops with Astra Quest Now</span>
            <span>📱 nVidia RTX 6087 is now available in dApp</span>
            <span>📈 Block Rate has been doubled now</span>
            <span>💰 Earn $000 Drop</span>
          </div>
        </div>

        {/* Main Dashboard */}
        <main className='flex-1 flex overflow-hidden'>
          {/* Main Content with Gray Background and TopHeader (70%) */}
          <div
            className='flex-1 flex flex-col bg-gray-900 m-2 rounded-lg overflow-y-auto'
            style={{ flexBasis: '70%' }}
          >
            <TopHeader />
            <div className='p-6'>
              <Dashboard />
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
