import { createContext, useContext, ReactNode, useState } from 'react';
import { useAccount } from 'wagmi';

// Context API implementation for assessment requirements
// Manages client-side state with dummy data (no APIs)

interface AppContextType {
  // Navigation state
  activeNavItem: string;
  setActiveNavItem: (item: string) => void;
  
  // Wallet state (integrated with existing RainbowKit)
  walletConnected: boolean;
  walletAddress: string | null;
  
  // Dashboard dummy data (from design file)
  dashboardData: {
    balance: string;
    gpuCount: number;
    earnings: string;
    systemStatus: string;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  // Navigation state management
  const [activeNavItem, setActiveNavItem] = useState('dapp');
  
  // Wallet integration (using existing setup)
  const { address, isConnected } = useAccount();
  
  // Dummy data from design file (assessment requirement: no APIs)
  const dashboardData = {
    balance: '3900.88',
    gpuCount: 12,
    earnings: '$12,450.32',
    systemStatus: 'All Systems Operational'
  };

  const contextValue: AppContextType = {
    activeNavItem,
    setActiveNavItem,
    walletConnected: isConnected,
    walletAddress: address || null,
    dashboardData
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}