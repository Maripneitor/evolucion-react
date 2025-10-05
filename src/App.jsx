import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // <-- Importa el componente
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyecto/:id" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton /> {/* <-- Añade el botón aquí */}
    </>
  );
}

export default App;