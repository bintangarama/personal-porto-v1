import { motion } from 'framer-motion';
import {
  SiJavascript, SiReact, SiLaravel, SiTailwindcss, SiGithub,
  SiPython, SiPandas, SiMysql, SiLinux, SiGooglecolab,
} from 'react-icons/si';
import {
  HiChartBar, HiChartPie, HiTable,
} from 'react-icons/hi';
import { useLang } from '../context/LangContext';
import { content, skillsData } from '../data/content';
import './Skills.css';

// Map icon string keys to actual icon components
const ICON_MAP = {
  SiJavascript,
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiGithub,
  SiLinux,
  SiPython,
  SiPandas,
  SiMysql,
  SiGooglecolab,
  HiChartBar,
  HiChartPie,
  HiTable,
};

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

function SkillBadge({ skill }) {
  const Icon = ICON_MAP[skill.icon];
  return (
    <motion.div className="skill-badge" variants={itemVariants} whileHover={{ scale: 1.05 }}>
      <span className="skill-badge__icon" style={{ color: skill.color }}>
        {Icon ? <Icon size={26} /> : '⚙️'}
      </span>
      <span className="skill-badge__name">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills({ sectionAlt }) {
  const { lang } = useLang();
  const t = content[lang].skills;

  return (
    <section id="skills" className={`section skills${sectionAlt ? ' section--alt' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {/* Unified container for desktop grid layout */}
        <div className="skills__content">
          {/* Web skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="skills__group"
          >
            <h3 className="skills__group-label">{t.web_label}</h3>
            <div className="skills__grid">
              {skillsData.web.map(skill => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          <div className="skills__divider" />

          {/* Data skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="skills__group"
          >
            <h3 className="skills__group-label">{t.data_label}</h3>
            <div className="skills__grid">
              {skillsData.data.map(skill => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
