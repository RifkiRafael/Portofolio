import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { copy } from '../content/lorem'

export function Services() {
  return (
    <Section id="work" title={copy.services.heading} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." kicker="Services">
      <div className="grid12">
        {copy.services.items.map((svc, idx) => (
          <div key={svc.title} className="span6">
            <Card>
              <div className="cardInset" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <div className="kicker">Lorem #{String(idx + 1).padStart(2, '0')}</div>
                  <h3 className="h3" style={{ marginTop: 8 }}>
                    {svc.title}
                  </h3>
                </div>
                <span className="pill">
                  <span className="dot" aria-hidden="true" style={{ background: idx % 2 ? 'var(--accent-2)' : 'var(--accent)' }} />
                  Ipsum
                </span>
              </div>
              <p className="lead" style={{ marginTop: 12 }}>
                {svc.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  )
}

