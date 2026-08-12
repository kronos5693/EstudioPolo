# Rediseño Landing Estudio Jurídico Polo — Documento de Diseño

Fecha: 2026-08-12
Rama: `redesign-editorial` (variante A elegida). El original vive intacto en `main`.

## 1. Contexto

Landing one-page de **Estudio Jurídico Polo** (React 18 + Vite + Framer Motion),
deployada en GitHub Pages (`kronos5693.github.io/EstudioPolo`). Estudio argentino
(~15 años de experiencia) que opera en **CABA y Corrientes**. Áreas de práctica:
inmobiliario, laboral, penal, familiar, tributario, derecho público y diligencias/
gestoría (`Cédula Ley 22172`).

Diseño actual en `main`: estética clásica "bufete" — azul marino + dorado,
serif Cormorant Garamond, hero full-screen con foto de oficina, grillas de cards
centrados. Ya existía una rama no mergeada `design-modern-v2` (glassmorphism).

## 2. Investigación de rubro / competencia (síntesis)

Tendencias 2025–2026 en webs de estudios jurídicos (PaperStreet, Attorney at Work,
SublimeStart, Dribbble):

1. Layouts **editoriales**: grillas asimétricas, márgenes amplios, jerarquía curatorial.
2. **Tipografía oversized y confidente** como elemento visual dominante.
3. **Paletas reducidas**: neutros + un único acento fuerte, usado con moderación.
4. **Motion sofisticado y sutil**: reveals al scroll, micro-animaciones, sin flashiness.
5. **Bento grids / sistemas modulares de cards** para presentar mucha información.
6. **Fotografía real e intencional** (nada de stock genérico de mazos y columnas).
7. **Líneas, bordes y divisores** como elementos de diseño (estructura sin peso visual).
8. **Secciones full-height inmersivas** que alternan bloques luz/oscuridad.
9. **Trust-first / minimalismo**: blanco generoso, CTAs claros, mobile-first.

## 3. Variantes propuestas (guardadas para uso futuro)

### Variante A — "Editorial Legal" (ELECCIÓN ACTUAL)
Estética de estudio de elite. Lectura de revista / editorial de moda aplicada al
derecho. Clara, sobria, tipográficamente potente. Se describe completa en §4.

### Variante B — "Dark Modern / Bento"
Fondo grafito profundo (`~#0a0a0c`), acento eléctrico (ámbar/lime o azul), efectos
glassmorphism/blur, grillas **bento** modulares, orbes de gradiente, glow sutil.
Destacar: sensación "tech / contemporáneo", útil si el público objetivo valora
modernidad extrema o si se quiere diferenciar con una interfaz oscura completa.

### Variante C — "Trust-first Claro y Humano"
Blanco puro, azul petróleo / verde profundo suave como acento, fotografía cálida
de personas, espaciado amplio, testimoniales visibles, botón flotante de WhatsApp,
CTAs de alta conversión, orientado al cliente local de CABA/Corrientes
(no-técnico, prima la confianza y la cercanía).

---

## 4. Diseño — Variante A "Editorial Legal"

### 4.1 Identidad visual
- Sensación: **calmado, confiable, editorial, distinguido**. "Un estudio que no
  necesita gritar: la tipografía habla por él".
- Referencia: revistas editoriales de alta gama, firmas legales premium 2026.

### 4.2 Paleta
- Base clara: `#f5f3ee` (marfil/piedra cálida).
- Superficie: `#ffffff`.
- Tinta (texto y fondos oscuros): `#141311` (negro cálido).
- Muted: `#6f6a61`.
- Acento único (uso estratégico y moderado): **latón/brass** `#a8874a`
  (fina evolución del dorado actual, menos "funcionario", más curado).
- Divisores: `rgba(20,19,17,0.12)`.
- Bloque oscuro de contraste: `#141311` con texto marfil.

### 4.3 Tipografía
- Display / títulos editoriales: **Fraunces** (serif óptico moderno, ejes variable)
  con una talla oversized (clamp ~ `3.5rem → 8.5rem` en hero).
- Body / UI: **Inter** (limpia, legible, neutral).
- Eyebrow / etiquetas: Inter 12px, `uppercase`, `letter-spacing: 0.18em`.
- ítems con numeración editorial (01.–07.) en Fraunces italic.

### 4.4 Estructura general de página
- Secciones **full-height inmersivas** alternando bloques claro/oscuro.
- Líneas finas horizontales (`1px`) como divisores estructurales entre bloques.
- Márgenes generosos (container ~ 1280–1440px), mucho aire.
- Transiciones suaves entre secciones.

