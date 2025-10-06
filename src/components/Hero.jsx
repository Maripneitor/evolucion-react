import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para los botones

// 1. Ampliamos el contenido del carrusel para que sea más dinámico
const slides = [
  { 
    title: "Preservando la Historia, Restaurando el Futuro", 
    description: "Expertos en arqueología y restauración de patrimonio cultural.",
    backgroundClass: "slide-bg-1"
  },
  { 
    title: "Tecnología Avanzada en Arqueología", 
    description: "Utilizamos LIDAR y drones para descubrir sitios arqueológicos ocultos.",
    backgroundClass: "slide-bg-2"
  },
  { 
    title: "Restauración de Monumentos Históricos", 
    description: "Devolvemos el esplendor a estructuras antiguas con técnicas de vanguardia.",
    backgroundClass: "slide-bg-3"
  },
  { 
    title: "Investigación y Documentación Rigurosa", 
    description: "Cada hallazgo es meticulosamente documentado para la posteridad.",
    backgroundClass: "slide-bg-4"
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. Usamos useCallback para memorizar las funciones y evitar re-renders innecesarios
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000); // Aumentamos un poco el tiempo
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero" id="inicio">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            {/* 3. Usamos clases para los fondos en lugar de URLs directas en el CSS */}
            <div className={`slide__background ${slide.backgroundClass}`}></div>
            <div className="slide__overlay"></div>
            <div className="slide__content">
              <h1 className="slide__title animate-slide-up">{slide.title}</h1>
              <p className="slide__description animate-slide-up" data-delay="0.4s">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero__content">
        <div className="container">
          <div className="hero__buttons animate-slide-up" data-delay="0.5s">
            {/* Usamos Link para la navegación interna */}
            <Link to="/proyectos" className="btn btn--primary">Descubre Proyectos</Link>
            <a href="#contacto" className="btn btn--secondary">Contáctanos</a>
          </div>
        </div>
      </div>
      
      {/* 4. Añadimos los controles de navegación (flechas y puntos) */}
      <div className="slider-controls">
        <button 
          className="slider-arrow prev" 
          onClick={prevSlide} 
          aria-label="Diapositiva anterior"
        >
          &#10094;
        </button>
        <button 
          className="slider-arrow next" 
          onClick={nextSlide} 
          aria-label="Siguiente diapositiva"
        >
          &#10095;
        </button>
        
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;