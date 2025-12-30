// src/components/common/Button.jsx

import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  icon = null,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props 
}, ref) => {
  
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white uppercase text-[13px] tracking-wider shadow-lg hover:shadow-2xl hover:-translate-y-0.5',
    ghost: 'bg-transparent text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 hover:border-black dark:hover:border-white',
    danger: 'bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:shadow-lg',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-7 py-3.5 text-[15px]',
    large: 'px-8 py-4 text-base',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="text-lg">{icon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;