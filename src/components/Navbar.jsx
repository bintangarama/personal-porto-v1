import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useLang } from '../context/LangContext';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const t = content[lang].nav;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'certs', 'experience', 'contact'];
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -50% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const navLinks = [
    { label: t.about,      href: '#about'      },
    { label: t.skills,     href: '#skills'     },
    { label: t.projects,   href: '#projects'   },
    { label: t.education,  href: '#education'  },
    { label: t.certs,      href: '#certs'      },
    { label: t.experience, href: '#experience' },
    { label: t.contact,    href: '#contact'    },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNav(e, '#hero')}>
          <span className="navbar__logo-text">BAR</span>
          <span className="navbar__logo-dot" />
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(link => {
            const sectionId = link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={activeSection === sectionId ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Controls */}
        <div className="navbar__controls">
          {/* Theme toggle */}
          <button
            id="theme-toggle"
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <HiMoon size={16} /> : <HiSun size={16} />}
          </button>

          {/* Language toggle - Pill style */}
          <button
            id="lang-toggle"
            className="navbar__lang-btn"
            onClick={toggleLang}
            aria-label="Toggle language"
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
          >
            <span className="navbar__lang-emoji">
              {lang === 'id' ? '🇮🇩' : '🇬🇧'}
            </span>
            <span className="navbar__lang-text-label">
              {lang === 'id' ? 'ID' : 'EN'}
            </span>
          </button>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className="navbar__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNav(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
