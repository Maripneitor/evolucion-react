import MissionVisionValues from './MissionVisionValues';
import Timeline from './Timeline';
import TeamSection from './TeamSection';

function AboutSection() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        <h2 className="about__title">Nuestra Historia y Compromiso</h2>
        
        <MissionVisionValues />
        <Timeline />
        <TeamSection />
        
      </div>
    </section>
  );
}

export default AboutSection;