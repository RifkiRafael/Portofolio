import { Button } from '../components/Button'
import { copy } from '../content/lorem'

export function Hero() {
  return (
    <section id="home" className="section" style={{ paddingTop: 54 }}>
      <div className="container">
        <div className="grid12" style={{ alignItems: 'stretch' }}>
          <div className="span7">
            <div className="pill" style={{ width: 'fit-content' }}>
              <span className="dot" aria-hidden="true" />
              {copy.hero.eyebrow}
            </div>

            <h1 className="h1" style={{ marginTop: 16 }}>
              {copy.hero.title.map((t, idx) => (
                <span key={t}>
                  <span style={{ color: idx === 1 ? 'var(--accent)' : 'var(--text)' }}>{t}</span>
                  {idx < copy.hero.title.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>

            <p className="lead" style={{ marginTop: 14 }}>
              {copy.hero.subtitle}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 18 }}>
              <Button href={copy.hero.ctas[0].href} variant="primary">
                {copy.hero.ctas[0].label}
              </Button>
              <Button href={copy.hero.ctas[1].href} variant="ghost">
                {copy.hero.ctas[1].label}
              </Button>
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
              {copy.hero.socials.map((s) => (
                <a key={s.label} className="pill" href={s.href}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="span5">
            <div className="card lift" style={{ height: '100%', minHeight: 260 }}>
              <div className="cardInset">
                <div className="kicker">Lorem Brutalism</div>
                <h3 className="h3" style={{ marginTop: 8 }}>
                  Ipsum Grid
                </h3>
                <p className="lead" style={{ marginTop: 8 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                </p>
              </div>

              <div className="heroMiniGrid">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      border: '2px solid var(--border)',
                      borderRadius: 12,
                      height: 44,
                      background:
                        i % 2 === 0
                          ? 'rgba(0,245,255,0.12)'
                          : 'rgba(124,58,237,0.14)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

