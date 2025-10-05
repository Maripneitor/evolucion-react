import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  // Efecto para el cambio de estilo del header con el scroll
  useEffect(() => {
    const header = document.querySelector('.header');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">🏺</span>
          <span className="header__logo-text">Evolución</span>
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link">Inicio</NavLink>
            </li>
            <li className="header__nav-item">
               <a href="/#nosotros" className="header__nav-link">Nosotros</a>
            </li>
            <li className="header__nav-item">
              <NavLink to="/proyectos" className="header__nav-link">Proyectos</NavLink>
            </li>
             <li className="header__nav-item">
               <a href="/#contacto" className="header__nav-link">Contacto</a>
            </li>
          </ul>
        </nav>
        {/* Aquí iría la lógica del menú hamburguesa si se implementa */}
      </div>
    </header>
  );
}

export default Header;