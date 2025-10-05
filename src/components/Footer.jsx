// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* ... (Pega aquí el contenido del div "footer__grid" de tu footer.html) ... */}
          {/* Asegúrate de cambiar 'class' por 'className' */}
           <div className="footer__col">
                <a href="index.html" className="footer__logo">
                    <span className="footer__logo-icon">🏺</span>
                    <span className="footer__logo-text">Evolución</span>
                </a>
                <p className="footer__description">Preservando la Historia, Restaurando el Futuro. Expertos en arqueología y restauración de patrimonio cultural.</p>
            </div>
            {/* ... (resto de las columnas) ... */}
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom">
          {/* ... (Pega aquí el contenido del div "footer__bottom") ... */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;