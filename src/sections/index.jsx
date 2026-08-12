import { motion } from 'framer-motion';
import { AnimatedSection, SvgIcon, fadeInUp, staggerContainer } from '../components/AnimatedSection';
import { Counter } from '../components/Counter';
import { ContactForm } from '../components/ContactForm';
import { ABOUT_CARDS, STATS, PRACTICE_AREAS, CONTACT_INFO, FOOTER_COLS } from '../constants/data';
import { useScrollTo } from '../hooks';

// ─── Helper: normalise path arrays ────────────────────────────
function getPaths(card) {
  if (card.iconPaths) return card.iconPaths;
  if (card.iconPath)  return [{ d: card.iconPath }];
  return [];
}

// ─── Section header ───────────────────────────────────────────
function SectionHeader({ label, title, subtitle }) {
  return (
    <AnimatedSection>
      <div className="section-header">
        <span className="section-label">{label}</span>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
    </AnimatedSection>
  );
}

// ════════════════════════════════════════════════════════════════
// About
// ════════════════════════════════════════════════════════════════
export function About() {
  return (
    <section id="nosotros" className="about" aria-labelledby="about-title">
      <div className="about__inner">
        <SectionHeader
          label="Por Qué Elegirnos"
          title={<span id="about-title">Compromiso con la excelencia jurídica</span>}
          subtitle="Más de 15 años de experiencia nos respaldan como referente legal en CABA y Corrientes, con atención personalizada."
        />

        <motion.div
          className="about__index"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {ABOUT_CARDS.map((card, i) => (
            <motion.div key={card.id} className="about__row" variants={fadeInUp}>
              <span className="about__row-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="about__row-icon" aria-hidden="true">
                <SvgIcon paths={getPaths(card)} size={26} color="#a8874a" />
              </div>
              <div>
                <h3 className="about__row-title">{card.title}</h3>
                <p className="about__row-desc">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// Stats
// ════════════════════════════════════════════════════════════════
export function Stats() {
  return (
    <div className="stats" aria-label="Estadísticas del estudio">
      <div className="stats__grid">
        {STATS.map((s) => (
          <AnimatedSection key={s.label}>
            <Counter target={s.target} suffix={s.suffix} label={s.label} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// Practice Areas
// ════════════════════════════════════════════════════════════════
export function Areas() {
  const scrollTo = useScrollTo();

  return (
    <section id="areas" className="areas" aria-labelledby="areas-title">
      <div className="areas__inner">
        <SectionHeader
          label="Áreas de Práctica"
          title={<span id="areas-title">Áreas de práctica</span>}
          subtitle="Asesoramiento especializado que se adapta a la necesidad concreta de cada cliente."
        />

        <motion.ol
          className="areas__list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PRACTICE_AREAS.map((area, i) => (
            <motion.li key={area.id} className="area-row" variants={fadeInUp}>
              <button
                type="button"
                className="area-row__btn"
                onClick={() => scrollTo('contacto')}
                aria-label={`Consultar sobre ${area.title}`}
              >
                <span className="area-row__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="area-row__icon" aria-hidden="true">
                  <SvgIcon paths={getPaths(area)} size={24} color="currentColor" />
                </span>
                <span className="area-row__title">{area.title}</span>
                <span className="area-row__desc">{area.desc}</span>
                <span className="area-row__arrow" aria-hidden="true">&rarr;</span>
              </button>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// Testimonial
// ════════════════════════════════════════════════════════════════
export function Testimonial() {
  return (
    <section className="testimonial" aria-label="Testimonios de clientes">
      <AnimatedSection>
        <div className="testimonial__inner">
          <div className="testimonial__mark" aria-hidden="true">"</div>
          <blockquote className="testimonial__quote">
            El Estudio Polo manejó mi caso con una profesionalidad excepcional.
            Su dedicación y conocimiento marcaron la diferencia en un momento crítico para mi problema.
          </blockquote>
          <footer className="testimonial__author">
            <strong>María Elena Rodríguez</strong> — CEO, Grupo Inversiones del Sur
          </footer>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// Contact
// ════════════════════════════════════════════════════════════════
export function Contact() {
  return (
    <section id="contacto" className="contact" aria-labelledby="contact-title">
      <SectionHeader
        label="Contacto"
        title={<span id="contact-title">Hablemos de su caso</span>}
        subtitle="Agende una consulta  y descubra cómo podemos ayudarle a resolver su situación legal."
      />

      <div className="contact__grid">
        {/* Info column */}
        <AnimatedSection>
          <h3 className="contact__info-title">Estamos aquí para ayudarle</h3>
          <p className="contact__info-desc">
            Nuestro equipo de abogados está listo para escuchar su caso y ofrecerle
            la mejor estrategia legal. No dude en contactarnos.
          </p>

          {CONTACT_INFO.map((item) => (
            <div key={item.id} className="contact__item">
              <div className="contact__item-icon" aria-hidden="true">
                <SvgIcon paths={getPaths(item)} size={22} />
              </div>
              <div>
                <h4 className="contact__item-label">{item.label}</h4>
                <p className="contact__item-value">{item.value}</p>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* Form column */}
        <AnimatedSection delay={0.2}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════
// Footer
// ════════════════════════════════════════════════════════════════
const SOCIAL_ICONS = [
  { label: 'Facebook', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'LinkedIn', paths: [
    { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' },
    { d: 'M2 9h4v12H2z' },
    { d: 'M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', fill: 'rgba(255,255,255,0.7)' },
  ]},
  { label: 'Twitter / X', d: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
];

export function Footer() {
  return (
    <footer className="footer" aria-label="Pie de página">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand col */}
          <div>
            <div className="footer__brand">
              ESTUDIO JURIDICO <span>POLO</span>
            </div>
            <p className="footer__desc">
              Con mas 15 años de experiencia, comprometidos con la excelencia
              jurídica y la defensa de los derechos de nuestros clientes.
            </p>
          </div>

          {/* Nav cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__list" role="list">
                {col.items.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={`#${href}`}
                      onClick={(e) => {
                        if (!href.startsWith('#')) {
                          e.preventDefault();
                          document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p>© Estudio Polo. Todos los derechos reservados.</p>

          <nav className="footer__social" aria-label="Redes sociales">
            {SOCIAL_ICONS.map(({ label, d, paths }) => (
              <a
                key={label}
                href="#"
                className="footer__social-link"
                aria-label={label}
                onClick={(e) => e.preventDefault()}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="rgba(255,255,255,0.7)"
                  stroke="none"
                >
                  {paths
                    ? paths.map((p, i) => <path key={i} d={p.d} fill={p.fill ?? 'rgba(255,255,255,0.7)'} />)
                    : <path d={d} />
                  }
                </svg>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
