import { Link } from 'react-router-dom'
import { WexflixLogo } from './WexflixLogo'

const cols = [
  {
    title: 'Keşfet',
    links: [
      { to: '/', label: 'Anasayfa' },
      { to: '/favoriler', label: 'Favoriler' },
      { to: '/listem', label: 'Listem' },
    ],
  },
  {
    title: 'Wexflix',
    links: [
      { to: '/hakkimizda', label: 'Hakkımızda' },
      { to: '/iletisim', label: 'İletişim' },
    ],
  },
  {
    title: 'Yasal',
    links: [
      { to: '/gizlilik', label: 'Gizlilik' },
      { to: '/gizlilik', label: 'Çerezler' },
    ],
  },
]

export function Footer() {
  return (
    <footer
      style={{
        marginTop: '5rem',
        borderTop: '1px solid rgba(46,43,40,0.4)',
        background: 'var(--background)',
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '3rem 2rem',
          fontSize: '0.875rem',
          color: 'var(--muted-foreground)',
        }}
      >
        <WexflixLogo size="sm" />
        <p style={{ marginTop: '1rem', maxWidth: '36rem' }}>
          Wexflix, <strong style={{ color: 'var(--foreground)' }}>WDB</strong> tarafından üretilen bir dizi-karikatür platformudur.{' '}
          <strong style={{ color: 'var(--foreground)' }}>Elyas</strong> tarafından desteklenir. Sikkolik evreni çok yakında.
        </p>

        <div
          style={{
            marginTop: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            fontSize: '0.75rem',
          }}
        >
          {cols.map((c) => (
            <div key={c.title}>
              <div
                style={{
                  color: 'var(--foreground)',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {c.title}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {c.links.map((l) => (
                  <li key={l.label} style={{ marginBottom: '0.5rem' }}>
                    <Link
                      to={l.to}
                      style={{
                        color: 'var(--muted-foreground)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(46,43,40,0.4)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontSize: '0.75rem',
          }}
        >
          <div>© 2026 Wexflix · bir WDB yapımı</div>
          <div style={{ opacity: 0.7 }}>Powered by Elyas</div>
        </div>
      </div>
    </footer>
  )
}
