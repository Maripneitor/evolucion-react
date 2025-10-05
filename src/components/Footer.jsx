import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">🏺</span>
              <span className="footer__logo-text">Evolución</span>
            </Link>
            <p className="footer__description">Preservando la Historia, Restaurando el Futuro. Expertos en arqueología y restauración de patrimonio cultural.</p>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Navegación</h3>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Inicio</Link></li>
              <li><a href="/#nosotros" className="footer__link">Nosotros</a></li>
              <li><Link to="/proyectos" className="footer__link">Proyectos</Link></li>
              <li><a href="/#contacto" className="footer__link">Contacto</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Servicios</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Excavación Arqueológica</a></li>
              <li><a href="#" className="footer__link">Restauración de Monumentos</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Contacto</h3>
            <div className="footer__contact-info">
              <p>📧 info@evolucion.com</p>
              <p>📞 +34 912 345 678</p>
            </div>
          </div>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
            <p className="footer__copyright">© 2025 Evolución. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;