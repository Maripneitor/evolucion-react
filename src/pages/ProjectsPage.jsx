import { Link } from 'react-router-dom';
import { projectsData } from '../data/proyectosData'; // Asegúrate que la ruta sea correcta

function ProjectsPage() {
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
          {/* En una futura versión, aquí podrías añadir los controles de vista (Grid/Lista) */}
          <div className="projects-grid" id="projects-grid-container">
            {/* Verificamos si hay proyectos para mostrar */}
            {projectsData.length > 0 ? (
              projectsData.map(project => (
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
              // Mensaje por si no hay proyectos en el archivo de datos
              <p className="no-projects">No hay proyectos para mostrar en este momento.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;