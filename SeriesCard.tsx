import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plus, Check, Heart } from 'lucide-react'
import type { Series } from '@/data/series'
import { useFavorites, useMyList } from '@/hooks/useLocalList'
import { toast } from 'sonner'

export function SeriesCard({ s, onClick }: { s: Series; onClick?: () => void }) {
  const myList = useMyList()
  const favs = useFavorites()
  const inList = myList.has(s.id)
  const isFav = favs.has(s.id)

  const inner = (
    <>
      <img src={s.poster} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div
        style={{
          position: 'absolute',
          top: '0.5rem',
          left: '0.5rem',
          padding: '2px 8px',
          fontSize: '0.625rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          background: 'var(--primary)',
          color: '#fff',
          borderRadius: '4px',
        }}
      >
        {s.status}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0.75rem',
          background: 'linear-gradient(to top, var(--background), transparent)',
        }}
      >
        <div
          style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: '1.25rem',
            lineHeight: 1.1,
            color: 'var(--foreground)',
          }}
        >
          {s.title}
        </div>
        <div style={{ fontSize: '0.6875rem', color: 'var(--muted-foreground)', marginTop: '2px' }}>
          {s.genres.join(' • ')}
        </div>
      </div>
    </>
  )

  const cardStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    borderRadius: '8px',
    overflow: 'hidden',
    background: 'var(--card)',
    aspectRatio: '2/3',
    position: 'relative',
    boxShadow: 'var(--shadow-card)',
    border: '1px solid rgba(46,43,40,0.4)',
    textDecoration: 'none',
    cursor: 'pointer',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      style={{ position: 'relative', width: '180px', flexShrink: 0 }}
      className="group"
    >
      {onClick ? (
        <button onClick={onClick} style={cardStyle}>
          {inner}
        </button>
      ) : (
        <Link to={`/dizi/${s.id}`} style={cardStyle}>
          {inner}
        </Link>
      )}

      <div
        className="group-hover-actions"
        style={{
          position: 'absolute',
          top: '-12px',
          right: '-12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          opacity: 0,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      >
        <button
          onClick={(e) => {
            e.preventDefault()
            toast(myList.toggle(s.id) ? 'Listene eklendi' : 'Listenden kaldırıldı')
          }}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--background)',
            border: '1px solid var(--border)',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
            color: inList ? 'var(--primary)' : 'var(--foreground)',
          }}
        >
          {inList ? <Check size={16} /> : <Plus size={16} />}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            toast(favs.toggle(s.id) ? 'Favorilere eklendi' : 'Favorilerden çıkarıldı')
          }}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--background)',
            border: '1px solid var(--border)',
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
            color: isFav ? 'var(--primary)' : 'var(--foreground)',
          }}
        >
          <Heart size={16} style={{ fill: isFav ? 'var(--primary)' : 'none' }} />
        </button>
      </div>
    </motion.div>
  )
}
