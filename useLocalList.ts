import { useState } from 'react'
import { Plus, Check, Heart, Lock } from 'lucide-react'
import type { Series } from '@/data/series'
import { useFavorites, useMyList } from '@/hooks/useLocalList'
import { toast } from 'sonner'

export function SeriesInfoModal({
  s,
  open,
  onOpenChange,
}: {
  s: Series
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const myList = useMyList()
  const favs = useFavorites()
  const inList = myList.has(s.id)
  const isFav = favs.has(s.id)
  const [season, setSeason] = useState(0)
  const current = s.seasons[season]

  if (!open) return null

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onOpenChange(false)}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 1000,
        overflowY: 'auto',
        padding: '40px 1rem 2rem',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'var(--card)',
          borderRadius: '8px',
          maxWidth: '850px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <button
          onClick={() => onOpenChange(false)}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '34px',
            height: '34px',
            background: 'rgba(0,0,0,0.7)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            color: '#fff',
            fontSize: '1.1rem',
            cursor: 'pointer',
            display: 'grid',
            placeItems: 'center',
            zIndex: 10,
          }}
        >
          ✕
        </button>

        {/* Backdrop */}
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <img
            src={s.backdrop}
            alt={s.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'brightness(0.5)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--card) 0%, rgba(30,27,24,0.4) 50%, transparent 100%)',
            }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 2rem', zIndex: 2 }}>
            <div
              style={{
                display: 'inline-block',
                borderRadius: '4px',
                background: 'var(--primary)',
                padding: '2px 8px',
                fontSize: '0.625rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#fff',
                marginBottom: '0.75rem',
              }}
            >
              {s.status}
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', Impact, sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                lineHeight: 1,
                marginBottom: '6px',
                color: 'var(--foreground)',
              }}
            >
              {s.title}
            </h2>
            <p style={{ fontStyle: 'italic', color: 'rgba(248,246,244,0.8)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              "{s.tagline}"
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <button
                disabled
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 20px',
                  borderRadius: '4px',
                  background: 'rgba(248,246,244,0.2)',
                  color: 'rgba(248,246,244,0.7)',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'not-allowed',
                  fontSize: '0.875rem',
                }}
              >
                <Lock size={16} /> Çok Yakında
              </button>
              <button
                onClick={() => toast(myList.toggle(s.id) ? 'Listene eklendi' : 'Listenden kaldırıldı')}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(30,27,24,0.6)',
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
                onClick={() => toast(favs.toggle(s.id) ? 'Favorilere eklendi' : 'Favorilerden çıkarıldı')}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(30,27,24,0.6)',
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
          </div>
        </div>

        {/* Info */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: '2rem',
            padding: '1.5rem 2rem 2rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--muted-foreground)', marginBottom: '0.75rem' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 600 }}>%{s.match} eşleşme</span>
              <span>{s.year}</span>
              <span style={{ border: '1px solid var(--border)', padding: '0 6px' }}>{s.rating}</span>
              <span>{s.seasons.length} Sezon</span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(248,246,244,0.9)' }}>{s.description}</p>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div><span>Oyuncular: </span><span style={{ color: 'var(--foreground)' }}>{s.cast.join(', ')}</span></div>
            <div><span>Türler: </span><span style={{ color: 'var(--foreground)' }}>{s.genres.join(', ')}</span></div>
            {s.trivia && <div style={{ color: '#4CAF50' }}>Not: {s.trivia}</div>}
          </div>
        </div>

        {/* Characters */}
        {s.characters.length > 0 && (
          <div style={{ padding: '0 2rem 2rem' }}>
            <h3 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--foreground)' }}>
              Karakterler
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {s.characters.map((c) => (
                <div key={c.name} style={{ overflow: 'hidden', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--background)' }}>
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                    <img src={c.image} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  <div style={{ padding: '8px' }}>
                    <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '1.1rem', lineHeight: 1.1, color: 'var(--foreground)' }}>{c.name}</div>
                    <p style={{ fontSize: '0.6875rem', color: 'var(--muted-foreground)', marginTop: '2px', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {c.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Episodes */}
        {s.seasons.length > 0 && (
          <div style={{ padding: '0 2rem 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '1.5rem', color: 'var(--foreground)' }}>Bölümler</h3>
              <select
                value={season}
                onChange={(e) => setSeason(Number(e.target.value))}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--foreground)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.875rem', cursor: 'pointer' }}
              >
                {s.seasons.map((sn, i) => (
                  <option key={sn.number} value={i}>
                    Sezon {sn.number}: {sn.title}
                  </option>
                ))}
              </select>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden' }}>
              {current?.episodes.map((ep) => (
                <li
                  key={ep.number}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1rem',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '1.75rem', color: 'var(--muted-foreground)', width: '2.5rem', textAlign: 'center' }}>
                    {ep.number}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', alignItems: 'baseline' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--foreground)' }}>{ep.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', whiteSpace: 'nowrap' }}>{ep.duration}</div>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginTop: '4px', lineHeight: 1.5 }}>{ep.synopsis}</p>
                  </div>
                  <button
                    disabled
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--muted)',
                      border: 'none',
                      display: 'grid',
                      placeItems: 'center',
                      cursor: 'not-allowed',
                      color: 'var(--muted-foreground)',
                      alignSelf: 'center',
                    }}
                  >
                    <Lock size={14} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
