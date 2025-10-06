import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

function NotFoundPage() {
  return (
    <AnimatedPage>
      <section style={{ textAlign: 'center', padding: '5rem 1rem' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1rem' }}>404</h1>
          <h2>Página No Encontrada</h2>
          <p style={{ maxWidth: '500px', margin: '1rem auto' }}>
            ¡Ups! Parece que esta página es una ruina perdida en el tiempo.
          </p>
          <Link to="/" className="btn btn--primary">
            Volver a la Página Principal
          </Link>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default NotFoundPage;