import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Lógica para el estilo de scroll
    const header = document.querySelector('.header');
    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para abrir/cerrar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-icon">🏺</span>
          <span className="header__logo-text">Evolución</span>
        </Link>

        {/* Añadimos la clase 'active' dinámicamente */}
        <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link" onClick={closeMenu}>Inicio</NavLink>
            </li>
            <li className="header__nav-item">
              <a href="/#nosotros" className="header__nav-link" onClick={closeMenu}>Nosotros</a>
            </li>
            <li className="header__nav-item">
              <NavLink to="/proyectos" className="header__nav-link" onClick={closeMenu}>Proyectos</NavLink>
            </li>
            <li className="header__nav-item">
              <a href="/#contacto" className="header__nav-link" onClick={closeMenu}>Contacto</a>
            </li>
          </ul>
        </nav>

        {/* Botón hamburguesa con su lógica */}
        <button
          className={`header__toggle ${isMenuOpen ? 'active' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="header__toggle-bar"></span>
          <span className="header__toggle-bar"></span>
          <span className="header__toggle-bar"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;