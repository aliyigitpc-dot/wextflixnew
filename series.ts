import newEra from '@/assets/sikkolik-new-era.jpg'
import origins from '@/assets/sikkolik-origins.jpg'
import tunahanImg from '@/assets/char-tunahan.jpg'
import alpImg from '@/assets/char-alp.jpg'
import apoImg from '@/assets/char-apo.jpg'
import enisteImg from '@/assets/char-eniste.jpg'

export type Episode = {
  number: number
  title: string
  duration: string
  synopsis: string
}

export type Season = {
  number: number
  title: string
  episodes: Episode[]
}

export type Character = {
  name: string
  role: string
  side: 'left' | 'right' | 'group'
  image: string
}

export type Series = {
  id: string
  title: string
  tagline: string
  year: number
  rating: string
  genres: string[]
  cast: string[]
  description: string
  poster: string
  backdrop: string
  status: string
  match: number
  seasons: Season[]
  characters: Character[]
  trivia?: string
}

export const sikkolik: Series = {
  id: 'sikkolik-new-era',
  title: 'Sikkolik: The New Era',
  tagline: 'Parayı kovaladılar. Asla bulamayacaklar.',
  year: 2026,
  rating: '18+',
  genres: ['Suç', 'Dram', 'Gerilim'],
  cast: ['Tunahan', 'Alp', 'Apo Abi', 'Enişte'],
  description:
    'Tunahan ve Alp — iki yakın arkadaş, büyük parayı kovalarken her gece daha karanlık bir sokağa düşer. Uyuşturucu, borç, ihanet… Para hep bir adım önde, hep ulaşamadıkları yerde. Bir yandan Apo Abi ve eniştesinin etrafındaki gizem büyür: kim kimin için çalışıyor, kimse bilmiyor. Sonunda anlarlar ki parayı asla bulamayacaklar — ama parayı kovalayan, kendini kaybeder.',
  poster: newEra,
  backdrop: newEra,
  status: 'Çok Yakında',
  match: 98,
  trivia: '2 sezon kesinleşti. Çekimler başlıyor.',
  characters: [
    { name: 'Tunahan', role: 'Soğukkanlı. Hesaplı. Tehlikeli. Kapaktaki solda duran.', side: 'left', image: tunahanImg },
    { name: 'Alp', role: 'Genç. Hırslı. Sınır tanımaz. Kapaktaki sağda duran.', side: 'right', image: alpImg },
    { name: 'Apo Abi', role: 'Gölgedeki adam. Bıyıklı, kara saçlı. Her şeyi bilen ama konuşmayan.', side: 'group', image: apoImg },
    { name: 'Enişte', role: 'Beyaz saçlı, ağırbaşlı. Sırrın anahtarı onda; gözleri konuşur.', side: 'group', image: enisteImg },
  ],
  seasons: [
    {
      number: 1,
      title: 'Para',
      episodes: [
        { number: 1, title: 'Çanta', duration: '52 dk', synopsis: 'İçinde para olduğu söylenen bir çanta. İki arkadaş. Peşinde koştukları şey hiç bulunamayacak.' },
        { number: 2, title: 'İlk Gece', duration: '48 dk', synopsis: 'Tunahan ve Alp parayı bulmak için karanlık bir yola sapar.' },
        { number: 3, title: 'Toz', duration: '50 dk', synopsis: 'İlk büyük hata. Geri dönüşü olmayan bir karar.' },
        { number: 4, title: 'Apo Abi', duration: '55 dk', synopsis: 'Gölgedeki adam ilk defa sahneye çıkar.' },
        { number: 5, title: "Enişte'nin Sırrı", duration: '47 dk', synopsis: 'Maskenin ardındaki yüz bile bir yalan olabilir.' },
        { number: 6, title: 'İhanet', duration: '53 dk', synopsis: 'İçeriden biri konuşur.' },
        { number: 7, title: 'Kanlı Sokak', duration: '49 dk', synopsis: "Sokağın kuralları yeniden yazılır." },
        { number: 8, title: 'Yeni Era', duration: '62 dk', synopsis: 'Sezon finali. Para hâlâ ortada yok.' },
      ],
    },
    {
      number: 2,
      title: 'Bedel',
      episodes: [
        { number: 1, title: 'Geri Dönüş', duration: '—', synopsis: 'Yeni sezon. Yeni hesaplaşmalar. Detaylar yakında.' },
        { number: 2, title: '—', duration: '—', synopsis: 'Detaylar yakında açıklanacak.' },
        { number: 3, title: '—', duration: '—', synopsis: 'Detaylar yakında açıklanacak.' },
        { number: 4, title: '—', duration: '—', synopsis: 'Detaylar yakında açıklanacak.' },
      ],
    },
  ],
}

export const upcomingSeries: Series[] = [
  {
    id: 'kara-mahalle',
    title: 'Kara Mahalle',
    tagline: 'Sessiz sokaklarda yüksek sesli sırlar.',
    year: 2026,
    rating: '16+',
    genres: ['Dram', 'Gerilim'],
    cast: ['—'],
    description: 'Bir mahallenin tek bir geceye sığan çöküşü. Detaylar yakında.',
    poster: origins,
    backdrop: origins,
    status: 'Çok Yakında',
    match: 92,
    characters: [],
    seasons: [],
  },
  {
    id: 'neon-borc',
    title: 'Neon Borç',
    tagline: 'Her ışığın bir faizi vardır.',
    year: 2027,
    rating: '18+',
    genres: ['Suç', 'Neo-Noir'],
    cast: ['—'],
    description: 'Şehrin neon ışıklarının altında dönen borç-tahsil ağı. Detaylar yakında.',
    poster: newEra,
    backdrop: newEra,
    status: 'Çok Yakında',
    match: 88,
    characters: [],
    seasons: [],
  },
  {
    id: 'son-vardiya',
    title: 'Son Vardiya',
    tagline: 'Sabaha kimse aynı çıkmaz.',
    year: 2027,
    rating: '16+',
    genres: ['Gerilim'],
    cast: ['—'],
    description: 'Bir fabrikanın gece vardiyasında başlayan kayboluşlar. Detaylar yakında.',
    poster: origins,
    backdrop: origins,
    status: 'Çok Yakında',
    match: 84,
    characters: [],
    seasons: [],
  },
]

export const allSeries: Series[] = [sikkolik, ...upcomingSeries]

export const getSeries = (id: string) => allSeries.find((s) => s.id === id)
