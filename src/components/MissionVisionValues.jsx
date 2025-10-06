import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Componente reutilizable para las tarjetas animadas
function AnimatedCard({ icon, title, children, delay = '0s' }) {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
  const isVisible = entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={`about__card fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div className="about__card-icon">{icon}</div>
      <h3 className="about__card-title">{title}</h3>
      <p className="about__card-text">{children}</p>
    </div>
  );
}

function MissionVisionValues() {
  return (
    <div className="about__grid">
      <AnimatedCard icon="🎯" title="Misión">
        Preservar, estudiar y restaurar el patrimonio arqueológico mediante técnicas innovadoras.
      </AnimatedCard>
      <AnimatedCard icon="🔭" title="Visión" delay="0.1s">
        Ser referentes internacionales en arqueología y restauración, reconocidos por nuestro rigor científico.
      </AnimatedCard>
      <AnimatedCard icon="💎" title="Valores" delay="0.2s">
        Excelencia, respeto por el patrimonio, innovación responsable y colaboración.
      </AnimatedCard>
    </div>
  );
}

export default MissionVisionValues;