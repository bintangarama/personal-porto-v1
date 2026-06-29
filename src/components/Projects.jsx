import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiExternalLink,
  HiCode,
  HiAcademicCap,
  HiDatabase,
  HiTerminal,
  HiChartBar,
} from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { useLang } from "../context/LangContext";
import { content, dataProjects } from "../data/content";
import "./Projects.css";

/* ── Animation variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export default function Projects() {
  const { lang } = useLang();
  const t = content[lang].projects;
  const tData = content[lang].data;

  const [activeTab, setActiveTab] = useState("web");

  /* ── Web Projects data ── */
  const featuredProjects = [
    {
      num: "01",
      tag: lang === "id" ? "SISTEM WEB & INVENTARIS" : "WEB & INVENTORY SYSTEM",
      title:
        lang === "id"
          ? "sistem inventaris stokita"
          : "stokita inventory system",
      desc:
        lang === "id"
          ? "Sistem manajemen inventaris terintegrasi untuk UMKM Katering guna mencatat dan memantau stok bahan baku serta pesanan secara efisien."
          : "Integrated inventory management system designed for catering UMKMs to efficiently track ingredients, raw stocks, and customer orders.",
      tech: "Laravel · Filament · MySQL",
      live: "https://stokita-ims.vercel.app/",
      github: "https://github.com/bintangarama/stokita",
      widget: (
        <div className="p-screenshot-wrap">
          <img
            src="/screenshots/stokita.png"
            alt="Stokita Inventory System screenshot"
            className="p-screenshot"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      num: "02",
      tag: lang === "id" ? "FINANSIAL & REPORT" : "FINANCIAL & REPORT",
      title:
        lang === "id" ? "martabak finance tracker" : "martabak finance tracker",
      desc:
        lang === "id"
          ? "Aplikasi pencatatan keuangan pribadi sederhana berbasis Python untuk mengelola pemasukan, pengeluaran, dan visualisasi kas harian."
          : "Python-based personal finance tracker application designed to record, categorize, and monitor daily income, expenses, and cash flow.",
      tech: "Python · Google Spreadsheets API",
      live: "https://martabak-finance-tracker.streamlit.app/",
      github: "https://github.com/bintangarama/martabak-finance-tracker",
      widget: (
        <div className="p-screenshot-wrap">
          <img
            src="/screenshots/martabak.png"
            alt="Martabak Finance Tracker screenshot"
            className="p-screenshot"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      num: "03",
      tag:
        lang === "id"
          ? "SISTEM PENDUKUNG KEPUTUSAN"
          : "DECISION SUPPORT SYSTEM",
      title:
        lang === "id" ? "spk evaluasi restoran" : "restaurant dss (fuzzy ahp)",
      desc:
        lang === "id"
          ? "Sistem Pendukung Keputusan (DSS) menggunakan metode Fuzzy AHP untuk melakukan analisis dan penilaian peringkat kualitas pelayanan restoran."
          : "Decision Support System (DSS) utilizing Fuzzy AHP (Analytic Hierarchy Process) to evaluate, rank, and analyze restaurant service metrics.",
      tech: "Python · Fuzzy AHP · NumPy",
      live: "https://evaluasi-restoran.streamlit.app/",
      github:
        "https://github.com/bintangarama/Sistem-Evaluasi-dan-Analisis-Pelayanan-Restoran",
      widget: (
        <div className="p-screenshot-wrap">
          <img
            src="/screenshots/spk.png"
            alt="Restaurant DSS screenshot"
            className="p-screenshot"
            loading="lazy"
          />
        </div>
      ),
    },
  ];

  const tabs = [
    { key: "web", label: lang === "id" ? "Proyek Web" : "Web Projects" },
    { key: "data", label: lang === "id" ? "Proyek Data" : "Data Projects" },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            {lang === "id" ? "Semua Proyek" : "All Projects"}
          </span>
          <h2 className="section-title">
            {lang === "id" ? (
              <>
                Membangun solusi secara{" "}
                <span className="text-italic-accent">presisi</span>
              </>
            ) : (
              <>
                Building solutions with{" "}
                <span className="text-italic-accent">precision</span>
              </>
            )}
          </h2>
          <p className="section-subtitle">
            {lang === "id"
              ? "Proyek web dan analisis data — semua bisa dilihat kodenya."
              : "Web projects and data analysis — all open source and inspectable."}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="projects__tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`projects__tab${activeTab === tab.key ? " projects__tab--active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.key === "web" ? (
                <HiCode size={14} />
              ) : (
                <HiChartBar size={14} />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "web" && (
            <motion.div
              key="web"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="projects__grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {featuredProjects.map((project) => (
                  <motion.div
                    key={project.num}
                    className="project-step-card"
                    variants={cardVariants}
                    whileHover={{ y: -6 }}
                  >
                    <span className="p-card-eyebrow mono-label">
                      {project.num}
                    </span>
                    <span className="p-card-tag font-mono-sub">
                      {project.tag}
                    </span>
                    <h3 className="p-card-title">{project.title}</h3>
                    <p className="p-card-desc">{project.desc}</p>
                    <div className="p-card-tech">{project.tech}</div>
                    <div className="p-card-widget-container">
                      {project.widget}
                    </div>
                    <div className="p-card-links">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-card-link p-card-link--primary"
                      >
                        <HiExternalLink size={14} /> {t.live}
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-card-link p-card-link--muted"
                      >
                        <HiCode size={14} /> {t.code}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {activeTab === "data" && (
            <motion.div
              key="data"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="data__grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {dataProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="data-card"
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                  >
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
                      {lang === "id" ? project.titleId : project.title}
                    </h3>
                    <p className="data-card__desc">
                      {lang === "id" ? project.descId : project.desc}
                    </p>
                    <div className="data-card__links">
                      <a
                        href={project.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-card-link p-card-link--primary"
                      >
                        <HiExternalLink size={14} /> {tData.view}
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-card-link p-card-link--muted"
                      >
                        <SiGithub size={13} /> {tData.code}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="projects__cta-block">
          <a
            href="https://github.com/bintangarama"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {lang === "id" ? "Lihat Semua di GitHub" : "View All on GitHub"}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn btn-outline"
          >
            {lang === "id" ? "Hubungi Saya" : "Get in Touch"}
          </a>
        </div>
      </div>
    </section>
  );
}
