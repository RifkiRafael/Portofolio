import { copy } from '../content/lorem'

export function Footer() {
  return (
    <footer style={{ borderTop: '3px solid var(--border-strong)', padding: '26px 0 40px' }}>
      <div className="container">
        <div
          className="grid12"
          style={{
            alignItems: 'start',
            gap: 14,
          }}
        >
          <div className="span7">
            <div className="pill" style={{ width: 'fit-content' }}>
              <span className="dot" aria-hidden="true" />
              {copy.footer.note}
            </div>
            <div className="muted2" style={{ marginTop: 10 }}>
              {copy.footer.copyright}
            </div>
          </div>
          <div className="span5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <nav aria-label="Footer">
              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 10,
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  justifyContent: 'flex-end',
                }}
              >
                {copy.nav.map((item) => (
                  <li key={item.href}>
                    <a className="pill" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

