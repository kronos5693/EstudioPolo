import { useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-office.jpg';

// Fallback gradient if image fails to load
const FALLBACK_BG = 'linear-gradient(135deg, #141311 0%, #2a251c 100%)';

export function Hero() {
  const [mediaFailed, setMediaFailed] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero" aria-label="Inicio">
      {/* Editorial media — photo in an intentional crop */}
      <div
        className={`hero__media ${mediaFailed ? 'hero__media--fallback' : ''}`}
        aria-hidden="true"
      >
        <img
          src={heroImage}
          alt=""
          loading="eager"
          fetchPriority="high"
          onError={() => setMediaFailed(true)}
        />
      </div>

      {/* Content */}
      <div className="hero__inner">
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Estudio Jurídico — desde 2009
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          El derecho,<br />con <em>claridad</em> y precisión
        </motion.h1>

        <motion.span
          className="hero__rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
          aria-hidden="true"
        />

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Asesoramiento jurídico integral con enfoque personalizado, en CABA y Corrientes.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
        >
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('contacto')}
            aria-label="Solicitar una consulta"
          >
            Consultar mi caso
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollTo('areas')}
            aria-label="Ver nuestras áreas de práctica"
          >
            Ver áreas de práctica
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
            className="hero__scroll-bar"
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}