# Rediseño Editorial Landing Estudio Jurídico Polo — Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rediseñar la landing de Estudio Jurídico Polo con la Variante A "Editorial Legal" (aprobada en spec) manteniendo funcionalidad y alcance actuales, en la rama `redesign-editorial`.

**Architecture:** Reestilo y reestructuración de componentes existentes (React 18 + Vite + Framer Motion). El trabajo pesado es CSS (`src/styles/global.css`) + ajustes JSX en `src/sections/index.jsx`, `src/sections/Hero.jsx` y `src/App.jsx`. No se agregan dependencias. Los datos viven en `src/constants/data.js` (no se inventan contactos reales).

**Tech Stack:** React 18, Vite 4, Framer Motion 11, Google Fonts (Fraunces + Inter), CSS vanilla con custom properties.

## Global Constraints

- Rama obligatoria: `redesign-editorial`. Nunca tocar `main`.
- Paleta fija: marfil `#f5f3ee`, papel `#ffffff`, tinta `#141311`, latón/accento `#a8874a`, muted `#6f6a61`, líneas `rgba(20,19,17,0.14)` (sobre claro) / `rgba(245,243,238,0.18)` (sobre oscuro).
- Fuentes vía Google Fonts: **Fraunces** (display, incl. cursiva) + **Inter** (body). Reemplazar el `@import` de Cormorant Garamond/Jost en `global.css`.
- Sin dependencias npm nuevas. Sin framework de tests: la **verificación es `npm run build`** sin errores (los pasos "Test" de cada tarea se ejecutan como build check).
- Funcionalidad intacta: menú, scroll suave, contadores, validación/estados del form, skip-link, `aria-label`, focus-visible.
- No inventar datos de contacto/testimoniales reales. El texto del testimonial existente se mantiene tal cual (comentado hoy en `App.jsx`).
- Deploy sigue en GitHub Pages con base `/EstudioPolo/`; no romper `index.html` (SEO/JSON-LD/OG).
- Cada tarea termina con commit propio en la rama.

---

### Task 1: Tokens, fuentes y estilo base editorial

**Files:**
- Modify: `src/styles/global.css` (bloque superior: `@import` + `:root` + reset/base + utilidades de sección)
- Modify: `index.html` (opcional, solo si se quitan preconnects de Cormorant; verificar que `fonts.googleapis.com` siga conectado)

**Interfaces:**
- Produces: tokens `--ink/--cream/--brass/--font-display/--font-body`, clases `.section-label`, `.section-title`, `.section-subtitle`, `.section-header` con estética editorial. La Tarea 2 en adelante las consume.

- [ ] **Step 1: Reemplazar el import de fuentes en `global.css`**

Reemplazar la línea 6:
```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap');
```

- [ ] **Step 2: Reescribir los tokens del `:root`** (mantener los nombres de variables ya usados por los componentes: `--color-navy` referencia vieja se elimina; el código JSX no usa tokens de color en inline salvo `#c9a84c` en Hero que se corrige en Task 3)

```css
:root {
  --color-ink:        #141311;
  --color-cream:      #f5f3ee;
  --color-paper:      #ffffff;
  --color-brass:      #a8874a;
  --color-brass-dark: #8a6d32;
  --color-muted:      #6f6a61;
  --color-border:     rgba(20, 19, 17, 0.14);
  --color-border-dark:rgba(245, 243, 238, 0.18);
  --font-display: 'Fraunces', Georgia, serif;
  --font-body:    'Inter', system-ui, -apple-system, sans-serif;
  --radius: 0px;
  --transition-base: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
```

- [ ] **Step 3: Ajustar base del `body`** (color de fondo `--color-cream`, color de texto `--color-ink`). Dejar `html` con `scroll-behavior: smooth` y mantener `overflow-x: hidden`.

