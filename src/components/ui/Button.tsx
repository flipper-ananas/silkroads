import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-brand-primary text-white hover:opacity-90 focus:ring-brand-primary shadow-soft',
    secondary: 'bg-brand-secondary text-white hover:opacity-90 focus:ring-brand-secondary shadow-soft',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
    ghost: 'text-brand-dark hover:bg-brand-light focus:ring-brand-muted',
  }

  const sizes = {
    sm: 'px-4 py-2 text-small',
    md: 'px-6 py-3 text-body',
    lg: 'px-8 py-4 text-body-lg',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}