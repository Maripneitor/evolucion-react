import { useState, useEffect, useRef } from 'react';

const timelineItemsData = [
    { year: 2010, title: 'Fundación de Evolución', description: 'Creación de la empresa con el objetivo de unir arqueología científica y técnicas de restauración innovadoras.', category: 'arqueologia' },
    { year: 2012, title: 'Excavación Templo Maya', description: 'Descubrimiento y documentación de un templo ceremonial maya en la península de Yucatán.', category: 'arqueologia' },
    { year: 2014, title: 'Restauración Acrópolis', description: 'Proyecto de conservación y restauración de sectores dañados de la Acrópolis en Atenas, Grecia.', category: 'restauracion' },
    { year: 2016, title: 'Tecnología LIDAR', description: 'Implementación de tecnología LIDAR para descubrir estructuras arqueológicas ocultas.', category: 'investigacion' },
    // ... Agrega los demás items si lo deseas
];

function Timeline() {
  const [filter, setFilter] = useState('all');
  const itemRefs = useRef([]);

  const filteredItems = filter === 'all' 
    ? timelineItemsData 
    : timelineItemsData.filter(item => item.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

    const currentRefs = itemRefs.current;
    currentRefs.forEach(item => { if (item) observer.observe(item); });

    return () => {
      currentRefs.forEach(item => { if (item) observer.unobserve(item); });
    };
  }, [filteredItems]);

  return (
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
            ref={el => (itemRefs.current[index] = el)}
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
  );
}

export default Timeline;