import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-office.jpg';

// Fallback gradient if image fails to load
const FALLBACK_BG = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';

export function Hero() {
  const [bgStyle, setBgStyle] = useState({
    backgroundImage: `url(${heroImage})`,
  });

  const handleImageError = () => {
    setBgStyle({ background: FALLBACK_BG });
  };

  // Preload to detect errors
  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onerror = handleImageError;
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero" aria-label="Inicio">
      {/* Background image */}
      <motion.div
        className="hero__bg"
        style={bgStyle}
        animate={{ scale: 1 }}
        initial={{ scale: 1.05 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      />

      {/* Dark overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Excelencia Legal desde 2009
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Defendemos sus{' '}
          <em>derechos</em>{' '}
          con dedicación y experiencia
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          
          Ofrecemos asesoramiento jurídico integral con un enfoque personalizado para cada cliente.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('contacto')}
            aria-label="Solicitar una consulta"
          >
            Consulta 
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollTo('areas')}
            aria-label="Ver nuestras áreas de práctica"
          >
            Nuestras Áreas
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <div className="hero__scroll-track">
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 3, height: 8, background: '#c9a84c', borderRadius: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
