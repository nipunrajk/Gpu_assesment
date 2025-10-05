import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

// Vite environment variable access
const projectId = (import.meta as any).env?.VITE_WALLET_CONNECT_PROJECT_ID || 'demo-project-id';

export const config = getDefaultConfig({
  appName: 'GPU.NET Dashboard',
  projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
});
