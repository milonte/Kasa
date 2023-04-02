import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { ReactElement } from 'react'

export default function BaseTemplate(): ReactElement {
  return (
    <div>
      <Navbar />
      <div id="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
