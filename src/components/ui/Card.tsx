interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={`
      bg-white rounded-2xl p-8 shadow-soft border border-brand-border
      ${hover ? 'hover:shadow-medium hover:-translate-y-1 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}