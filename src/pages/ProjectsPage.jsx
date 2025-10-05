import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/proyectosData'; // Asegúrate que la ruta sea correcta

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = filterCategory === 'Todos' || project.category === filterCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Nuestros Proyectos</h1>
          <p className="page-hero__description">Descubre los trabajos de arqueología y restauración que hemos realizado a lo largo de los años.</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          {/* Controles de Filtro y Búsqueda - NUEVO */}
          <div className="projects-controls">
            <div className="project-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={filterCategory === category ? 'active' : ''}
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="project-search">
              <input
                type="text"
                placeholder="Buscar por título..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="projects-grid" id="projects-grid-container">
            {/* Verificamos si hay proyectos para mostrar */}
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <Link to={`/proyecto/${project.id}`} key={project.id} className="project-card">
                  <div className="project-card__image-container">
                    <img src={project.image} alt={`Imagen de ${project.title}`} className="project-card__image" loading="lazy" />
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
              // Mensaje actualizado para búsquedas sin resultados
              <p className="no-projects">No se encontraron proyectos que coincidan con tu búsqueda.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;