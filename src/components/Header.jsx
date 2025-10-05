import { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const header = document.querySelector('.header');
    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    document.body.classList.toggle('no-scroll', newMenuState);
  };

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

        <nav
          id="main-nav" // <-- ID para accesibilidad
          className={`header__nav ${isMenuOpen ? 'active' : ''}`}
        >
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

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Cambiar tema">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            className={`header__toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            aria-controls="main-nav" // <-- Conecta el botón a la navegación
            onClick={toggleMenu}
          >
            <span className="header__toggle-bar"></span>
            <span className="header__toggle-bar"></span>
            <span className="header__toggle-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;