- [ ] **Step 4: Rediseñar utilidades de sección** (`.section-label`, `.section-title`, `.section-subtitle`, `.section-header`): eyebrow 12px uppercase `letter-spacing: 0.18em` color `--color-brass`; títulos Fraunces `clamp(2.1rem, 5vw, 4rem)`, sin los pistones decorativos actuales (`::before/::after`): sustituir por un subrayado fino (`border-bottom: 1px solid var(--color-border)` sobre un `<span>` interno) o eliminarlos. `.section-header` alineado a la izquierda con `text-align: left` y `max-width: 760px`.

- [ ] **Step 5: Build check**

Run (desde la raíz del repo): `npm run build`
Expected: builds ok.

- [ ] **Step 6: Commit**

```bash
git add src/styles/global.css index.html
git commit -m "style: tokens editoriales + fuentes Fraunces/Inter"
```

---

### Task 2: Navbar editorial

**Files:**
- Modify: `src/styles/global.css` (bloques `.navbar*`, `.hamburger*`, `.mobile-menu*`, `.btn-nav`)

**Interfaces:**
- Consumes: tokens de Task 1. Produces: clases estilizadas para el markup actual de `Navbar.jsx` (sin cambios de JSX).

- [ ] **Step 1: Navbar base** — sobre `--color-cream` con leve blur: `background: rgba(245,243,238,0.85); backdrop-filter: blur(10px)`. Transparente al inicio (`.navbar--transparent` con `background: transparent`) y con fondo + **línea inferior fina** cuando `.navbar--scrolled` (`box-shadow: none`, `border-bottom: 1px solid var(--color-border)`).

- [ ] **Step 2: Brand** — color `--color-ink`, Fraunces 600, `letter-spacing: 0.02em`. El `<span>POLO</span>` en `--color-brass`.

- [ ] **Step 3: Links desktop** — Inter 12px uppercase `letter-spacing: 0.14em`, color `--color-muted`; hover/activo `--color-ink` con subrayado fino animado (`background-image: linear-gradient(...) ; background-size: 0% 1px; background-position: 0 100%;` → 100%). `.btn-nav` como botón de borde: `border: 1px solid var(--color-ink); color: var(--color-ink); background: transparent; border-radius: 0`. Hover: fondo `--color-ink`, texto `--color-cream`.

- [ ] **Step 4: Mobile** — hamburger barras `--color-ink`. Menú overlay con fondo `--color-cream` y links Fraunces grandes `--color-ink`.

- [ ] **Step 5: Build check**

Run: `npm run build`
Expected: ok.

- [ ] **Step 6: Commit**

```bash
git add src/styles/global.css
git commit -m "style: navbar editorial (tinta + líneas finas)"
```

---

### Task 3: Hero editorial a dos columnas

**Files:**
- Modify: `src/sections/Hero.jsx` (restructura JSX, quitar `hero__overlay` oscuro)
- Modify: `src/styles/global.css` (bloque `.hero*`)

**Interfaces:**
- Produces: hero full-height asimétrico; clases `.hero`, `.hero__inner`, `.hero__copy`, `.hero__media`, `.hero__eyebrow`, `.hero__title`, `.hero__rule`, `.hero__subtitle`, `.hero__actions`, `.hero__scroll`. Reusa `btn btn-primary` / `btn btn-outline`.

- [ ] **Step 1: Marcado nuevo de `<Hero />`** — grid a 2 columnas (contenido + imagen), sin overlay:

```jsx
<section id="inicio" className="hero" aria-label="Inicio">
  <div className="hero__media" aria-hidden="true">
    <img src={heroImage} alt="" loading="eager" fetchPriority="high" />
  </div>
  <div className="hero__inner">
    <span className="hero__eyebrow">Estudio Jurídico &mdash; desde 2009</span>
    <h1 className="hero__title">
      El derecho,<br />
      con <em>claridad</em> y precisión
    </h1>
    <motion.span className="hero__rule" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }} aria-hidden="true" />
    <p className="hero__subtitle">
      Asesoramiento jurídico integral con enfoque personalizado, en CABA y Corrientes.
    </p>
    <div className="hero__actions">
      <button className="btn btn-primary" onClick={() => scrollTo('contacto')}>Consultar mi caso</button>
      <button className="btn btn-outline" onClick={() => scrollTo('areas')}>Ver áreas de práctica</button>
    </div>
  </div>
</section>
```
Mantener la lógica de preload/error con `FALLBACK_BG`. Quitar el `motion.div.hero__bg` con `backgroundImage` y en su lugar usar `<img>` real (mejor LCP). Quitar el `bgStyle` de estado. Mantener scroll indicator.

