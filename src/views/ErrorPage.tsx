import '../styles/error.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();
  function displayError() {
    return (
      <>
        <div className='error-status'>{error.status}</div>
        <div className='error-message'>{404 === error.status ?
          "Oups! La page que vous demandez n'existe pas." :
          "Oups! Un problème est survenu."}
        </div>
      </>
    )
  }
  return (
    <>
      <Navbar />
      <div id="error">
        <div>{displayError()}</div>
        <Link to={"/"} className='home-link'>Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </>
  )
}
