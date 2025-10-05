import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Pequeño componente para una tarjeta animada
function AnimatedCard({ icon, title, children }) {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
  const isVisible = entry?.isIntersecting;

  return (
    <div ref={ref} className={`about__card fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="about__card-icon">{icon}</div>
      <h3 className="about__card-title">{title}</h3>
      <p className="about__card-text">{children}</p>
    </div>
  );
}

function AboutSection() {
  const [filter, setFilter] = useState('all');
  const itemRefs = useRef([]);

  const timelineItemsData = [
    { year: 2010, title: 'Fundación de Evolución', description: 'Creación de la empresa con el objetivo de unir arqueología científica y técnicas de restauración innovadoras.', category: 'arqueologia' },
    { year: 2012, title: 'Excavación Templo Maya', description: 'Descubrimiento y documentación de un templo ceremonial maya en la península de Yucatán.', category: 'arqueologia' },
    { year: 2014, title: 'Restauración Acrópolis', description: 'Proyecto de conservación y restauración de sectores dañados de la Acrópolis en Atenas, Grecia.', category: 'restauracion' },
    { year: 2016, title: 'Tecnología LIDAR', description: 'Implementación de tecnología LIDAR para descubrir estructuras arqueológicas ocultas bajo la vegetación.', category: 'investigacion' },
    { year: 2018, title: 'Necrópolis Egipcia', description: 'Excavación de una necrópolis del Imperio Nuevo en Luxor, Egipto, con hallazgos significativos.', category: 'arqueologia' },
    { year: 2020, title: 'Restauración Virtual', description: 'Desarrollo de técnicas de realidad virtual para la restauración y visualización de sitios arqueológicos.', category: 'restauracion' },
    { year: 2022, title: 'Publicación Científica', description: 'Publicación del estudio "Nuevas perspectivas en la conservación de pintura mural prehispánica" en revista internacional.', category: 'investigacion' },
    { year: 2023, title: 'Proyecto Subacuático', description: 'Inicio de excavación arqueológica subacuática en pecio romano del Mediterráneo.', category: 'arqueologia' }
  ];

  const filteredItems = filter === 'all' 
    ? timelineItemsData 
    : timelineItemsData.filter(item => item.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // El elemento se considera visible cuando el 10% está en pantalla
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach(item => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      currentRefs.forEach(item => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, [filteredItems]); // El efecto se vuelve a ejecutar si el filtro cambia

  return (
    <section className="about" id="nosotros">
      <div className="container">
        <h2 className="about__title">Nuestra Historia y Compromiso</h2>

        {/* Misión, Visión y Valores - Ahora con AnimatedCard */}
        <div className="about__grid">
          <AnimatedCard icon="🎯" title="Misión">
            Preservar, estudiar y restaurar el patrimonio arqueológico mediante técnicas innovadoras, contribuyendo al conocimiento histórico y al disfrute cultural de las generaciones presentes y futuras.
          </AnimatedCard>
          <AnimatedCard icon="🔭" title="Visión">
            Ser referentes internacionales en arqueología y restauración, reconocidos por nuestro rigor científico, compromiso ético y contribución a la conservación del patrimonio cultural mundial.
          </AnimatedCard>
          <AnimatedCard icon="💎" title="Valores">
            Excelencia científica, respeto por el patrimonio, compromiso con la educación, innovación responsable y colaboración interdisciplinaria en todos nuestros proyectos.
          </AnimatedCard>
        </div>

        {/* Línea de tiempo interactiva - Se mantiene igual */}
        <div className="timeline">
          <h3 className="timeline__title">Nuestra Trayectoria</h3>
          <div className="timeline__filters">
            <button onClick={() => setFilter('all')} className={`timeline__filter ${filter === 'all' ? 'active' : ''}`}>Todos</button>
            <button onClick={() => setFilter('arqueologia')} className={`timeline__filter ${filter === 'arqueologia' ? 'active' : ''}`}>Arqueología</button>
            <button onClick={() => setFilter('restauracion')} className={`timeline__filter ${filter === 'restauracion' ? 'active' : ''}`}>Restauración</button>
            <button onClick={() => setFilter('investigacion')} className={`timeline__filter ${filter === 'investigacion' ? 'active' : ''}`}>Investigación</button>
          </div>
          <div className="timeline__line"></div>
          <div className="timeline__items">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="timeline__item" 
                data-category={item.category}
                ref={el => (itemRefs.current[index] = el)} // Asigna el elemento del DOM a nuestra referencia
              >
                <div className="timeline__dot"></div>
                <div className="timeline__content">
                  <div className="timeline__year">{item.year}</div>
                  <h4 className="timeline__item-title">{item.title}</h4>
                  <p className="timeline__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nueva sección: Equipo de Expertos - Se mantiene igual */}
        <section className="team-section">
          <h2 className="team-section__title">Conoce a Nuestros Expertos</h2>
          <p className="team-section__description">Nuestro equipo multidisciplinario combina experiencia académica con práctica de campo para ofrecer soluciones integrales en arqueología y restauración.</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member__image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dra. Elena Rodríguez - Directora de Arqueología" />
              </div>
              <h3 className="team-member__name">Dra. Elena Rodríguez</h3>
              <p className="team-member__role">Directora de Arqueología</p>
              <p className="team-member__bio">Especialista en culturas mesoamericanas con más de 15 años de experiencia en excavaciones. PhD en Arqueología por la Universidad Nacional Autónoma de México.</p>
            </div>
            <div className="team-member">
                <div className="team-member__image">
                    <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dr. Carlos Méndez - Jefe de Restauración" />
                </div>
                <h3 className="team-member__name">Dr. Carlos Méndez</h3>
                <p className="team-member__role">Jefe de Restauración</p>
                <p className="team-member__bio">Experto en conservación de monumentos históricos y técnicas de restauración no invasivas. Ha liderado proyectos en 10 países diferentes.</p>
            </div>
            <div className="team-member">
                <div className="team-member__image">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dra. Sofia Chen - Investigadora Principal" />
                </div>
                <h3 className="team-member__name">Dra. Sofia Chen</h3>
                <p className="team-member__role">Investigadora Principal</p>
                <p className="team-member__bio">Pionera en la aplicación de tecnologías LIDAR y drones para prospección arqueológica. Autora de más de 20 publicaciones científicas.</p>
            </div>
            <div className="team-member">
                <div className="team-member__image">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Lic. Alejandro Torres - Coordinador de Campo" />
                </div>
                <h3 className="team-member__name">Lic. Alejandro Torres</h3>
                <p className="team-member__role">Coordinador de Campo</p>
                <p className="team-member__bio">Especialista en logística de excavaciones y gestión de equipos multidisciplinarios. Con experiencia en proyectos de alta complejidad.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default AboutSection;