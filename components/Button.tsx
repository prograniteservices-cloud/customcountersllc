import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 hover:shadow-lg focus:ring-stone-900",
    secondary: "bg-gold-500 text-white hover:bg-gold-600 hover:shadow-md focus:ring-gold-500",
    outline: "border-2 border-stone-900 text-stone-900 hover:bg-stone-50 focus:ring-stone-900",
    white: "bg-white text-stone-900 hover:bg-stone-100 hover:shadow-lg focus:ring-white"
  };
  const widthClass = fullWidth ? "w-full" : "";
  return (
    <button className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
