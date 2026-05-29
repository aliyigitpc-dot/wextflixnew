import { useCallback, useEffect, useState } from 'react'

const subscribers = new Map<string, Set<() => void>>()

function notify(key: string) {
  subscribers.get(key)?.forEach((fn) => fn())
}

function read(key: string): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function useLocalList(key: string) {
  const [items, setItems] = useState<string[]>(() => read(key))

  useEffect(() => {
    const fn = () => setItems(read(key))
    if (!subscribers.has(key)) subscribers.set(key, new Set())
    subscribers.get(key)!.add(fn)
    fn()
    return () => {
      subscribers.get(key)?.delete(fn)
    }
  }, [key])

  const toggle = useCallback(
    (id: string) => {
      const current = read(key)
      const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
      localStorage.setItem(key, JSON.stringify(next))
      notify(key)
      return next.includes(id)
    },
    [key],
  )

  const has = useCallback((id: string) => items.includes(id), [items])

  return { items, toggle, has }
}

export const useMyList = () => useLocalList('wexflix:mylist')
export const useFavorites = () => useLocalList('wexflix:favorites')
