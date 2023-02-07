import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { HelmetProvider, Helmet } from "react-helmet-async";
import Footer from '../components/Footer'

export default function BaseTemplate() {
  return (
    <div>
      <HelmetProvider>
        <Helmet
          titleTemplate="%s - Kasa"
          defaultTitle="Kasa">
          <meta name="description" content="La location d’appartements entre particuliers depuis près de 10 ans" />
        </Helmet>
        <Navbar />
        <div id="outlet-container">
          <Outlet />
        </div>
        <Footer />
      </HelmetProvider>
    </div>
  )
}
