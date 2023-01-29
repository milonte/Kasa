import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.scss';

export default function Navbar() {
  return (
    <div id="navbar">
      <img id="logo" src="../images/logo.png" alt="Kasa-logo" />
      <div className="links">
        <NavLink to={`/`} className={({ isActive }) => isActive ? "current-link" : undefined} > Accueuil</NavLink>
        <NavLink to={`/about/`} className={({ isActive }) => isActive ? "current-link" : undefined} > A propos</NavLink>
      </div >
    </div >
  )
}
