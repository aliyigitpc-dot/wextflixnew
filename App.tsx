import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import HomePage from './pages/HomePage'
import DiziPage from './pages/DiziPage'
import ListemPage from './pages/ListemPage'
import FavorilerPage from './pages/FavorilerPage'
import HakkimizdaPage from './pages/HakkimizdaPage'
import GizlilikPage from './pages/GizlilikPage'
import IletisimPage from './pages/IletisimPage'

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
