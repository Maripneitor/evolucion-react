// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage'; // Debes crear esta página
import ProjectDetailPage from './pages/ProjectDetailPage'; // Debes crear esta página

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyecto/:id" element={<ProjectDetailPage />} />
          {/* El :id es un parámetro dinámico para cada proyecto */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;