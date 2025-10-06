import { createContext, useContext, ReactNode } from 'react';

// Dummy data from design file
interface GPUListing {
  id: string;
  name: string;
  provider: string;
  location: string;
  price: string;
  performance: string;
  availability: 'available' | 'busy' | 'offline';
  specs: {
    memory: string;
    cores: number;
    architecture: string;
  };
}

interface DashboardData {
  gpuListings: GPUListing[];
  totalEarnings: string;
  activeContracts: number;
  totalGPUs: number;
  systemStatus: 'operational' | 'maintenance' | 'degraded';
  notifications: {
    id: string;
    message: string;
    type: 'info' | 'warning' | 'success';
    timestamp: string;
  }[];
}

interface DashboardContextType {
  dashboardData: DashboardData;
  refreshData: () => void;
  isLoading: boolean;
}

// Dummy data based on design specifications
const mockDashboardData: DashboardData = {
  gpuListings: [
    {
      id: '1',
      name: 'RTX 4090 Gaming',
      provider: 'TechStation',
      location: 'US-East',
      price: '$2.50/hr',
      performance: '95%',
      availability: 'available',
      specs: {
        memory: '24GB GDDR6X',
        cores: 16384,
        architecture: 'Ada Lovelace'
      }
    },
    {
      id: '2',
      name: 'RTX 4080 Pro',
      provider: 'CloudGPU',
      location: 'EU-West',
      price: '$1.80/hr',
      performance: '87%',
      availability: 'busy',
      specs: {
        memory: '16GB GDDR6X',
        cores: 9728,
        architecture: 'Ada Lovelace'
      }
    },
    {
      id: '3',
      name: 'RTX 3090 Ti',
      provider: 'AIRental',
      location: 'Asia-Pacific',
      price: '$1.20/hr',
      performance: '92%',
      availability: 'available',
      specs: {
        memory: '24GB GDDR6X',
        cores: 10752,
        architecture: 'Ampere'
      }
    }
  ],
  totalEarnings: '$12,450.32',
  activeContracts: 5,
  totalGPUs: 12,
  systemStatus: 'operational',
  notifications: [
    {
      id: '1',
      message: 'New GPU listing available in your region',
      type: 'info',
      timestamp: '2 minutes ago'
    },
    {
      id: '2',
      message: 'Contract completed successfully - $45.80 earned',
      type: 'success',
      timestamp: '1 hour ago'
    },
    {
      id: '3',
      message: 'Maintenance scheduled for 2 AM UTC',
      type: 'warning',
      timestamp: '3 hours ago'
    }
  ]
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const refreshData = () => {
    console.log('Refreshing dashboard data...');
    // In a real app, this would trigger a data refresh
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboardData: mockDashboardData,
        refreshData,
        isLoading: false,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}