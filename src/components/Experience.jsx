import { motion } from 'framer-motion';
import { HiBriefcase, HiOfficeBuilding } from 'react-icons/hi';
import { useLang } from '../context/LangContext';
import { content, experienceData } from '../data/content';
import './Experience.css';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Experience() {
  const { lang } = useLang();
  const t = content[lang].experience;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="exp__timeline">
          {experienceData.map((item, i) => (
            <motion.div
              key={i}
              className="exp__item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="exp__dot-col">
                <div className="exp__dot">
                  <HiBriefcase size={16} />
                </div>
                {i < experienceData.length - 1 && <div className="exp__line" />}
              </div>

              {/* Card */}
              <div className="exp__card card">
                <div className="exp__card-header">
                  <div>
                    <h3 className="exp__role">
                      {lang === 'id' ? item.role : item.roleEn}
                    </h3>
                    <p className="exp__company">
                      <HiOfficeBuilding size={13} style={{ display: 'inline', marginRight: 4 }} />
                      {lang === 'id' ? item.company : item.companyEn}
                    </p>
                  </div>
                  <div className="exp__right">
                    <span className="exp__type">
                      {lang === 'id' ? item.type : item.typeEn}
                    </span>
                    <span className="exp__period">
                      {lang === 'id' ? item.period : item.periodEn}
                    </span>
                  </div>
                </div>
                <p className="exp__desc">
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
