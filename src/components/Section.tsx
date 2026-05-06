import type { ReactNode } from 'react'

type Props = {
  id: string
  title?: string
  kicker?: string
  description?: string
  children: ReactNode
}

export function Section({ id, title, kicker, description, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="container">
        {(kicker || title) && (
          <header className="sectionHeader">
            <div>
              {kicker ? <div className="kicker">{kicker}</div> : null}
              {title ? <h2 className="h2">{title}</h2> : null}
              {description ? <p className="lead">{description}</p> : null}
            </div>
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

