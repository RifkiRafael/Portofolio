import { useState } from 'react'
import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { copy } from '../content/lorem'

export function Services() {
  const [showAll, setShowAll] = useState(false)
  const initialVisibleCount = 6
  const visibleItems = showAll ? copy.services.items : copy.services.items.slice(0, initialVisibleCount)
  const hasMoreItems = copy.services.items.length > initialVisibleCount

  return (
    <Section
      id="work"
      title={copy.services.heading}
      description={copy.services.description}
      kicker={copy.services.kicker}
    >
      <div className="grid12">
        {visibleItems.map((svc, idx) => {
          const icon = svc.icon
          let iconEl: React.ReactNode = (
            <span className="dot" style={{ background: idx % 2 ? 'var(--accent-2)' : 'var(--accent)' }} />
          )

          if (icon?.kind === 'devicon') {
            iconEl = <i className={`techIcon ${icon.className}`} />
          } else if (icon?.kind === 'img') {
            iconEl = <img className="techIconImg" src={icon.src} alt={icon.alt} loading="lazy" />
          } else if (icon?.kind === 'text') {
            iconEl = <span className="techIconText">{icon.text}</span>
          }

          return (
            <div key={svc.title} className="span6">
            <Card>
              <div className="cardInset" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <div className="kicker">Tool #{String(idx + 1).padStart(2, '0')}</div>
                  <h3 className="h3" style={{ marginTop: 8 }}>
                    {svc.title}
                  </h3>
                </div>
                <div className="techIconWrap" aria-hidden="true">
                  {iconEl}
                </div>
              </div>
              <p className="lead" style={{ marginTop: 12 }}>
                {svc.description}
              </p>
            </Card>
          </div>
          )
        })}
      </div>
      {hasMoreItems && (
        <div className="servicesActions">
          <button className="servicesToggleBtn" type="button" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </Section>
  )
}

