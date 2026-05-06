import type { ReactNode } from 'react'

type Props = {
  href?: string
  variant?: 'primary' | 'ghost'
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button({
  href,
  variant = 'ghost',
  children,
  className,
  onClick,
  type = 'button',
}: Props) {
  const classes = [
    'btn',
    variant === 'primary' ? 'btnPrimary' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