- [ ] **Step 2: CSS del hero**

```css
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding: 120px clamp(24px, 6vw, 110px) 80px; background: var(--color-cream); overflow: hidden; }
.hero__inner { position: relative; z-index: 2; max-width: 560px; }
.hero__eyebrow { font: 600 12px/1 var(--font-body); text-transform: uppercase; letter-spacing: 0.2em; color: var(--color-brass); display: block; margin-bottom: 28px; }
.hero__title { font-family: var(--font-display); font-weight: 500; font-size: clamp(3rem, 7.5vw, 6.5rem); line-height: 0.98; letter-spacing: -0.02em; color: var(--color-ink); }
.hero__title em { font-style: italic; font-weight: 400; color: var(--color-brass); }
.hero__rule { display: block; width: 120px; height: 1px; background: var(--color-ink); margin: 32px 0 26px; }
.hero__subtitle { color: var(--color-muted); font-size: 1.125rem; max-width: 460px; margin-bottom: 40px; }
.hero__media { position: absolute; top: 0; right: 0; height: 100%; width: 52%; }
.hero__media img { width: 100%; height: 100%; object-fit: cover; object-position: 65% 30%; }
```
(Ajustar `hero__media` a `width: 50%` con `clip-path` o recorte opcional solo si el contraste lo pide; mantener el `<em>` itálico.)

- [ ] **Step 3: Botones** — `.btn-primary`: fondo `--color-ink`, texto `--color-cream`, `border-radius: 0`, hover fondo `--color-brass`. `.btn-outline`: borde `1px solid var(--color-ink)`, texto `--color-ink`; hover fondo tinta/texto crema.

- [ ] **Step 4: Scroll indicator** — línea vertical fina en vez de la píldora actual: `.hero__scroll { ... }` con un track de 1px y barra interior `--color-brass`.

- [ ] **Step 5: Responsive** — bajo 1024px: `.hero__media` ocupa el fondo completo con `opacity: 0.14` (sello de agua), grid colapsa a una columna.

- [ ] **Step 6: Build check**

Run: `npm run build`
Expected: ok.

- [ ] **Step 7: Commit**

```bash
git add src/sections/Hero.jsx src/styles/global.css
git commit -m "feat: hero editorial a dos columnas sin overlay"
```

---

### Task 4: Stats como tira editorial

**Files:**
- Modify: `src/styles/global.css` (bloqu `.stats*`, `.stat*`)
- (Sin cambios en `sections/index.jsx` ni `Counter.jsx`)

**Interfaces:**
- Consumes: `.stat__number`/`.stat__label` existentes desde `Counter.jsx`. Produce tira horizontal con divisores.

