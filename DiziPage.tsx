import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plus, Check, Heart, Lock, ArrowLeft } from 'lucide-react'
import { toast } from 'sonner'
import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getSeries } from '@/data/series'
import { useMyList, useFavorites } from '@/hooks/useLocalList'

export default function DiziPage() {
  const { id } = useParams<{ id: string }>()
  const s = getSeries(id ?? '')
  const myList = useMyList()
  const favs = useFavorites()
  const [season, setSeason] = useState(0)

  if (!s) return <Navigate to="/" replace />

  const inList = myList.has(s.id)
  const isFav = favs.has(s.id)
  const current = s.seasons[season]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', overflowX: 'hidden' }}>
      <Header />

      {/* Backdrop Hero */}
      <div style={{ position: 'relative', height: '80vh', minHeight: '520px', overflow: 'hidden' }}>
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={s.backdrop}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-hero)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-side)' }} />

        <Link
          to="/"
          style={{
            position: 'absolute',
            top: '5rem',
            left: '2rem',
            zIndex: 10,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.875rem',
            color: 'var(--muted-foreground)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
        >
          <ArrowLeft size={16} /> Anasayfa
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0 2rem 3rem',
            maxWidth: '1600px',
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '2px 8px', background: 'var(--primary)', color: '#fff', fontWeight: 700, borderRadius: '4px', fontSize: '0.75rem' }}>{s.status}</span>
            <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>2 Sezon Kesin</span>
            <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>{s.year}</span>
            <span style={{ border: '1px solid var(--border)', padding: '0 6px', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{s.rating}</span>
          </div>
          <h1
            className="text-glow"
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              lineHeight: 1,
              marginBottom: '8px',
              color: 'var(--foreground)',
            }}
          >
            SİKKOLİK
          </h1>
          <p
            style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'var(--primary)',
              letterSpacing: '0.2em',
              marginBottom: '0.75rem',
            }}
          >
            THE NEW ERA
          </p>
          <p style={{ fontStyle: 'italic', color: 'rgba(248,246,244,0.8)', marginBottom: '1.5rem' }}>"{s.tagline}"</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <button
              disabled
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '4px',
                background: 'rgba(42,39,36,0.6)', color: 'rgba(248,246,244,0.6)',
                border: 'none', fontWeight: 600, cursor: 'not-allowed', fontSize: '1rem',
              }}
            >
              <Lock size={18} /> Çok Yakında
            </button>
            <button
              onClick={() => toast(myList.toggle(s.id) ? 'Listene eklendi' : 'Listenden kaldırıldı')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', borderRadius: '4px',
                background: 'rgba(42,39,36,0.8)', color: 'var(--foreground)',
                border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '1rem',
              }}
            >
              {inList ? <Check size={18} /> : <Plus size={18} />}
              {inList ? 'Listemde' : 'Listeme Ekle'}
            </button>
            <button
              onClick={() => toast(favs.toggle(s.id) ? 'Favorilere eklendi' : 'Favorilerden çıkarıldı')}
              style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'rgba(42,39,36,0.8)', border: 'none', cursor: 'pointer',
                display: 'grid', placeItems: 'center',
                color: isFav ? 'var(--primary)' : 'var(--foreground)',
              }}
            >
              <Heart size={20} style={{ fill: isFav ? 'var(--primary)' : 'none' }} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: '1600px', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '2.5rem' }}>
        <div>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'rgba(248,246,244,0.9)' }}>{s.description}</p>
          {s.trivia && (
            <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--muted-foreground)', borderLeft: '2px solid var(--primary)', paddingLeft: '1rem', fontStyle: 'italic' }}>
              {s.trivia}
            </p>
          )}
        </div>
        <aside style={{ fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div><span style={{ color: 'var(--muted-foreground)' }}>Oyuncular: </span><span style={{ color: 'var(--foreground)' }}>{s.cast.join(', ')}</span></div>
          <div><span style={{ color: 'var(--muted-foreground)' }}>Türler: </span><span style={{ color: 'var(--foreground)' }}>{s.genres.join(', ')}</span></div>
          <div><span style={{ color: 'var(--muted-foreground)' }}>Bu dizi: </span><span style={{ color: 'var(--foreground)' }}>Karanlık, Sürükleyici, Gerilimli</span></div>
        </aside>
      </main>

      {/* Characters */}
      {s.characters.length > 0 && (
        <section style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem 3rem' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Karakterler</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
            {s.characters.map((c) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--card)' }}
              >
                <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                  <img src={c.image} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <div style={{ padding: '10px' }}>
                  <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '1.25rem', lineHeight: 1.1, color: 'var(--foreground)' }}>{c.name}</div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', marginTop: '4px', lineHeight: 1.45 }}>{c.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Episodes */}
      {s.seasons.length > 0 && (
        <section style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 2rem 3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '2.5rem', color: 'var(--foreground)' }}>Bölümler</h2>
            <select
              value={season}
              onChange={(e) => setSeason(Number(e.target.value))}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--foreground)', padding: '8px 14px', borderRadius: '4px', fontSize: '0.875rem', cursor: 'pointer' }}
            >
              {s.seasons.map((sn, i) => (
                <option key={sn.number} value={i}>Sezon {sn.number}: {sn.title}</option>
              ))}
            </select>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
            {current?.episodes.map((ep) => (
              <li key={ep.number} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: '2rem', color: 'var(--muted-foreground)', width: '2.5rem', textAlign: 'center' }}>{ep.number}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--foreground)' }}>{ep.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', whiteSpace: 'nowrap' }}>{ep.duration}</div>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', marginTop: '4px', lineHeight: 1.5 }}>{ep.synopsis}</p>
                </div>
                <button disabled style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--muted)', border: 'none', display: 'grid', placeItems: 'center', cursor: 'not-allowed', color: 'var(--muted-foreground)', alignSelf: 'center' }}>
                  <Lock size={14} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Footer />
    </div>
  )
}
