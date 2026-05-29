import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import DiziPage from './DiziPage'
import ListemPage from './ListemPage'
import FavorilerPage from './FavorilerPage'
import HakkimizdaPage from './HakkimizdaPage'
import GizlilikPage from './GizlilikPage'
import IletisimPage from './IletisimPage'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dizi/:id" element={<DiziPage />} />
        <Route path="/listem" element={<ListemPage />} />
        <Route path="/favoriler" element={<FavorilerPage />} />
        <Route path="/hakkimizda" element={<HakkimizdaPage />} />
        <Route path="/gizlilik" element={<GizlilikPage />} />
        <Route path="/iletisim" element={<IletisimPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster theme="dark" position="bottom-right" />
    </>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center" style={{ background: 'var(--background)' }}>
      <div className="text-center">
        <h1 className="text-7xl" style={{ fontFamily: "'Bebas Neue', sans-serif", color: 'var(--foreground)' }}>404</h1>
        <p className="mt-4" style={{ color: 'var(--muted-foreground)' }}>Sayfa bulunamadı.</p>
        <a href="/" className="mt-4 inline-block" style={{ color: 'var(--primary)' }}>Anasayfaya dön</a>
      </div>
    </div>
  )
}
