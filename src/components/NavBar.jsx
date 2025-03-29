import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar sticky-top bg-body-tertiary" data-bs-theme="dark">
      <div className="container-sm">
        <NavLink to='/clima' className="navbar-brand" >Clima</NavLink>
        <NavLink to='/pelicula' className="navbar-brand" >Pelicula</NavLink>
      </div>
    </nav>
  )
}