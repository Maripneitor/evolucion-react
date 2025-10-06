import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './TeamSection.module.css'; // Importación de CSS Modules

function TeamSection() {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
    const isVisible = entry?.isIntersecting;

    const sectionClassName = `fade-in-section ${isVisible ? 'is-visible' : ''} ${styles.teamSection}`;

    return (
        <section ref={ref} className={sectionClassName}>
            <h2 className={styles.title}>Conoce a Nuestros Expertos</h2>
            <p className={styles.description}>
                Nuestro equipo multidisciplinario combina experiencia académica con práctica de campo.
            </p>
            
            <div className={styles.grid}>
                {/* Miembro 1 */}
                <div className={styles.member}>
                    <div className={styles.image}>
                        <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                            alt="Dra. Elena Rodríguez" 
                        />
                    </div>
                    <h3 className={styles.name}>Dra. Elena Rodríguez</h3>
                    <p className={styles.role}>Directora de Arqueología</p>
                    <p className={styles.bio}>
                        Especialista en arqueología mesoamericana con más de 15 años de experiencia en campo.
                    </p>
                </div>

                {/* Miembro 2 */}
                <div className={styles.member}>
                    <div className={styles.image}>
                        <img 
                            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                            alt="Dr. Carlos Méndez" 
                        />
                    </div>
                    <h3 className={styles.name}>Dr. Carlos Méndez</h3>
                    <p className={styles.role}>Jefe de Restauración</p>
                    <p className={styles.bio}>
                        Experto en conservación de materiales arqueológicos y técnicas de restauración moderna.
                    </p>
                </div>

                {/* Miembro 3 */}
                <div className={styles.member}>
                    <div className={styles.image}>
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                            alt="Lic. Sofia Martínez" 
                        />
                    </div>
                    <h3 className={styles.name}>Lic. Sofia Martínez</h3>
                    <p className={styles.role}>Coordinadora de Proyectos</p>
                    <p className={styles.bio}>
                        Gestiona y coordina todos nuestros proyectos de investigación y excavación.
                    </p>
                </div>

                {/* Miembro 4 */}
                <div className={styles.member}>
                    <div className={styles.image}>
                        <img 
                            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                            alt="Mtro. Javier López" 
                        />
                    </div>
                    <h3 className={styles.name}>Mtro. Javier López</h3>
                    <p className={styles.role}>Especialista en Documentación</p>
                    <p className={styles.bio}>
                        Encargado de la documentación digital y preservación de hallazgos arqueológicos.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;