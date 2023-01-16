import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <div>     
          <div>Navbar</div>
          <Link to={`/`}>Accueuil</Link>
          <Link to={`/about/`}>A propos</Link>
      </div>
    )
}
