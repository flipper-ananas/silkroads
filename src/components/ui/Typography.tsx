interface TextProps {
  children: React.ReactNode
  className?: string
}

export const Display = ({ children, className = '' }: TextProps) => (
  <h1 className={`text-display text-brand-dark ${className}`}>{children}</h1>
)

export const H1 = ({ children, className = '' }: TextProps) => (
  <h1 className={`text-h1 text-brand-dark ${className}`}>{children}</h1>
)

export const H2 = ({ children, className = '' }: TextProps) => (
  <h2 className={`text-h2 text-brand-dark ${className}`}>{children}</h2>
)

export const H3 = ({ children, className = '' }: TextProps) => (
  <h3 className={`text-h3 text-brand-dark ${className}`}>{children}</h3>
)

export const BodyLg = ({ children, className = '' }: TextProps) => (
  <p className={`text-body-lg text-brand-muted ${className}`}>{children}</p>
)

export const Body = ({ children, className = '' }: TextProps) => (
  <p className={`text-body text-brand-muted ${className}`}>{children}</p>
)