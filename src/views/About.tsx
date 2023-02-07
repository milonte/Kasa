import Dropdown from "../components/Dropdown";
import { HelmetProvider, Helmet } from "react-helmet-async";
import '../styles/about.scss';

export default function About() {
  return (
    <div id="about">
      <HelmetProvider>
        <Helmet>
          <title>A propos</title>
        </Helmet>
      </HelmetProvider>
      <div className="banner"></div>
      <div className="dropdown-container">
        <Dropdown title="Fiabilité">
          <span>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</span>
        </Dropdown>
        <Dropdown title="Respect">
          <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</span>
        </Dropdown>
        <Dropdown title="Service">
          <span>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</span>
        </Dropdown>
        <Dropdown title="Sécurité">
          <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</span>
        </Dropdown>
      </div>
    </div>
  )
}
