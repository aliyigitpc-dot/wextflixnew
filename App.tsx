import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Bell } from 'lucide-react'
import { WexflixLogo } from './WexflixLogo'

const links = [
  { to: '/', label: 'Anasayfa' },
  { to: '/listem', label: 'Listem' },
  { to: '/favoriler', label: 'Favoriler' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        background: scrolled ? 'rgba(20,18,16,0.9)' : 'linear-gradient(to bottom, rgba(20,18,16,0.8), transparent)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(46,43,40,0.4)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          padding: '0 2rem',
          height: '64px',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <WexflixLogo size="sm" />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {links.map((l) => {
            const active = l.to === '/' ? location.pathname === '/' : location.pathname.startsWith(l.to)
            return (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: active ? 600 : 400,
                  color: active ? 'var(--foreground)' : 'var(--muted-foreground)',
                  transition: 'color 0.2s',
                }}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{ color: 'var(--muted-foreground)', background: 'none', border: 'none', cursor: 'pointer' }}>
            <Bell size={20} />
          </button>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              background: 'linear-gradient(135deg, var(--primary), rgba(229,41,58,0.5))',
              display: 'grid',
              placeItems: 'center',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            W
          </div>
        </div>
      </div>
    </header>
  )
}
