import { useEffect, useState } from 'react'
import { useStore } from '../store/store'
import CardList from '../components/CardList'

export default function Entities() {
  const { characters, fetchCharacters, loading } = useStore()
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (characters.length === 0) fetchCharacters()
  }, [])

  const perPage = 9
  const start = page * perPage
  const end = start + perPage

  return (
    <>
      <h2>Listado de Personajes</h2>

      {loading ? <p>Cargando...</p> : (
        <>
          <CardList items={characters.slice(start, end)} />

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-primary" disabled={page === 0} onClick={() => setPage(page - 1)}>Prev</button>
            <span>Página {page + 1}</span>
            <button className="btn btn-outline-primary" disabled={end >= characters.length} onClick={() => setPage(page + 1)}>Next</button>
          </div>
        </>
      )}
    </>
  )
}
