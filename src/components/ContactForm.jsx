import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AREA_OPTIONS } from '../constants/data';

// ─── Validators ───────────────────────────────────────────────
const validators = {
  nombre:   (v) => v.trim().length < 2 ? 'Ingrese su nombre completo.' : '',
  telefono: (v) => !/^[\d\s\+\-\(\)]{7,20}$/.test(v) ? 'Teléfono inválido.' : '',
  email:    (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Email inválido.' : '',
  mensaje:  (v) => v.trim().length < 10 ? 'Describa brevemente su caso (mínimo 10 caracteres).' : '',
};

const INITIAL = { nombre: '', telefono: '', email: '', area: '', mensaje: '' };

export function ContactForm() {
  const [form,    setForm]    = useState(INITIAL);
  const [errors,  setErrors]  = useState({});
  const [touched, setTouched] = useState({});
  const [status,  setStatus]  = useState('idle'); // idle | sending | success | error

  // Validate a single field
  const validateField = (name, value) => {
    const fn = validators[name];
    return fn ? fn(value) : '';
  };

  // Validate all required fields
  const validateAll = () => {
    const next = {};
    Object.keys(validators).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) next[key] = err;
    });
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched and validate
    const allTouched = Object.keys(INITIAL).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    const errs = validateAll();
    if (Object.values(errs).some(Boolean)) {
      setErrors(errs);
      return;
    }

    setStatus('sending');

    try {
      // ── Connect to real backend here ──────────────────────────
      // Example with Formspree:
      // const res = await fetch('https://formspree.io/f/YOUR_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error('Server error');

      // Simulated delay — remove when connected to real endpoint
      await new Promise((r) => setTimeout(r, 1500));

      setStatus('success');
      setForm(INITIAL);
      setTouched({});
      setErrors({});
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const fieldProps = (name) => ({
    id:       name,
    name,
    value:    form[name],
    onChange:  handleChange,
    onBlur:    handleBlur,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    'aria-invalid': !!errors[name],
  });

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de contacto"
    >
      {/* Row: nombre + teléfono */}
      <div className="form__row">
        <div>
          <label className="form__label" htmlFor="nombre">Nombre Completo *</label>
          <input
            type="text"
            className="form__input"
            placeholder="Su nombre completo"
            autoComplete="name"
            {...fieldProps('nombre')}
          />
          {errors.nombre && touched.nombre && (
            <span id="nombre-error" className="form__error" role="alert">{errors.nombre}</span>
          )}
        </div>
        <div>
          <label className="form__label" htmlFor="telefono">Teléfono *</label>
          <input
            type="tel"
            className="form__input"
            placeholder="+54 (234) 567-890"
            autoComplete="tel"
            {...fieldProps('telefono')}
          />
          {errors.telefono && touched.telefono && (
            <span id="telefono-error" className="form__error" role="alert">{errors.telefono}</span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="form__group">
        <label className="form__label" htmlFor="email">Correo Electrónico *</label>
        <input
          type="email"
          className="form__input"
          placeholder="correo@ejemplo.com"
          autoComplete="email"
          {...fieldProps('email')}
        />
        {errors.email && touched.email && (
          <span id="email-error" className="form__error" role="alert">{errors.email}</span>
        )}
      </div>

      {/* Area select */}
      <div className="form__group">
        <label className="form__label" htmlFor="area">Área de Consulta</label>
        <select className="form__select" {...fieldProps('area')}>
          {AREA_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="form__group">
        <label className="form__label" htmlFor="mensaje">Descripción del Caso *</label>
        <textarea
          className="form__textarea"
          placeholder="Describa brevemente su situación legal..."
          rows={5}
          {...fieldProps('mensaje')}
        />
        {errors.mensaje && touched.mensaje && (
          <span id="mensaje-error" className="form__error" role="alert">{errors.mensaje}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-submit"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar Consulta'}
      </button>

      {/* Feedback */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            className="form__success"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            ¡Gracias! Su consulta fue enviada. Nos contactaremos en las próximas 24 horas.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className="form__success"
            role="alert"
            style={{ background: 'rgba(192,57,43,0.1)', color: '#c0392b', borderColor: 'rgba(192,57,43,0.3)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Ocurrió un error. Por favor, intente nuevamente o contáctenos por teléfono.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
