import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, className = "", style }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 ${className}`}
      style={{
        background: "#ffffff",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(16,24,40,0.06)",
        padding: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
