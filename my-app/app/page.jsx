"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  MessageCircle,
  Code2,
  Terminal,
  Server,
  Check,
  Copy,
  ArrowUp,
  Image as ImageIcon,
  Eye,
} from "lucide-react";

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

const projects = [
  {
    title: "Portfolio Website",
    image: "/piko.png",
  },
  {
    title: "Business Dashboard",
    image: "/ditian.jpg",
  },
  {
    title: "Company Profile",
    image: "/ditian.jpeg",
  },
];

const services = [
  {
    icon: Code2,
    title: "Frontend & UI Development",
    desc: "Building fast, dynamic, and responsive web user interfaces with clean component architectures.",
  },
  {
    icon: Server,
    title: "Backend & API Integration",
    desc: "Designing solid server-side logic, data structures, and seamless API integrations.",
  },
  {
    icon: Terminal,
    title: "Clean Code & Performance",
    desc: "Crafting well-structured, maintainable codebases optimized for high efficiency.",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const userEmail = "fickoditian@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background-color: #080a0f; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.5; overflow-x: hidden; width: 100%; max-width: 100vw; }
        a { color: inherit; text-decoration: none; }

        .container { max-width: 1080px; margin: 0 auto; padding: 0 20px; width: 100%; }

        /* NAVBAR RESPONSIVE */
        .navbar { position: fixed; top: 0; left: 0; width: 100%; z-index: 100; background: rgba(8, 10, 15, 0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.06); height: 68px; display: flex; align-items: center; justify-content: space-between; padding: 0 clamp(16px, 4vw, 32px); }
        
        .nav-profile-logo { width: 36px; height: 36px; border-radius: 50%; background: #121722; border: 1px solid rgba(255, 255, 255, 0.1); color: #ffffff; font-size: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; transition: transform 0.2s; overflow: hidden; flex-shrink: 0; }
        .nav-profile-logo:hover { transform: scale(1.05); }

        .nav-right { display: flex; align-items: center; gap: 12px; }
        .btn-talk { background: #ccff00; color: #080a0f; padding: 8px 18px; border-radius: 99px; font-weight: 700; font-size: 13px; display: inline-flex; align-items: center; gap: 5px; transition: 0.2s; }
        .btn-talk:hover { background: #b8e600; }
        @media (max-width: 640px) { .btn-talk { display: none; } }

        /* MENU TOGGLE */
        .menu-toggle-btn { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 99px; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; color: #ffffff; cursor: pointer; transition: 0.2s; z-index: 101; flex-shrink: 0; }
        .menu-toggle-btn:hover { border-color: #ccff00; color: #ccff00; }

        /* MENU DRAWER */
        .menu-overlay { position: fixed; inset: 0; z-index: 90; background: rgba(8, 10, 15, 0.98); backdrop-filter: blur(20px); display: flex; align-items: flex-start; justify-content: flex-start; padding: 12vh 0 0 clamp(20px, 5vw, 48px); }
        .menu-links { display: flex; flex-direction: column; gap: 16px; text-align: left; }
        .menu-item { font-size: clamp(18px, 4vw, 24px); font-weight: 600; color: #ffffff; display: flex; align-items: center; gap: 10px; transition: 0.2s; }
        .menu-item:hover { color: #ccff00; transform: translateX(6px); }
        .menu-dot { width: 5px; height: 5px; border-radius: 50%; background: #ccff00; opacity: 0; }
        .menu-item:hover .menu-dot { opacity: 1; }

        /* HERO SECTION RESPONSIVE UNTUK SEMUA PERANGKAT */
        .hero { min-height: 70vh; display: flex; flex-direction: column; justify-content: center; padding-top: 100px; padding-bottom: 40px; }
        .hero-grid { display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 30px; width: 100%; }
        
        .hero-text { flex: 1; min-width: 0; }
        
        /* FOTO PROFIL RESPONSIVE HP, LAPTOP, TAB */
        .profile-avatar-container { display: flex; justify-content: center; align-items: center; flex-shrink: 0; }
        .profile-circle-wrapper { 
          width: clamp(140px, 35vw, 220px); 
          height: clamp(140px, 35vw, 220px); 
          border-radius: 50%; 
          background: #121722; 
          border: 2px solid rgba(255, 255, 255, 0.1); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          box-shadow: none; 
          overflow: hidden; 
          position: relative; 
        }

        /* BREAKPOINT HP & TABLET KECIL */
        @media (max-width: 768px) { 
          .hero-grid { 
            flex-direction: column-reverse; 
            text-align: center; 
            gap: 24px; 
          } 
          .hero-actions { justify-content: center; }
          .hero { padding-top: 90px; padding-bottom: 20px; }
        }

        .hero-title { font-size: clamp(32px, 5.5vw, 56px); font-weight: 800; letter-spacing: -1px; line-height: 1.15; margin-bottom: 14px; color: #ffffff; }
        .hero-sub { font-size: clamp(14px, 2vw, 16px); color: rgba(255,255,255,0.85); margin-bottom: 24px; max-width: 580px; }

        .hero-actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .btn-main { background: #ccff00; color: #080a0f; padding: 11px 24px; border-radius: 99px; font-weight: 700; font-size: 14px; display: inline-flex; align-items: center; gap: 6px; border: none; cursor: pointer; transition: 0.2s; white-space: nowrap; }
        .btn-main:hover { background: #b8e600; transform: translateY(-1px); }
        .btn-sub { border: 1px solid rgba(255, 255, 255, 0.12); background: rgba(255, 255, 255, 0.02); color: #ffffff; padding: 11px 24px; border-radius: 99px; font-weight: 600; font-size: 14px; display: inline-flex; align-items: center; gap: 6px; transition: 0.2s; white-space: nowrap; }
        .btn-sub:hover { border-color: #ccff00; color: #ccff00; }

        /* SECTIONS */
        .section { padding: clamp(40px, 6vw, 60px) 0; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: left; }
        .section-tag-large { color: #ffffff; font-size: clamp(24px, 4vw, 36px); font-weight: 800; letter-spacing: -1px; margin-bottom: 16px; display: block; }
        .section-tag { color: #ccff00; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
        .section-title { font-size: clamp(22px, 3.5vw, 32px); font-weight: 800; letter-spacing: -0.8px; margin-bottom: 6px; color: #ffffff; }
        .section-subtitle { color: rgba(255,255,255,0.7); font-size: clamp(13px, 1.5vw, 14px); margin-bottom: 30px; }

        /* ABOUT */
        .about-text-content { font-size: clamp(15px, 2.2vw, 18px); color: rgba(255,255,255,0.9); line-height: 1.7; max-width: 820px; font-weight: 400; }
        .about-text-content span { color: #ccff00; font-weight: 600; }

        /* PROJECTS */
        .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; width: 100%; }
        .project-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; overflow: hidden; transition: 0.2s; text-align: left; display: flex; flex-direction: column; }
        .project-card:hover { border-color: rgba(204, 255, 0, 0.3); transform: translateY(-3px); }
        .project-image-box { width: 100%; height: 180px; background: #121722; border-bottom: 1px solid rgba(255, 255, 255, 0.06); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; }
        .project-image-box img { width: 100%; height: 100%; object-fit: cover; }
        .project-content { padding: 18px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between; gap: 12px; }
        .project-card h3 { font-size: 16px; font-weight: 700; color: #ffffff; margin: 0; }
        .project-view-btn { background: none; border: none; display: inline-flex; align-items: center; gap: 6px; color: #ccff00; font-size: 13px; font-weight: 600; cursor: pointer; padding: 0; transition: 0.2s; width: fit-content; }

        /* SERVICES */
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; width: 100%; }
        .service-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 20px; transition: 0.2s; text-align: left; }
        .service-card:hover { border-color: rgba(204, 255, 0, 0.3); transform: translateY(-3px); }
        .service-card h3 { font-size: 17px; font-weight: 700; margin-bottom: 6px; color: #ffffff; }
        .service-card p { color: rgba(255,255,255,0.7); font-size: 13px; }
        .service-icon-box { width: 40px; height: 40px; background: rgba(204, 255, 0, 0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #ccff00; margin-bottom: 14px; }

        /* CONTACT */
        .contact-wrapper { background: linear-gradient(135deg, rgba(204, 255, 0, 0.04), rgba(255, 255, 255, 0.01)); border: 1px solid rgba(204, 255, 0, 0.2); border-radius: 20px; padding: clamp(24px, 4vw, 40px) 16px; text-align: center; }
        .email-copy-box { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 6px 10px 6px 16px; border-radius: 99px; display: inline-flex; align-items: center; gap: 10px; margin-top: 16px; margin-bottom: 24px; max-width: 100%; overflow: hidden; }
        .email-text { font-size: clamp(12px, 1.8vw, 14px); font-weight: 600; color: #ffffff; word-break: break-all; }

        /* SCROLL TOP */
        .scroll-top-btn { position: fixed; bottom: 20px; right: 20px; z-index: 99; background: #ccff00; color: #080a0f; width: 38px; height: 38px; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 15px rgba(204, 255, 0, 0.3); }

        /* FOOTER */
        .footer { padding: 32px 0; border-top: 1px solid rgba(255, 255, 255, 0.06); display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 14px; width: 100%; }
        @media (max-width: 500px) {
          .footer { flex-direction: column; justify-content: center; text-align: center; }
        }
        .social-icons { display: flex; gap: 10px; align-items: center; }
        .social-icons a { width: 34px; height: 34px; border-radius: 50%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); display: flex; align-items: center; justify-content: center; color: #ffffff; transition: 0.2s; }
        .social-icons a:hover { border-color: #ccff00; color: #ccff00; }
      `}</style>

      {/* SPLASH SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "#080a0f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", gap: "12px", fontSize: "clamp(24px, 5vw, 56px)", fontWeight: "800", color: "#ffffff", padding: "0 20px", textAlign: "center" }}>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                Hello,
              </motion.span>
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                style={{ color: "#ccff00" }}
              >
                Welcome
              </motion.span>
            </div>

            <button
              onClick={() => setLoading(false)}
              style={{
                position: "absolute",
                bottom: "40px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                padding: "8px 24px",
                borderRadius: "99px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      {!loading && (
        <header className="navbar">
          <a href="#home" className="nav-profile-logo" title="Ficko Ditian">
            <img src="/ficko.png" alt="Ficko Ditian" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </a>

          <div className="nav-right">
            <a href="#contact" className="btn-talk">
              Let's Talk <ArrowUpRight size={13} />
            </a>

            <button
              className="menu-toggle-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>
      )}

      {/* MENU DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="menu-links">
              {navigation.map(([label, href], idx) => (
                <a
                  key={label}
                  href={href}
                  className="menu-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="menu-dot" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container">
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">
                Ficko Ditian
              </h1>

              <p className="hero-sub">
                Web Developer focused on building modern front-end interfaces, solid backend solutions, and high-performance web applications.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn-main">
                  Explore Projects <ArrowUpRight size={15} />
                </a>
                <a href="#contact" className="btn-sub">
                  Contact Me <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="profile-avatar-container">
              <div className="profile-circle-wrapper">
                <img src="/ficko.png" alt="Ficko Ditian" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section className="section" id="about">
          <div>
            <span className="section-tag-large">About Me</span>
            <p className="about-text-content">
              I am a dedicated <span>Web Developer</span> passionate about crafting dynamic, modern web experiences. My development workflow centers around clean code architecture, intuitive user interfaces, fast performance, and seamless user engagement. Beyond crafting front-end interactions, I focus on integrating robust backend systems, optimizing server API structures, and delivering scalable, end-to-end web solutions that drive real value.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div>
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Featured Works.</h2>
            <p className="section-subtitle">Recent web development projects.</p>

            <div className="project-grid">
              {projects.map((item, idx) => (
                <div key={idx} className="project-card">
                  <div className="project-image-box">
                    {item.image ? (
                      <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "#ffffff", opacity: 0.8 }}>
                        <ImageIcon size={24} />
                        <span>Project Preview</span>
                      </div>
                    )}
                  </div>
                  <div className="project-content">
                    <h3>{item.title}</h3>
                    <button 
                      className="project-view-btn" 
                      onClick={() => setSelectedImage(item.image || "/ficko.png")}
                    >
                      <Eye size={14} /> View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div>
            <span className="section-tag">Services</span>
            <h2 className="section-title">What I build.</h2>
            <p className="section-subtitle">Modern web engineering solutions tailored for your business.</p>

            <div className="services-grid">
              {services.map((s, i) => {
                const IconComponent = s.icon;
                return (
                  <div key={i} className="service-card">
                    <div className="service-icon-box">
                      <IconComponent size={18} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="contact-wrapper">
            <span className="section-tag" style={{ justifyContent: "center", marginBottom: "8px" }}>Get In Touch</span>
            
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: "800", marginBottom: "8px", color: "#ffffff" }}>
              Got a project in mind? <br /><span style={{ color: "#ccff00" }}>Let's build it together.</span>
            </h2>

            <div className="email-copy-box">
              <span className="email-text">{userEmail}</span>
              <button className="btn-main" onClick={copyToClipboard} style={{ padding: "4px 10px", fontSize: "11px" }}>
                {copied ? <Check size={12} /> : <Copy size={12} />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/6285732095945" target="_blank" rel="noreferrer" className="btn-main">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href={`mailto:${userEmail}`} className="btn-sub">
                <Mail size={14} /> Direct Email
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <span style={{ color: "#ffffff", opacity: 0.7, fontSize: "13px", fontWeight: "500" }}>
            © 2026 Ficko Ditian. All rights reserved.
          </span>
          <div className="social-icons">
            <a href="https://instagram.com/fickoditian" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </footer>
      </main>

      {/* MODAL POPUP GAMBAR */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(8, 10, 15, 0.9)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "800px",
                width: "100%",
                background: "#121722",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                overflow: "hidden",
                padding: "20px",
              }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  color: "#ffffff",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <X size={18} />
              </button>
              <div style={{ width: "100%", height: "350px", display: "flex", alignItems: "center", justifyCenter: "center", background: "#080a0f", borderRadius: "8px", overflow: "hidden" }}>
                <img src={selectedImage} alt="Project Preview" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACK TO TOP */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </>
  );
}