export interface User {
  address: string;
  ensName?: string;
  avatar?: string;
}

export interface AppConfig {
  projectName: string;
  version: string;
  supportedChains: number[];
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}
