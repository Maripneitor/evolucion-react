import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/proyectosData';

// Importa el Lightbox y sus estilos
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ProjectDetailPage() {
  const { id } = useParams(); // Obtiene el 'id' de la URL -> /proyecto/:id
  const project = projectsData.find(p => p.id === parseInt(id));

  // Estado para manejar la posición del slider de comparación
  const [sliderPosition, setSliderPosition] = useState(50);

  // Estado para el Lightbox
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  // Si no se encuentra el proyecto, muestra un mensaje de error amigable.
  if (!project) {
    return (
      <main>
        <section className="error-section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="container">
            <div className="error-content">
              <h1>Proyecto No Encontrado</h1>
              <p>Lo sentimos, no pudimos encontrar el proyecto que estás buscando.</p>
              <Link to="/proyectos" className="btn btn--primary">Volver a Proyectos</Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Si se encuentra el proyecto, muestra todos sus detalles.
  return (
    <main>
      {/* Hero del proyecto */}
      <section className="project-hero">
        <div className="container">
          <div className="project-hero__content">
            <span className="project-hero__category">{project.category}</span>
            <h1 className="project-hero__title">{project.title}</h1>
            <p className="project-hero__description">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Slider de comparación Antes/Después */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="comparison__title">Progreso del Proyecto</h2>
          <div className="comparison-container">
            <div className="comparison-slider">
              <div className="comparison-before" style={{ width: `${sliderPosition}%` }}>
                <img src={project.beforeImage} alt={`Antes: ${project.title}`} />
                <div className="comparison-label">Antes</div>
              </div>
              <div className="comparison-after">
                <img src={project.afterImage} alt={`Después: ${project.title}`} />
                <div className="comparison-label">Después</div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="comparison-slider-input"
                aria-label="Control de comparación de imagen"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detalles del proyecto */}
      <section className="project-details">
        <div className="container">
          <div className="project-details__grid">
            <div className="project-details__info">
              <h2>Detalles del Proyecto</h2>
              <div className="project-meta">
                <div className="project-meta__item">
                  <span className="project-meta__label">Año:</span>
                  <span className="project-meta__value">{project.year || '-'}</span>
                </div>
                <div className="project-meta__item">
                  <span className="project-meta__label">Ubicación:</span>
                  <span className="project-meta__value">{project.location || '-'}</span>
                </div>
                <div className="project-meta__item">
                  <span className="project-meta__label">Duración:</span>
                  <span className="project-meta__value">{project.duration || '-'}</span>
                </div>
                <div className="project-meta__item">
                  <span className="project-meta__label">Cliente:</span>
                  <span className="project-meta__value">{project.client || '-'}</span>
                </div>
              </div>
            </div>
            
            <div className="project-details__content">
              <h3>Descripción Completa</h3>
              <div className="project-content">
                <p>{project.fullDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería adicional - MODIFICADA con Lightbox */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery">
          <div className="container">
            <h2>Galería del Proyecto</h2>
            <div className="gallery-grid">
              {project.gallery.map((imgUrl, index) => (
                <div 
                  key={index} 
                  className="gallery-item" 
                  onClick={() => openLightbox(index)} // <-- Añade el onClick
                  style={{ cursor: 'pointer' }} // <-- Añade cursor para indicar que es clickeable
                >
                  <img src={imgUrl} alt={`Imagen ${index + 1} del proyecto ${project.title}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Componente Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={project.gallery ? project.gallery.map(url => ({ src: url })) : []}
        index={currentIndex}
      />
    </main>
  );
}

export default ProjectDetailPage;