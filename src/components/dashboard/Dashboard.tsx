import StatsCards from './StatsCards';
import GPUGrid from './GPUGrid';
import AstraSection from './AstraSection';

export default function Dashboard() {
  return (
    <div className='space-y-6'>
      {/* Astra Section */}
      <AstraSection />

      {/* Stats Cards */}
      <StatsCards />

      {/* GPU Grid */}
      <GPUGrid />
    </div>
  );
}
