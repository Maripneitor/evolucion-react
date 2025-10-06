import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/proyectosData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ProjectCardSkeleton from '../components/ProjectCardSkeleton';

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Todos');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Reducimos un poco el tiempo para una mejor UX
    return () => clearTimeout(timer);
  }, []);

  // Obtenemos las categorías únicas de los datos, incluyendo "Todos"
  const categories = ['Todos', ...new Set(projectsData.map(p => p.category))];

  // Filtramos los proyectos basándonos en la categoría y el término de búsqueda
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filterCategory === 'Todos' || project.category === filterCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* 1. Contenido del Hero de la página */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Nuestros Proyectos</h1>
          <p className="page-hero__description">
            Explora una selección de nuestras investigaciones arqueológicas y proyectos de restauración más destacados alrededor del mundo.
          </p>
        </div>
      </section>
      
      <section className="projects-section">
        <div className="container">
          {/* 2. Controles de Filtro y Búsqueda */}
          <div className="projects-controls">
            <div className="project-search">
              <input
                type="text"
                placeholder="Buscar por nombre o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar proyectos"
              />
            </div>
            <div className="project-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`timeline__filter ${filterCategory === category ? 'active' : ''}`}
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {isLoading ? (
              // Mostramos 6 esqueletos mientras carga
              Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            ) : filteredProjects.length > 0 ? (
              // Mapeamos sobre los proyectos ya filtrados
              filteredProjects.map(project => (
                <Link to={`/proyecto/${project.id}`} key={project.id} className="project-card">
                  <div className="project-card__image-container">
                    <LazyLoadImage
                      alt={`Imagen de ${project.title}`}
                      src={project.image}
                      effect="blur"
                      className="project-card__image"
                      height="250" // Ayuda a prevenir saltos de layout
                    />
                    <span className="project-card__category">{project.category}</span>
                  </div>
                  <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>
                    <div className="project-card__meta">
                      <span className="project-card__year">{project.year}</span>
                      <span className="project-card__location">{project.location}</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              // 3. Mensaje mejorado cuando no hay resultados
              <div className="no-projects">
                <h3>No se encontraron resultados</h3>
                <p>Intenta ajustar tu búsqueda o limpiar los filtros.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;  