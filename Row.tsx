import { useRef, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Row({ title, children }: { title: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section className="group/row" style={{ position: 'relative', padding: '1.5rem 0' }}>
      <h2
        style={{
          fontFamily: "'Bebas Neue', Impact, sans-serif",
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          padding: '0 2rem',
          marginBottom: '0.75rem',
          letterSpacing: '0.05em',
          color: 'var(--foreground)',
        }}
      >
        {title}
      </h2>
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => scroll(-1)}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 20,
            width: '3rem',
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(20,18,16,0.6)',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--foreground)',
            opacity: 0,
            transition: 'opacity 0.2s',
          }}
          className="scroll-btn-left"
          aria-label="Sola kaydır"
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
        >
          <ChevronLeft size={32} />
        </button>

        <div
          ref={ref}
          className="scrollbar-hide"
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            padding: '1.5rem 2rem',
            margin: '-1.5rem 0',
          }}
        >
          {children}
        </div>

        <button
          onClick={() => scroll(1)}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 20,
            width: '3rem',
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(20,18,16,0.6)',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--foreground)',
            opacity: 0,
            transition: 'opacity 0.2s',
          }}
          aria-label="Sağa kaydır"
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  )
}
