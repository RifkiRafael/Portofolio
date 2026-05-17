import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { copy } from '../content/lorem'

export function Contact() {
  return (
    <Section id="contact" title={copy.contact.heading} description={copy.contact.description} kicker="Contact">
      <div className="grid12" style={{ alignItems: 'stretch' }}>
        <div className="span7">
          <Card>
            <div className="cardInset">
              <h3 className="h2" style={{ marginTop: 0 }}>
                {copy.contact.infoHeading}
              </h3>
              <h3 className="h3" style={{ marginTop: 10 }}>
                Ready to Collaborate
              </h3>
              <p className="lead" style={{ marginTop: 8 }}>
                If you have an idea, project, or digital need, I'm ready to help bring it to life.
              </p>
            </div>

            <div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
              {copy.contact.infoItems.map((it) => (
                <div key={it.label} className="pill" style={{ justifyContent: 'space-between' }}>
                  <span className="muted2">{it.label}</span>
                  <span style={{ fontWeight: 800 }}>{it.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}

