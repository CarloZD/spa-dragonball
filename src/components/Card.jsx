src/components/Card.jsx
export default function Card({ item }) {
  return (
    <div className="card h-100 text-center shadow">
      <img src={item.image} alt={item.name} className="card-img-top" style={{ height: 250, objectFit: 'contain' }} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="mb-1"><strong>Raza:</strong> {item.race}</p>
        <p className="mb-1"><strong>Ki:</strong> {item.ki}</p>
      </div>
    </div>
  )
}
