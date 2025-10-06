import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/proyectosData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ProjectCardSkeleton from '../components/ProjectCardSkeleton'; // <-- Importa el esqueleto

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Todos');
  const [isLoading, setIsLoading] = useState(true); // <-- NUEVO estado de carga

  // Simula la carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Espera 1.5 segundos
    return () => clearTimeout(timer);
  }, []);

  const categories = ['Todos', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filterCategory === 'Todos' || project.category === filterCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <section className="page-hero">{/* ... */}</section>
      <section className="projects-section">
        <div className="container">
          <div className="projects-controls">{/* ... */}</div>

          <div className="projects-grid">
            {/* Si está cargando, muestra los esqueletos */}
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            ) : filteredProjects.length > 0 ? (
              // Si ya cargó, muestra los proyectos
              filteredProjects.map(project => (
                <Link to={`/proyecto/${project.id}`} key={project.id} className="project-card">
                  <div className="project-card__image-container">
                    <LazyLoadImage
                      alt={`Imagen de ${project.title}`}
                      src={project.image}
                      effect="blur"
                      className="project-card__image"
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
              <p className="no-projects">No se encontraron proyectos.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;