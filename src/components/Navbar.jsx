import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrolled, useScrollTo } from '../hooks';
import { NAV_LINKS } from '../constants/data';

export function Navbar() {
  const scrolled  = useScrolled(80);
  const scrollTo  = useScrollTo();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollTo(id, scrolled ? 70 : 0);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="navbar__inner">
          {/* Brand */}
          <button
            className="navbar__brand"
            onClick={() => handleNav('inicio')}
            aria-label="Ir al inicio — ESTUDIO JURIDICO POLO"
          >
          ESTUDIO JURIDICO <span>POLO</span>

          </button>

          {/* Desktop links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className="navbar__link"
                  onClick={() => handleNav(id)}
                  aria-label={`Ir a la sección ${label}`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                className="btn btn-nav"
                onClick={() => handleNav('contacto')}
              >
                Contactar
              </button>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`icon-btn hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            {[...NAV_LINKS, { id: 'contacto', label: 'Contacto' }].map(({ id, label }) => (
              <motion.button
                key={id}
                className="mobile-menu__link"
                onClick={() => handleNav(id)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
