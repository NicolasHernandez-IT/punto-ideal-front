import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded font-medium transition-colors';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border border-gray-300 hover:bg-gray-100',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{
        padding: sizes[size].includes("px-6")
          ? "12px 24px"
          : sizes[size].includes("px-4")
            ? "10px 16px"
            : "8px 12px",
        background:
          variant === "primary"
            ? "#2b2b8a"
            : variant === "secondary"
              ? "#6b7280"
              : "transparent",
        color: variant === "outline" ? "#111827" : "#ffffff",
        border: variant === "outline" ? "1px solid #d1d5db" : "none",
        borderRadius: 8,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
