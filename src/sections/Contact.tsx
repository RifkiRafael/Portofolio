import { useId, useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { copy } from '../content/lorem'

type FormState = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const id = useId()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })

  return (
    <Section id="contact" title={copy.contact.heading} description={copy.contact.description} kicker="Contact">
      <div className="grid12" style={{ alignItems: 'stretch' }}>
        <div className="span5">
          <Card>
            <div className="cardInset">
              <div className="kicker">{copy.contact.infoHeading}</div>
              <h3 className="h3" style={{ marginTop: 8 }}>
                Lorem Ipsum
              </h3>
              <p className="lead" style={{ marginTop: 8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

        <div className="span7">
          <Card>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
                setTimeout(() => setSubmitted(false), 3000)
                setForm({ name: '', email: '', message: '' })
              }}
            >
              <div className="cardInset">
                <div className="kicker">Lorem Form</div>
                <h3 className="h3" style={{ marginTop: 8 }}>
                  Ipsum Message
                </h3>
                <p className="lead" style={{ marginTop: 8 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
                </p>
              </div>

              <div className="contactFormGrid" style={{ marginTop: 14 }}>
                <div>
                  <label htmlFor={`${id}-name`} className="muted2" style={{ display: 'block', marginBottom: 6 }}>
                    {copy.contact.form.nameLabel}
                  </label>
                  <input
                    id={`${id}-name`}
                    className="input"
                    required
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Lorem ipsum"
                  />
                </div>
                <div>
                  <label htmlFor={`${id}-email`} className="muted2" style={{ display: 'block', marginBottom: 6 }}>
                    {copy.contact.form.emailLabel}
                  </label>
                  <input
                    id={`${id}-email`}
                    className="input"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    placeholder="lorem@ipsum.test"
                  />
                </div>
              </div>

              <div style={{ marginTop: 12 }}>
                <label htmlFor={`${id}-message`} className="muted2" style={{ display: 'block', marginBottom: 6 }}>
                  {copy.contact.form.messageLabel}
                </label>
                <textarea
                  id={`${id}-message`}
                  className="input textarea"
                  required
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Lorem ipsum dolor sit amet..."
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 14 }}>
                <div className="muted2" aria-live="polite">
                  {submitted ? 'Lorem ipsum: sent.' : 'Lorem ipsum dolor sit.'}
                </div>
                <Button type="submit" variant="primary">
                  {copy.contact.form.submitLabel}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  )
}