- [ ] **Step 1:** `.stats` sobre `--color-ink` (bloque oscuro inmersivo), padding `clamp(80px, 12vh, 140px)`. `.stats__grid`: `grid-template-columns: repeat(4, 1fr)` con `gap: 0` y cada `.stat` con `border-left: 1px solid var(--color-border-dark)` (el primero sin borde). `.stat__number`: Fraunces `clamp(3rem, 6vw, 5rem)`, color `--color-cream`. `.stat__label`: Inter 12px uppercase `letter-spacing: 0.14em`, `--color-muted`→ `rgba(245,243,238,0.6)`.

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: ok.

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "style: stats como tira editorial en bloque oscuro"
```

---

### Task 5: About → índice numerado editorial

**Files:**
- Modify: `src/sections/index.jsx` (componente `About`)
- Modify: `src/styles/global.css` (bloque `.about*`)

**Interfaces:**
- Consumes: `ABOUT_CARDS`, `SvgIcon`, `getPaths`. Produce markup `.about__index` con filas `.about__row`.

- [ ] **Step 1: Restructurar `About`** — cambiar las tarjetas del grid por una lista-índice numerada:

```jsx
export function About() {
  return (
    <section id="nosotros" className="about" aria-labelledby="about-title">
      <div className="about__inner">
        <SectionHeader
          label="Por Qué Elegirnos"
          title={<span id="about-title">Compromiso con la excelencia jurídica</span>}
          subtitle="Más de 15 años de experiencia como referente legal en CABA y Corrientes, con atención personalizada."
        />
        <motion.div className="about__index" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          {ABOUT_CARDS.map((card, i) => (
            <motion.div key={card.id} className="about__row" variants={fadeInUp}>
              <span className="about__row-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className="about__row-icon" aria-hidden="true"><SvgIcon paths={getPaths(card)} size={26} color="#a8874a" /></div>
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
```

- [ ] **Step 2: CSS** — `.about` fondo `--color-paper`, padding `clamp(90px, 13vh, 150px) clamp(24px,6vw,110px)`. `.about__inner { max-width: 1160px; margin: 0 auto; }`. `.about__index { display: flex; flex-direction: column; }`. `.about__row { display: grid; grid-template-columns: 64px 56px 1fr; gap: clamp(16px,3vw,40px); align-items: start; padding: clamp(24px,4vw,44px) 0; border-top: 1px solid var(--color-border); }` (última fila con `border-bottom`). `.about__row-num { font-family: var(--font-display); font-style: italic; font-size: 1.25rem; color: var(--color-brass); }`. `.about__row-title { font-family: var(--font-display); font-size: clamp(1.5rem,3vw,2.2rem); font-weight: 500; margin-bottom: 10px; }`. Hover: título/línea a `--color-brass`. Icon dentro de `span` con `color: var(--color-brass)` (SvgIcon usa `color`).

- [ ] **Step 3: Build check**

Run: `npm run build`
Expected: ok.

- [ ] **Step 4: Commit**

```bash
git add src/sections/index.jsx src/styles/global.css
git commit -m "feat: about como índice numerado editorial"
```

---

### Task 6: Áreas → índice editorial interactivo (firma visual)

**Files:**
- Modify: `src/sections/index.jsx` (componente `Areas`)
- Modify: `src/styles/global.css` (bloque `.areas*`, `.area-card*`)

**Interfaces:**
- Consumes: `PRACTICE_AREAS`, `SvgIcon`, `useScrollTo`. Produce `.areas__list` con filas `.area-row` (7 items).

- [ ] **Step 1: Restructurar `Areas`** — lista índice con hover tipo "lleno de tinta":

```jsx
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
        <motion.ol className="areas__list" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          {PRACTICE_AREAS.map((area, i) => (
            <motion.li key={area.id} className="area-row" variants={fadeInUp}>
              <button
                type="button"
                className="area-row__btn"
                onClick={() => scrollTo('contacto')}
                aria-label={`Consultar sobre ${area.title}`}
              >
                <span className="area-row__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="area-row__icon" aria-hidden="true"><SvgIcon paths={getPaths(area)} size={24} color="currentColor" /></span>
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
```

- [ ] **Step 2: CSS** — `.areas` fondo `--color-cream`. `.areas__inner { max-width: 1160px; margin: 0 auto; padding: clamp(90px,13vh,150px) clamp(24px,6vw,110px); }`. `.areas__list { list-style: none; counter-reset: area; }`. `.area-row { border-top: 1px solid var(--color-border); }` últ. con borde inferior. `.area-row__btn { display: grid; grid-template-columns: 56px 48px 1fr auto 44px; gap: clamp(14px,3vw,36px); align-items: center; width: 100%; padding: clamp(22px,4vw,38px) 8px; background: none; border: none; cursor: pointer; text-align: left; color: var(--color-ink); transition: background .35s ease, color .35s ease, padding .35s ease; }`. `.area-row__num { font-family: var(--font-display); font-style: italic; color: var(--color-brass); opacity: .8; }`. `.area-row__title { font-family: var(--font-display); font-size: clamp(1.4rem,2.6vw,2.4rem); font-weight: 500; }`. `.area-row__desc { color: var(--color-muted); font-size: .95rem; max-width: 420px; opacity: 0; max-height: 0; overflow: hidden; transition: opacity .3s, max-height .35s, margin .3s; }`. `.area-row__arrow { transition: transform .3s; }`. Hover/focus: `.area-row:hover .area-row__btn, .area-row__btn:focus-visible { background: var(--color-ink); color: var(--color-cream); padding-left: 28px; }` — `.area-row__desc` pasa a `opacity: 1; max-height: 80px; margin-top: 6px`, icono/numero latón. En mobile (≤768px) la columna desc se muestra siempre (`opacity:1; max-height:none`) para no perder contenido por hover.

- [ ] **Step 3: Build check**

Run: `npm run build`
Expected: ok.

- [ ] **Step 4: Commit**

```bash
git add src/sections/index.jsx src/styles/global.css
git commit -m "feat: areas como índice editorial interactivo"
```

---

### Task 7: Testimonial reactivado en bloque oscuro

**Files:**
- Modify: `src/App.jsx` (descomentar `<Testimonial />`)
- Modify: `src/styles/global.css` (bloque `.testimonial*`)

**Interfaces:**
- Consumes: componente `Testimonial` existente (está en `sections/index.jsx`, texto fijo). Produce bloque oscuro estilizado.

- [ ] **Step 1:** En `App.jsx`, descomentar `<Testimonial />` (dejar debajo de `<Areas />`).

- [ ] **Step 2: CSS** — `.testimonial { background: var(--color-ink); padding: clamp(90px,13vh,150px) clamp(24px,6vw,110px); }`. `.testimonial__inner { max-width: 900px; margin: 0 auto; text-align: center; }`. `.testimonial__mark { font-family: var(--font-display); font-size: clamp(4rem,8vw,7rem); color: var(--color-brass); line-height: .6; }`. `.testimonial__quote { font-family: var(--font-display); font-style: italic; font-size: clamp(1.5rem,3.4vw,2.3rem); color: var(--color-cream); line-height: 1.45; }`. `.testimonial__author { color: rgba(245,243,238,.6); font-size: .95rem; }` y `strong` en `--color-brass`.

- [ ] **Step 3: Build check**

Run: `npm run build`
Expected: ok.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx src/styles/global.css
git commit -m "feat: reactiva testimonial en bloque oscuro"
```

---

### Task 8: Contacto + formulario con inputs underline

**Files:**
- Modify: `src/styles/global.css` (bloque `.contact*`, `.form*`)
- Modify: `src/components/ContactForm.jsx` (solo ajustes de clase si hacen falta; mantener toda la lógica)

**Interfaces:**
- Consumes: `ContactForm` (lógica intacta), `CONTACT_INFO`. Produce formulario con inputs de línea inferior.

- [ ] **Step 1: Contact layout** — `.contact { background: var(--color-cream); padding: clamp(90px,13vh,150px) clamp(24px,6vw,110px); }`. `.contact__grid { max-width: 1160px; margin: 0 auto; grid-template-columns: 1fr 1.15fr; gap: clamp(40px,6vw,90px); }`. Íconos `.contact__item-icon` con `color: var(--color-brass)`, sin fondo (`background: none`), `border-radius: 0`. `.contact__info-title` Fraunces `clamp(1.8rem,3.4vw,2.6rem)`.

- [ ] **Step 2: Form refinado** — `.form { background: transparent; padding: 0; box-shadow: none; }`. Inputs: `background: transparent; border: 1px solid transparent; border-bottom: 1px solid var(--color-border); border-radius: 0; padding: 14px 4px;` focus → `border-bottom-color: var(--color-brass); box-shadow: none`. Placeholder `--color-muted`. Labels Inter 600 12px uppercase `letter-spacing: .1em`, `--color-ink`. Botón `.btn-submit { background: var(--color-ink); border-radius: 0; }` hover `--color-brass`. Errores/estados conservan clases existentes.

- [ ] **Step 3: Build check**

Run: `npm run build`
Expected: ok.

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css src/components/ContactForm.jsx
git commit -m "style: contacto y form con inputs underline"
```

---

### Task 9: Footer oscuro refinado

**Files:**
- Modify: `src/styles/global.css` (bloque `.footer*`)
- (Sin cambios JSX)

**Interfaces:**
- Consumes: markup actual de `Footer` en `sections/index.jsx`.

- [ ] **Step 1:** `.footer { background: var(--color-ink); color: rgba(245,243,238,.65); }`. `.footer__grid { max-width: 1160px; margin: 0 auto; padding: clamp(70px,10vh,110px) 0 60px; border-top: 1px solid var(--color-border-dark); }`. `.footer__brand { font-family: var(--font-display); font-size: 1.7rem; color: var(--color-cream); }` con `span` latón. `.footer__col-title { font-family: var(--font-display); color: var(--color-cream); text-transform: uppercase; letter-spacing: .06em; font-size: .95rem; }`. Links `rgba(245,243,238,.55)` hover `--color-brass`. `.footer__bottom` con `border-top: 1px solid var(--color-border-dark)`, íconos sociales borde `var(--color-border-dark)`, hover latón.

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: ok.

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "style: footer oscuro refinado"
```

---

### Task 10: Responsive, accesibilidad y reduced-motion

**Files:**
- Modify: `src/styles/global.css` (media queries + ajustes)

**Interfaces:**
- Consumes: todas las secciones. Produce consistencia mobile y a11y.

- [ ] **Step 1:** Revisar/reescribir el bloque `@media` final: breakpoints 1024, 768, 480. En 1024: hero media al 45%; grid areas-rows colapsan desc. En 768: hero colapsa a 1 columna (media como watermark), stats 2×2, filas _About/Areas_ apilan (`grid-template-columns: 1fr` con num+icono inline), contact 1 columna. En 480: stats mantienen divisores verticales.

- [ ] **Step 2: Focus visible** — asegurar `:focus-visible` con `outline: 2px solid var(--color-brass); outline-offset: 3px` en links, botones, inputs y `area-row__btn`.

- [ ] **Step 3: Reduced motion** — dentro de `@media (prefers-reduced-motion: reduce)`: `*, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; }`. Los reveals de Framer Motion podrían quedar; es aceptable en esta versión.

- [ ] **Step 4: Build check**

Run: `npm run build`
Expected: ok.

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css
git commit -m "style: responsive, focus-visible y reduced-motion"
```

---

### Task 11: Verificación integral final

**Files:** (ninguno; solo verificación)

- [ ] **Step 1:** `git log --oneline (de main..HEAD)` mostrar las 10 tareas. Confirmar que `git diff main --stat` toca solo: `src/styles/global.css`, `src/sections/index.jsx`, `src/sections/Hero.jsx`, `src/App.jsx`, `src/components/ContactForm.jsx` (si acaso) + doc/plan.

- [ ] **Step 2:** `npm run build` pasa. `npm run dev` + revisión visual manual de las secciones (hero, stats, about, areas, testimonial, contacto, footer) en desktop y mobile.

- [ ] **Step 3:** Verificar que `main` quedó intacto: `git rev-parse main` sin cambios de estilo (solo el doc de diseño si se commiteó aparte, no aquí).

---

## Self-Review (instrumentado antes de ejecutar)

- Cobertura del spec: todas las secciones del §4 del design doc tienen tarea (navbar T2, hero T3, stats T4, about T5, areas T6, testimonial T7, contacto/form T8, footer T9, responsive/a11y T10). Sin gaps.
- Sin placeholders: cada tarea trae valores de tokens, selectores y (donde importa) markup JSX.
- Consistencia: mismo nombre de tokens en todas las tareas; `grid-template-columns` de `About`/`Areas` respetan el orden num → icono → contenido → flecha; `area-row__btn` es un `<button>` accesible que llama a `scrollTo('contacto')`.