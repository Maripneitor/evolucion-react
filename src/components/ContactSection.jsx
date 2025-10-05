import React from 'react';

function ContactSection() {
  // Manejador para el envío del formulario (puedes agregar la lógica de envío aquí)
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene que la página se recargue
    alert('Formulario enviado (funcionalidad de envío no implementada).');
    // Aquí conectarías con un servicio de email como EmailJS, o tu propio backend.
  };

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact__grid">
          {/* Columna izquierda: Información de contacto */}
          <div className="contact__info">
            <h2 className="contact__title">¿Necesita asesoramiento especializado?</h2>
            <p className="contact__description">Nuestro equipo de expertos está listo para ayudarle con sus proyectos de arqueología y restauración. Contáctenos para una consulta gratuita.</p>
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

          {/* Columna derecha: Formulario de contacto */}
          <div className="contact__form-container">
            <form className="contact__form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form__group">
                <label htmlFor="name" className="form__label">Nombre completo</label>
                <input type="text" id="name" name="name" className="form__input" required />
              </div>
              <div className="form__group">
                <label htmlFor="email" className="form__label">Correo electrónico</label>
                <input type="email" id="email" name="email" className="form__input" required />
              </div>
              <div className="form__group">
                <label htmlFor="subject" className="form__label">Asunto</label>
                <input type="text" id="subject" name="subject" className="form__input" required />
              </div>
              <div className="form__group">
                <label htmlFor="message" className="form__label">Mensaje</label>
                <textarea id="message" name="message" className="form__textarea" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn--primary form__submit">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;