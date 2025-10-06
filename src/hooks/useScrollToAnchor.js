import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    // Si la URL tiene un hash (ej: #nosotros)
    if (location.hash) {
      // Damos un pequeño respiro para que el componente se renderice
      setTimeout(() => {
        const targetId = location.hash.substring(1); // Quita el '#'
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const header = document.querySelector('.header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = targetElement.offsetTop - headerHeight - 20; // 20px de margen extra

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      }, 100); // 100ms es usualmente suficiente
    }
  }, [location]); // Este efecto se ejecuta cada vez que la URL cambia
}