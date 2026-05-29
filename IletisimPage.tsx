import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function IletisimPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Header />
      <main style={{ padding: '8rem 2rem 5rem', maxWidth: '48rem', margin: '0 auto' }}>
        <h1 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '2rem', color: 'var(--foreground)' }}>İletişim</h1>
        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.75 }}>
          Wexflix ekibiyle iletişime geçmek için WDB stüdyosuna ulaşabilirsiniz. Detaylar yakında.
        </p>
      </main>
      <Footer />
    </div>
  )
}
