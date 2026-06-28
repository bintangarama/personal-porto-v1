import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import './Footer.css';

const NAV_LINKS = [
  { href: '#about',      labelId: 'Tentang',     labelEn: 'About'     },
  { href: '#skills',     labelId: 'Keahlian',    labelEn: 'Skills'    },
  { href: '#projects',   labelId: 'Proyek',      labelEn: 'Projects'  },
  { href: '#experience', labelId: 'Pengalaman',  labelEn: 'Experience'},
  { href: '#contact',    labelId: 'Kontak',      labelEn: 'Contact'   },
];

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang].footer;
  const year = new Date().getFullYear();

  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand + nav links */}
        <div className="footer__top">
          {/* Logo */}
          <a href="#hero" className="footer__brand" onClick={(e) => handleNav(e, '#hero')}>
            <span className="footer__brand-text">BAR</span>
            <span className="footer__brand-dot" />
          </a>

          {/* Quick nav */}
          <nav className="footer__nav" aria-label="Footer navigation">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="footer__nav-link"
                onClick={(e) => handleNav(e, link.href)}
              >
                {lang === 'id' ? link.labelId : link.labelEn}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row: copyright + made with */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} <span className="footer__name">Bintang Aditya Ramadhan</span>.{' '}
            {t.rights}.
          </p>
          <p className="footer__made">
            {t.made} <span className="footer__heart">❤️</span> {t.in}
          </p>
        </div>
      </div>
    </footer>
  );
}
