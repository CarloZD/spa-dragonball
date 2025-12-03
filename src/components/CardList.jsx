import Card from './Card'

export default function CardList({ items }) {
  return (
    <div className="row g-4">
      {items.map((it) => (
        <div className="col-md-4" key={it.id}>
          <Card item={it} />
        </div>
      ))}
    </div>
  )
}
