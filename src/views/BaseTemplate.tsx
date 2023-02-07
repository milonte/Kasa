import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function BaseTemplate() {
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
