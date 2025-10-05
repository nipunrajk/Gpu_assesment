import { ConnectButton } from '@rainbow-me/rainbowkit';
import { LogIn } from 'lucide-react';

export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <LogIn className='w-4 h-4' />
                    <span className="text-xs sm:text-sm">Connect</span>
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="text-red-400 hover:text-red-300 text-xs sm:text-sm cursor-pointer"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="text-gray-300 hover:text-white text-xs sm:text-sm cursor-pointer"
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};