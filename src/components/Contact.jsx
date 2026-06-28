import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail, HiArrowRight } from "react-icons/hi";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";
import "./Contact.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CONTACTS = [
  {
    id: "github",
    icon: <SiGithub size={28} />,
    handle: "@bintangarama",
    href: "https://github.com/bintangarama",
    color: "currentColor",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin size={28} />,
    handle: "Bintang Aditya Ramadhan",
    href: "https://linkedin.com/in/bintang-aditya-ramadhan",
    color: "#0A66C2",
  },
  {
    id: "email",
    icon: <HiMail size={28} />,
    handle: "bintangaaaaar@gmail.com",
    href: "mailto:bintangaaaaar@gmail.com",
    color: "#F97316",
  },
];

export default function Contact({ sectionAlt }) {
  const { lang } = useLang();
  const t = content[lang].contact;

  const labels = {
    github: t.github,
    linkedin: t.linkedin,
    email: t.email,
  };

  return (
    <section id="contact" className={`section contact-section${sectionAlt ? ' section--alt' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <motion.div
          className="contact__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {CONTACTS.map((c) => (
            <motion.a
              key={c.id}
              id={`contact-${c.id}`}
              href={c.href}
              target={c.id !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="contact-card card"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <span className="contact-card__icon" style={{ color: c.color }}>
                {c.icon}
              </span>
              <div className="contact-card__text">
                <p className="contact-card__label">{labels[c.id]}</p>
                <p className="contact-card__handle">{c.handle}</p>
              </div>
              <span className="contact-card__arrow">
                <HiArrowRight size={18} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
