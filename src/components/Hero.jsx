import { motion } from "framer-motion";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { useLang } from "../context/LangContext";
import { content } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang].hero;

  const scrollToWork = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Editorial Typographic Rhythm: split by * to italicize key phrases
  const titleParts = t.title.split("*");
  const mainTitle = titleParts[0];
  const italicTitle = titleParts[1] ? titleParts[1].replace(/\./g, "") : "";

  return (
    <section id="hero" className="hero hero--cinematic">
      {/* Dark warm overlay */}
      <div className="hero__overlay" />

      <div className="container hero__container">
        <div className="hero__content-wrap">
          {/* Main Info (Bottom Left aligned) */}
          <motion.div
            className="hero__info"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow badge style - translucent background */}
            <span className="hero__eyebrow mono-label">{t.greeting}</span>

            {/* Massive editorial title */}
            <h1 className="hero__headline">
              {mainTitle}
              <span className="text-italic-accent">{italicTitle}</span>.
            </h1>

            {/* Subtext */}
            <p className="hero__description">{t.tagline}</p>

            {/* Action buttons */}
            <div className="hero__actions">
              <a
                id="hero-cta-work"
                href="#projects"
                className="btn btn-hero-primary"
                onClick={scrollToWork}
              >
                {t.cta_work}
                <HiArrowDown size={14} />
              </a>
              <a
                id="hero-cta-cv"
                href="/CV.pdf"
                download
                className="btn btn-hero-outline"
              >
                {t.cta_cv}
                <HiDownload size={14} />
              </a>
            </div>
          </motion.div>

          {/* Metric Stats block (Bottom Right aligned) */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="hero__stat-item">
              <span className="hero__stat-number">{t.stat1_num}</span>
              <span className="hero__stat-label">{t.stat1_lbl}</span>
            </div>

            <div className="hero__stat-divider" />

            <div className="hero__stat-item">
              <span className="hero__stat-number">{t.stat2_num}</span>
              <span className="hero__stat-label">{t.stat2_lbl}</span>
            </div>

            <div className="hero__stat-divider" />

            <div className="hero__stat-item">
              <span className="hero__stat-number">{t.stat3_num}</span>
              <span className="hero__stat-label">{t.stat3_lbl}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
