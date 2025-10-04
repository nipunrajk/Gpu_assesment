import { ConnectButton } from '@rainbow-me/rainbowkit';
import Sidebar from '../navigation/Sidebar';
import TopHeader from '../navigation/TopHeader';
import Dashboard from '../dashboard/Dashboard';
import RightSidebar from '../navigation/RightSidebar';

export default function MainLayout() {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col lg:flex-row'>
      {/* Left Sidebar - Hidden on mobile, shown on desktop */}
      <div className='hidden lg:block'>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col'>
        {/* Top Header */}
        <TopHeader />

        {/* Main Dashboard */}
        <main className='flex-1 flex overflow-hidden'>
          <div className='flex-1 p-6 overflow-y-auto'>
            <Dashboard />
          </div>

          {/* Right Sidebar - RSS Feed/Chat */}
          <div className='hidden xl:block'>
            <RightSidebar />
          </div>
        </main>
      </div>
    </div>
  );
}
