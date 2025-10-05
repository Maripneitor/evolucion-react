import { useState, useEffect } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Preservando la Historia, Restaurando el Futuro", description: "Expertos en arqueología y restauración de patrimonio cultural." },
    { title: "Tecnología Avanzada en Arqueología", description: "Utilizamos LIDAR y drones para descubrir sitios arqueológicos ocultos." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero" id="inicio">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <div className="slide__background"></div>
            <div className="slide__overlay"></div>
            <div className="slide__content">
              <h1 className="slide__title">{slide.title}</h1>
              <p className="slide__description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hero__content">
        <div className="container">
          <div className="hero__buttons">
            <a href="/proyectos" className="btn btn--primary">Descubre Proyectos</a>
            <a href="#contacto" className="btn btn--secondary">Contáctanos</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;