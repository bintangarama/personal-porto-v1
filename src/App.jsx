import { LangProvider } from './context/LangContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <div className="app">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills sectionAlt />
            <Projects />
            <Education sectionAlt />
            <Certifications />
            <Experience sectionAlt />
            <Contact />
          </main>
          <Footer />
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
