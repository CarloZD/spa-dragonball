import { useEffect } from 'react'
import { useStore } from '../store/store'
import CardList from '../components/CardList'

export default function Home() {
  const { characters, fetchCharacters, loading } = useStore()

  useEffect(() => {
    if (characters.length === 0) fetchCharacters()
  }, [])

  return (
    <>
      <div className="bg-light p-4 text-center rounded mb-4">
        <h1 className="fw-bold">Dragon Ball SPA</h1>
        <p>Consumiendo API pública con React + Zustand</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Dragon_Ball_Z_logo.svg" width="200" />
      </div>

      <h3>Personajes destacados</h3>
      {loading ? <p>Cargando...</p> : <CardList items={characters.slice(0, 6)} />}
    </>
  )
}

