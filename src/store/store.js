import { create } from 'zustand'

export const useStore = create((set) => ({
  characters: [],
  loading: false,
  error: null,

  fetchCharacters: async () => {
    try {
      set({ loading: true })

      const res = await fetch('https://dragonball-api.com/api/characters?limit=60')
      const data = await res.json()

      set({ characters: data.items, loading: false })
    } catch (err) {
      set({ error: 'Error al cargar personajes', loading: false })
    }
  }
}))

