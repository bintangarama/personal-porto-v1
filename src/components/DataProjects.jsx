import { motion } from 'framer-motion';
import { HiChartBar, HiExternalLink, HiCode } from 'react-icons/hi';
import { useLang } from '../context/LangContext';
import { content, dataProjects } from '../data/content';
import './DataProjects.css';

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function DataProjects({ sectionAlt }) {
  const { lang } = useLang();
  const t = content[lang].data;

  return (
    <section id="data" className={`section data-section${sectionAlt ? ' section--alt' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <motion.div
          className="data__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {dataProjects.map((project) => (
            <motion.div
              key={project.id}
              className="data-card"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              {/* Icon + tech row */}
              <div className="data-card__top">
                <span className="data-card__icon">
                  <HiChartBar size={18} />
                </span>
                <div className="data-card__tags">
                  {project.tech.map((tag, idx) => (
                    <span key={tag} className="data-card__tag">
                      {tag}
                      {idx < project.tech.length - 1 && (
                        <span className="bullet-separator">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="data-card__title">
                {lang === 'id' ? project.titleId : project.title}
              </h3>

              <p className="data-card__desc">
                {lang === 'id' ? project.descId : project.desc}
              </p>

              <div className="data-card__links">
                <a
                  id={`data-${project.id}-view`}
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link project-card__link--primary"
                >
                  <HiExternalLink size={14} /> {t.view}
                </a>
                <a
                  id={`data-${project.id}-code`}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link project-card__link--muted"
                >
                  <HiCode size={14} /> {t.code}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting CTA Buttons below the data projects */}
        <div className="projects__cta-block">
          <a
            href="https://github.com/bintangarama"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {lang === 'id' ? "Lihat Semua Proyek" : "View All Projects"}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-outline"
          >
            {lang === 'id' ? "Hubungi Saya" : "Get in Touch"}
          </a>
        </div>
      </div>
    </section>
  );
}