### 4.5 Sección por sección

**Navbar**
- Fija; transparente sobre el hero claro. Al hacer scroll: fondo `#f5f3ee`
  translúcida + blur + línea inferior fina. Links tipográficos sencillos
  (Inter, mayúsculas) y botón *Contáctenos* en tinta con acento al hover.
- Mobile: hamburger + overlay con grandes títulos editoriales.

**Hero (editorial, NO foto full-screen)**
- Layout asimétrico en **dos columnas**: izquierda = contenido; derecha = imagen
  de oficina (foto real existente `hero-office.jpg`) en **crop intencional**,
  offset con `object-position`, marco fino o leve solapamiento.
- Eyebrow: `Estudio Jurídico — desde 2009`.
- H1 oversized en Fraunces: p. ej. "El derecho, con claridad" /
  "Justicia con precisión milimétrica".
- Subtítulo corto + 2 CTAs (primario tinta, secundario bordes).
- Detalle: línea fina debajo del H1 que se anima al cargar (scaleX).
- Scroll indicator minimal (línea punteada / letra).

**Stats**
- Tira horizontal editorial: números grandes Fraunces separados por finas líneas
  verticales (`border-left: 1px`), sin cards. Contadores animados existentes.

**Nosotros (About — ¿Por qué elegirnos?)**
- Encabezado editorial: eyebrow + título oversized + párrafo.
- Los 3 valores pasan de *cards centrados* a una **lista índice numerada**
  (como sumario de revista): número Fraunces italic + título + descripción,
  cada ítem separado por línea fina, hover con acento latón.

**Áreas de Práctica (7)**
- Propuesta **índice editorial interactivo**: lista de 7 filas numeradas
  (01. Inmobiliario, 02. Laboral, …) con título grande, descripción corta y
  flecha; al hover la fila se rellena de tinta y el texto pasa a marfil
  (efecto tipo "acordeón/índice"). Compacta y sofisticada en vez de grilla de cards.
- Alternativa mobile: filas apiladas simples.

**Testimonial**
- Se reactiva el bloque (está comentado en `main`). Fondo oscuro `#141311`,
  comillas grandes Fraunces, cita italica + autor. Si el cliente no dispone del
  testimonial real, queda como bloque discreto y editable en `constants/data.js`.

**Contacto**
- Split: izquierda info de contacto (íconos lineales finos) / derecha formulario.
- Formulario rediseñado: **inputs con línea inferior** (underline o "filled"
  minimal), sin cajas sombreadas; focus con acento latón. Validaciones y estados
  de éxito/error se conservan intactos.
- WhatsApp / teléfono destacados como path de conversión.

**Footer**
- Bloque oscuro (tinta) con líneas finas; conserva columnas actuales, refinadas
  tipográficamente. Datos de contacto del template se actualizarán solo si el
  cliente aporta los reales (no inventar).

### 4.6 Motion (Framer Motion)
- Reveals suaves de sección (fade + translate Y 20–40px, `once: true`).
- Animación del divider del hero (scaleX).
- Subtle micro-interacciones: flechas, números, líneas. Sin flashiness.
- Se reutilizan `AnimatedSection`, `fadeInUp`, `staggerContainer` existentes.

### 4.7 Responsive
- Mobile-first. Tipografía escala con `clamp`.
- Hero pasa a una columna (imagen debajo/arriba del texto o como fondo tenue).
- Índice de áreas y stats se apilan.
- Breakpoints 1024 / 768 / 480 (mismo mapa del actual).

### 4.8 Accesibilidad / SEO / técnico
- Mantener: skip-link, `aria-label`, focus-visible, `aria-invalid` del form.
- Contraste aceptable entre latón/marfil/tinta.
- No romper `index.html` (SEO, JSON-LD, OG). Compatible con deploy gh-pages
  (base `/EstudioPolo/`).
- Stack sin agregar dependencias nuevas (Fraunces/Inter vía Google Fonts, igual
  que hoy Cormorant/Jost).

## 5. Alcance / no-alcance
- IN: reestilizar componentes existentes (CSS casi por completo + JSX de
  secciones), guardar paleta/tipografía, reactivar testimonial de forma segura.
- OUT: no inventar datos de contacto reales, no implementar backend del form
  (queda el mock actual con comentario), no variantes B/C (solo documentadas).
- Se conserva la funcionalidad actual 1:1 (scroll, menú, form, contadores).

## 6. Acceptance criteria
- `npm run build` pasa sin errores.
- La landing mantiene todas las secciones y funcionalidad actuales.
- El `main` original queda intacto; la variante A vive en `redesign-editorial`.