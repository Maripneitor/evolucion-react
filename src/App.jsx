import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useScrollToAnchor } from './hooks/useScrollToAnchor'; // <-- Importa el hook

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage'; // <-- Importa la nueva página
import AnimatedPage from './components/AnimatedPage';
import AddProjectPage from './pages/AddProjectPage'

function App() {
  const location = useLocation();
  useScrollToAnchor(); // <-- Simplemente llama al hook aquí

  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <AnimatedPage><HomePage /></AnimatedPage>
            } />
            <Route path="/proyectos" element={
              <AnimatedPage><ProjectsPage /></AnimatedPage>
            } />
            <Route path="/proyecto/:id" element={
              <AnimatedPage><ProjectDetailPage /></AnimatedPage>
            } />
            <Route path="*" element={
              <AnimatedPage><NotFoundPage /></AnimatedPage>
            } /> {/* <-- Añade la ruta 404 */}
            <Route path="/admin/add-project" element={<AnimatedPage><AddProjectPage /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;