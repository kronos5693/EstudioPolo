import './styles/global.css';
import { Navbar }                                        from './components/Navbar';
import { Hero }                                          from './sections/Hero';
import { About, Stats, Areas, Testimonial, Contact, Footer } from './sections';

export default function App() {
  return (
    <>
      <a href="#main-content" className="sr-only sr-only--focusable">
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Stats />
        <Areas />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
