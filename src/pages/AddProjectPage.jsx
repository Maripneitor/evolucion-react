import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/proyectosData'; // Importamos los datos para simular la adición
import './AddProjectPage.css'; // Crearemos este archivo CSS a continuación

function AddProjectPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: 'Arqueología', // Valor por defecto
    description: '',
    fullDescription: '',
    year: new Date().getFullYear(),
    location: '',
    duration: '',
    client: '',
    image: '',
  });
  const [imagePreview, setImagePreview] = useState('');
  const [status, setStatus] = useState({ error: false, msg: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple
    if (!formData.title || !formData.description || !formData.image) {
      setStatus({ error: true, msg: 'Título, descripción e imagen principal son obligatorios.' });
      return;
    }
    
    // Simulación de adición de proyecto
    const newProject = {
      id: projectsData.length + 1, // Simple ID generation
      ...formData,
      // En un caso real, aquí subirías las imágenes a un servidor y obtendrías las URLs
      beforeImage: formData.image, // Usamos la misma imagen para la simulación
      afterImage: formData.image,
      gallery: [], // La galería la podríamos implementar en un segundo paso
    };

    // **Importante:** Esto solo modifica el array en memoria.
    // Al recargar la página, los cambios se perderán.
    // En una app real, aquí harías una petición POST a tu API.
    projectsData.unshift(newProject); // Añade el nuevo proyecto al inicio de la lista

    setStatus({ error: false, msg: '¡Proyecto añadido con éxito! Redirigiendo...' });

    setTimeout(() => {
      navigate('/proyectos');
    }, 2000);
  };

  return (
    <div className="add-project-page">
      <div className="container">
        <h1 className="add-project-title">Añadir Nuevo Proyecto</h1>
        <form onSubmit={handleSubmit} className="add-project-form">
          <div className="form-grid">
            {/* Columna Izquierda */}
            <div className="form-column">
              <div className="form__group">
                <label htmlFor="title">Título del Proyecto</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
              </div>

              <div className="form__group">
                <label htmlFor="category">Categoría</label>
                <select id="category" name="category" value={formData.category} onChange={handleInputChange}>
                  <option value="Arqueología">Arqueología</option>
                  <option value="Restauración">Restauración</option>
                  <option value="Investigación">Investigación</option>
                </select>
              </div>
              
              <div className="form__group">
                <label htmlFor="description">Descripción Corta (para la tarjeta)</label>
                <textarea id="description" name="description" rows="3" value={formData.description} onChange={handleInputChange}></textarea>
              </div>
              
              <div className="form__group">
                <label htmlFor="fullDescription">Descripción Completa</label>
                <textarea id="fullDescription" name="fullDescription" rows="6" value={formData.fullDescription} onChange={handleInputChange}></textarea>
              </div>
            </div>

            {/* Columna Derecha */}
            <div className="form-column">
              <div className="form-row">
                <div className="form__group">
                  <label htmlFor="year">Año</label>
                  <input type="number" id="year" name="year" value={formData.year} onChange={handleInputChange} />
                </div>
                <div className="form__group">
                  <label htmlFor="location">Ubicación</label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form__group">
                  <label htmlFor="duration">Duración</label>
                  <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} />
                </div>
                <div className="form__group">
                  <label htmlFor="client">Cliente</label>
                  <input type="text" id="client" name="client" value={formData.client} onChange={handleInputChange} />
                </div>
              </div>

              <div className="form__group">
                <label htmlFor="image">Imagen Principal</label>
                <input type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" />
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Vista previa" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {status.msg && (
            <div className={`form-status ${status.error ? 'error' : 'success'}`}>
              {status.msg}
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="btn btn--primary">Añadir Proyecto</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProjectPage;