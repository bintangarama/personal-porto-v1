import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import { useLang } from '../context/LangContext';
import { content, educationData } from '../data/content';
import './Education.css';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Education({ sectionAlt }) {
  const { lang } = useLang();
  const t = content[lang].education;

  return (
    <section id="education" className={`section${sectionAlt ? ' section--alt' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="edu__timeline">
          {educationData.map((item, i) => (
            <motion.div
              key={i}
              className="edu__item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="edu__dot-col">
                <div className="edu__dot">
                  <HiAcademicCap size={16} />
                </div>
                {i < educationData.length - 1 && <div className="edu__line" />}
              </div>

              {/* Card */}
              <div className="edu__card card">
                <div className="edu__card-header">
                  <div>
                    <h3 className="edu__degree">
                      {lang === 'id' ? item.degree : item.degreeEn}
                    </h3>
                    <p className="edu__school">{item.school}</p>
                  </div>
                  <div className="edu__right">
                    <span className="edu__period">
                      {lang === 'id' ? item.period : item.periodEn}
                    </span>
                    {item.gpa && (
                      <span className="edu__gpa">GPA {item.gpa}</span>
                    )}
                  </div>
                </div>
                <p className="edu__desc">
                  {lang === 'id' ? item.desc : item.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
