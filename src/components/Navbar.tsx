import { copy } from '../content/lorem'

export function Navbar() {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        background: 'var(--nav-bg)',
      }}
    >
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 0',
          gap: 12,
        }}
      >
        <a
          href="#home"
          className="navPill"
          aria-label={copy.brand}
          style={{ fontWeight: 800, textTransform: 'uppercase' }}
        >
          <span className="dot" aria-hidden="true" />
          {copy.brand}
        </a>

        <nav aria-label="Primary">
          <ul
            style={{
              display: 'flex',
              gap: 10,
              listStyle: 'none',
              padding: 0,
              margin: 0,
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}
          >
            {copy.nav.map((item) => (
              <li key={item.href}>
                <a className="navPill" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

