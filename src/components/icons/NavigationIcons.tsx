interface IconProps {
  className?: string;
}

export const DashboardIcon = ({ className }: IconProps) => (
  <svg className={className} fill='currentColor' viewBox='0 0 20 20'>
    <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
  </svg>
);

export const ChatIcon = ({ className }: IconProps) => (
  <svg className={className} fill='currentColor' viewBox='0 0 20 20'>
    <path
      fillRule='evenodd'
      d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
      clipRule='evenodd'
    />
  </svg>
);

export const SubnetIcon = ({ className }: IconProps) => (
  <svg className={className} fill='currentColor' viewBox='0 0 20 20'>
    <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
  </svg>
);

export const QuestIcon = ({ className }: IconProps) => (
  <svg className={className} fill='currentColor' viewBox='0 0 20 20'>
    <path
      fillRule='evenodd'
      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
      clipRule='evenodd'
    />
  </svg>
);

export const ScanIcon = ({ className }: IconProps) => (
  <svg className={className} fill='currentColor' viewBox='0 0 20 20'>
    <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
  </svg>
);