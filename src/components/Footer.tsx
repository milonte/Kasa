import { ReactElement } from 'react';
import '../styles/footer.scss';

export default function Footer(): ReactElement {
  return (
    <div id="footer">
      <img className="footer-logo" src="../images/logo.png" alt="Kasa-logo" />
      <span className="copyrights">© 2020 Kasa. All rights reserved</span>
    </div >
  )
}
