import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to={'/'}><img id="logo" src="../images/logo.png" alt="Kasa-logo" /></Link>
      <div className="links">
        <NavLink to={`/`} className={({ isActive }) => isActive ? "current-link" : undefined} > Accueuil</NavLink>
        <NavLink to={`/about/`} className={({ isActive }) => isActive ? "current-link" : undefined} > A propos</NavLink>
      </div >
    </div >
  )
}
