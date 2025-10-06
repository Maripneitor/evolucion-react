import React, { useState } from 'react';

// Un hook simple para manejar el estado del formulario
const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const resetForm = () => {
    setValues(initialState);
  };
  return [values, handleInputChange, resetForm];
};

function ContactSection() {
  const [formData, handleInputChange, resetForm] = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación simple
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        ...status,
        info: { error: true, msg: 'Por favor, completa todos los campos.' }
      });
      return;
    }

    setStatus({ ...status, submitting: true, msg: null });

    // Simulación de envío a un servidor
    setTimeout(() => {
      // Aquí conectarías con un servicio de email como EmailJS, o tu propio backend.
      // Para la simulación, asumimos que siempre funciona.
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: '¡Mensaje enviado con éxito!' },
      });
      resetForm();

      // Ocultar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setStatus({ ...status, info: { error: false, msg: null } });
      }, 5000);

    }, 2000); // Simulamos 2 segundos de espera
  };

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <h2 className="contact__title">¿Necesita asesoramiento especializado?</h2>
            <p className="contact__description">
              Nuestro equipo de expertos está listo para ayudarle. Contáctenos para una consulta gratuita.
            </p>
            {/* ... (resto de la info de contacto no cambia) ... */}
            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__icon">📧</div>
                <div className="contact__text">
                  <h3>Correo electrónico</h3>
                  <p>info@evolucion.com</p>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__icon">📞</div>
                <div className="contact__text">
                  <h3>Teléfono</h3>
                  <p>+34 912 345 678</p>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__icon">📍</div>
                <div className="contact__text">
                  <h3>Dirección</h3>
                  <p>Calle Arqueología, 23<br />28001 Madrid, España</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            <form className="contact__form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form__group">
                <label htmlFor="name" className="form__label">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form__input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="email" className="form__label">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form__input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="subject" className="form__label">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form__input"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="message" className="form__label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  className="form__textarea"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              {/* Mensajes de estado */}
              {status.info.msg && (
                <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
                  {status.info.msg}
                </div>
              )}

              <button type="submit" className="btn btn--primary form__submit" disabled={status.submitting}>
                {status.submitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;