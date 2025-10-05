import GPUGrid from './GPUGrid';
import AstraSection from './AstraSection';

export default function Dashboard() {
  return (
    <div className='space-y-6'>
      {/* Astra Section */}
      <AstraSection />

      {/* GPU Grid */}
      <GPUGrid />
    </div>
  );
}
