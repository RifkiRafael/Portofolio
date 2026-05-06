import { Section } from '../components/Section'
import { Button } from '../components/Button'
import { copy } from '../content/lorem'

export function About() {
  const initials =
    copy.about.name
      ?.split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join('') ?? 'ME'

  return (
    <Section id="about" title={copy.about.heading} description={copy.about.description} kicker="About">
      <div className="aboutPanel">
        <div className="aboutLayout">
          <div>
            <div className="aboutGreeting">
              <span className="muted2">{copy.about.greeting}</span> <strong>{copy.about.name}</strong>.
            </div>

            <h3 className="aboutBigTitle" aria-label={copy.about.bigTitle.join(' ')}>
              {copy.about.bigTitle.map((t, idx) => (
                <span key={t}>
                  {t}
                  {idx < copy.about.bigTitle.length - 1 ? <br /> : null}
                </span>
              ))}
            </h3>

            <div className="aboutBody">
              {copy.about.paragraphs.map((p) => (
                <p key={p} className="muted" style={{ margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>

            <div style={{ marginTop: 18 }}>
              <Button href={copy.about.cta.href} variant="primary">
                {copy.about.cta.label}
              </Button>
            </div>
          </div>

          <div className="aboutPortraitWrap">
            <div className="aboutPortraitRing">
              <div className="aboutPortrait">
                {copy.about.portraitSrc ? (
                  <img src={copy.about.portraitSrc} alt={copy.about.portraitAlt} />
                ) : (
                  <div className="aboutPortraitPlaceholder" aria-hidden="true">
                    {initials}
                  </div>
                )}
              </div>
            </div>

            <div className="aboutBubble aboutBubbleTop" aria-hidden="true">
              DEV
            </div>
            <div className="aboutBubble aboutBubbleRight" aria-hidden="true">
              UI
            </div>
            <div className="aboutBubble aboutBubbleBottom" aria-hidden="true">
              UX
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

