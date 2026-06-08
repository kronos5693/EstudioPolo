// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { id: 'inicio',   label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'areas',    label: 'Áreas de Práctica' },
];

// ─── Stats ────────────────────────────────────────────────────
export const STATS = [
  { target: 15,   suffix: '+', label: 'Años de Experiencia' },
  { target: 100, suffix: '+', label: 'Casos Resueltos' },
  { target: 95,   suffix: '%', label: 'Satisfacción' },
  { target: 5,   suffix: '+', label: 'Abogados Especialistas' },
];

// ─── About cards ──────────────────────────────────────────────
export const ABOUT_CARDS = [
  {
    id: 'proteccion',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'Protección Legal',
    desc: 'Según la necesidad del caso, abordamos la mejor solución para su resolución. Esto permite entender todas las posibilidades y elegir la que mejor represente los intereses del cliente.',
  },
  {
    id: 'atencion',
    iconPath: null,
    iconPaths: [
      { d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' },
      { d: 'M12 6v6l4 2' },
    ],
    title: 'Atención Inmediata',
    desc: 'Nuestro equipo está disponible para atender sus necesidades con la rapidez que requieren. Entendemos la urgencia de los asuntos legales de cada cliente.',
  },
  {
    id: 'equipo',
    iconPaths: [
      { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
      { d: 'M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' },
      { d: 'M23 21v-2a4 4 0 0 0-3-3.87' },
      { d: 'M16 3.13a4 4 0 0 1 0 7.75' },
    ],
    title: 'Equipo Experto',
    desc: 'Contamos con abogados especializados en diversas áreas del derecho, con formación continua y conocimiento de la legislación vigente.',
  },
];

// ─── Practice Areas ───────────────────────────────────────────
export const PRACTICE_AREAS = [

  {
    id: 'inmobiliario',
    iconPaths: [
      { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
      { d: 'M9 22V12h6v10' },
    ],
    title: 'Derecho Inmobiliario',
    desc: 'Asesoramiento en compraventa de propiedades, contratos de arrendamiento, disputas de tierras y urbanismo.',
  },
  {
    id: 'laboral',
    iconPaths: [
      { d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' },
      { d: 'M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' },
    ],
    title: 'Derecho Laboral',
    desc: 'Defensa de los derechos laborales, negociación colectiva, despidos, indemnizaciones y acoso laboral.',
  },
  {
    id: 'penal',
    iconPaths: [
      { d: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z' },
      { d: 'M12 8v4' },
      { d: 'M12 16h.01' },
    ],
    title: 'Derecho Penal',
    desc: 'Defensa penal integral, desde delitos menores hasta casos complejos, asegurando un proceso justo y transparente.',
  },
  {
    id: 'familiar',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'Derecho Familiar',
    desc: 'Divorcios, custodia de menores, adopciones, pensiones alimenticias y resolución de conflictos familiares.',
  },
  {
    id: 'tributario',
    iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
    title: 'Derecho Tributario',
    desc: 'Planificación fiscal, defensa ante auditorías, optimización de cargas impositivas y cumplimiento normativo.',
  },
    {
    id: 'publico',
    iconPaths: [
      { d: 'M2 7h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z' },
      { d: 'M16 7V5a4 4 0 0 0-8 0v2' },
    ],
    title: 'Derecho Público',
    desc: 'Tramites antes los distintos Organismos del Estado ya sea administrativos como judicial.',
  },
   {
    id: 'diligencias',
    iconPaths: [
      { d: 'M2 7h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z' },
      { d: 'M16 7V5a4 4 0 0 0-8 0v2' },
    ],
    title: 'Diligencias y Gestoria Legal en General',
    desc: 'Cedula Ley 22172. Noificaciones y Mandamientos- CABA y Provincia de Corrientes.',
  },
];

// ─── Contact info ─────────────────────────────────────────────
export const CONTACT_INFO = [
  
  {
    id: 'phone',
    label: 'Teléfono',
    value: '+1 (234) 567-890\n+1 (234) 567-891',
    iconPaths: [
      { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' },
    ],
  },
  {
    id: 'email',
    label: 'Email',
    value: 'info@garciaasociados.com',
    iconPaths: [
      { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' },
      { d: 'M22 6l-10 7L2 6' },
    ],
  },
  {
    id: 'hours',
    label: 'Horario de Atención',
    value: 'Lunes a Viernes: 9:00 - 18:00 (URGENCIAS)',
    iconPaths: [
      { d: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z' },
      { d: 'M12 6v6l4 2' },
    ],
  },
];

// ─── Select options ────────────────────────────────────────────
export const AREA_OPTIONS = [
  { value: '',            label: 'Seleccione un área...' },
  { value: 'diligencias', label: 'Diligencias y Gestoria Legal en General' },
  { value: 'inmobiliario',label: 'Derecho Inmobiliario' },
  { value: 'laboral',     label: 'Derecho Laboral' },
  { value: 'penal',       label: 'Derecho Penal' },
  { value: 'familiar',    label: 'Derecho Familiar' },
  { value: 'tributario',  label: 'Derecho Tributario' },
  { value: 'publico',     label: 'Derecho Público' },
  { value: 'otro',        label: 'Otro' },
];

// ─── Footer columns ───────────────────────────────────────────
export const FOOTER_COLS = [
  {
    title: 'Navegación',
    items: [
      { href: 'inicio',   label: 'Inicio' },
      { href: 'nosotros', label: 'Nosotros' },
      { href: 'areas',    label: 'Áreas de Práctica' },
      { href: 'contacto', label: 'Contacto' },
    ],
  },
  { 
    title: 'Áreas Legales',
    items: [
      { href: 'areas', label: 'Derecho Público' },
      { href: 'areas', label: 'Derecho Inmobiliario' },
      { href: 'areas', label: 'Derecho Laboral' },
      { href: 'areas', label: 'Derecho Penal' },
      { href: 'areas', label: 'Diligencias y Gestoria Legal en General' },
      
    ],
  },
  {
    title: 'Legal',
    items: [
      { href: '#', label: 'Política de Privacidad' },
      { href: '#', label: 'Términos de Uso' },
      { href: '#', label: 'Aviso Legal' },
      { href: '#', label: 'Cookies' },
    ],
  },
];
