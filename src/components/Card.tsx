import type { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

export function Card({ className, children }: Props) {
  return <div className={['card', 'lift', className].filter(Boolean).join(' ')}>{children}</div>
}

