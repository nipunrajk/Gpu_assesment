import { Suspense, lazy } from 'react';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './config/wagmi';
import { WalletProvider } from './context/WalletContext';

import '@rainbow-me/rainbowkit/styles.css';

// Lazy load components for better performance
const MainLayout = lazy(() => import('./components/layout/MainLayout'));

const queryClient = new QueryClient();

// Loading component
const LoadingSpinner = () => (
  <div className='min-h-screen bg-gray-950 flex items-center justify-center'>
    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500'></div>
  </div>
);

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <WalletProvider>
            <Suspense fallback={<LoadingSpinner />}>
              <MainLayout />
            </Suspense>
          </WalletProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
