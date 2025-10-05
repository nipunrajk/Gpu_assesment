import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  padding = 'md',
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  return (
    <div
      className={`bg-gray-900 rounded-lg shadow-sm border border-gray-800 ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
