import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container">
        <Link className="navbar-brand fw-bold text-dark" to="/">DRAGON BALL SPA</Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/entities">Personajes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/contact">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
