import { motion } from 'framer-motion';
import { HiExternalLink, HiCheckCircle } from 'react-icons/hi';
import { useLang } from '../context/LangContext';
import { content, certsData } from '../data/content';
import './Certifications.css';

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export default function Certifications({ sectionAlt }) {
  const { lang } = useLang();
  const t = content[lang].certs;

  return (
    <section id="certs" className={`section certs-section${sectionAlt ? ' section--alt' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <motion.div
          className="certs__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {certsData.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-card card"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              {/* Color stripe */}
              <div
                className="cert-card__stripe"
                style={{ background: cert.color }}
              />

              <div className="cert-card__body">
                <div className="cert-card__top">
                  <span className="cert-card__check">
                    <HiCheckCircle size={22} />
                  </span>
                </div>

                <h3 className="cert-card__name">{cert.name}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <p className="cert-card__date">
                  {lang === 'id' ? cert.date : cert.dateEn}
                </p>

                <a
                  id={`cert-${i}-verify`}
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__verify"
                >
                  <HiExternalLink size={13} /> {t.verify}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
