import { motion } from 'framer-motion';
import { HiAcademicCap, HiCode, HiUser } from 'react-icons/hi';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import './About.css';

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { lang } = useLang();
  const t = content[lang].about;

  const facts = [
    { icon: <HiAcademicCap size={20} />, label: t.fact1_label, value: t.university },
    { icon: <HiCode size={20} />,        label: t.fact2_label, value: t.major      },
    { icon: <HiUser size={20} />,        label: t.fact3_label, value: t.status     },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="about__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Image column */}
          <motion.div className="about__image-col" variants={fadeUp} transition={{ duration: 0.7 }}>
            <div className="about__image-wrap">
              <img
                src="/profile.png"
                alt="Bintang Aditya Ramadhan"
                className="about__image"
                loading="lazy"
                width="480"
                height="480"
              />
            </div>
            {/* Name caption below photo — useful on mobile */}
            <div className="about__photo-caption">
              <span className="about__photo-name">Bintang Aditya Ramadhan</span>
              <span className="about__photo-role">
                {lang === 'id' ? 'Web Dev & Data Analyst' : 'Web Dev & Data Analyst'}
              </span>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div className="about__text-col" variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <span className="section-tag">{t.tag}</span>
            <h2 className="section-title about__title">{t.title}</h2>
            <p className="about__bio">{t.bio}</p>

            {/* Accent bar */}
            <div className="about__bar" />

            {/* Fact cards - Clean horizontal stats row */}
            <div className="about__facts">
              {facts.map((f, i) => (
                <motion.div
                  key={i}
                  className="about__fact"
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  <span className="about__fact-icon">{f.icon}</span>
                  <div className="about__fact-details">
                    <p className="about__fact-label">{f.label}</p>
                    <p className="about__fact-value">{f.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
