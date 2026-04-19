interface Props {
  href: string
  text: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({ href, text, variant = 'primary', className = '' }: Props) {
  const base = 'inline-block font-bold rounded-lg px-6 py-3 text-center transition-all duration-200 no-underline'
  const styles = {
    primary: 'bg-brand hover:bg-brand-dark text-white shadow-lg hover:shadow-brand/30',
    secondary: 'bg-transparent border-2 border-brand text-brand hover:bg-brand hover:text-white',
  }
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  )
}
