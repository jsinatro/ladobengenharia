document.addEventListener('DOMContentLoaded', () => {
  const numeroWhatsApp = '5511996495465'; 

  const montarLinkWhatsApp = (mensagem) => {
    const texto = encodeURIComponent(mensagem);
    return `https://wa.me/${numeroWhatsApp}?text=${texto}`;
  };

  document.querySelectorAll('.js-whatsapp').forEach((link) => {
    const mensagem = link.dataset.message || 'Olá! Quero falar com a Lado B Engenharia.';
    link.setAttribute('href', montarLinkWhatsApp(mensagem));
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      const destino = document.querySelector(this.getAttribute('href'));
      if (!destino) return;

      event.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });

      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const aberto = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.faq-item').forEach((item) => {
    const pergunta = item.querySelector('.faq-question');
    const resposta = item.querySelector('.faq-answer');

    pergunta.addEventListener('click', () => {
      const ativo = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach((faq) => {
        faq.classList.remove('active');
        faq.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!ativo) {
        item.classList.add('active');
        resposta.style.maxHeight = `${resposta.scrollHeight}px`;
      }
    });
  });

  const secoes = document.querySelectorAll('main section[id]');
  const linksMenu = document.querySelectorAll('.nav-links a');

  const ativarLink = () => {
    const topo = window.scrollY + 120;

    secoes.forEach((secao) => {
      const inicio = secao.offsetTop;
      const fim = inicio + secao.offsetHeight;
      const id = secao.getAttribute('id');

      if (topo >= inicio && topo < fim) {
        linksMenu.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };

  ativarLink();
  window.addEventListener('scroll', ativarLink);
});
:root {
  --bg: #081018;
  --bg-alt: #101c27;
  --bg-soft: #122331;
  --line: rgba(151, 180, 198, 0.18);
  --accent: #6ec3c9;
  --accent-strong: #92dde1;
  --text: #ecf3f8;
  --text-dim: #a9bac6;
  --white: #ffffff;
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  --radius: 18px;
  --container: 1160px;
  --font-mono: 'Fira Code', monospace;
  --font-sans: 'Inter', sans-serif;
  --header-height: 88px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(180deg, #081018 0%, #0c1620 100%);
  color: var(--text);
  font-family: var(--font-sans);
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

ul {
  list-style: none;
}

.container {
  width: min(100% - 40px, var(--container));
  margin: 0 auto;
}

.header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(18px);
  background: rgba(8, 16, 24, 0.88);
  border-bottom: 1px solid var(--line);
}

.nav {
  min-height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 26px;
}

.nav-links a {
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 0.84rem;
  text-transform: lowercase;
  transition: color 0.25s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--accent-strong);
}

.menu-toggle {
  display: none;
  width: 48px;
  height: 48px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.menu-toggle span {
  width: 18px;
  height: 2px;
  background: var(--text);
  display: block;
  transition: 0.3s ease;
}

.hero {
  position: relative;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  padding: 72px 0;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(110, 195, 201, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(110, 195, 201, 0.06) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(180deg, rgba(0,0,0,0.9), transparent 95%);
  pointer-events: none;
}

.hero-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.25fr 0.85fr;
  gap: 40px;
  align-items: center;
}

.section-tag {
  margin-bottom: 16px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.hero h1 {
  font-size: clamp(2.6rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  max-width: 12ch;
}

.hero h1 span {
  color: var(--accent-strong);
}

.hero-text,
.section-header p,
.card p,
.service-item li,
.step-card p,
.contact-text,
.contact-card p,
.contact-infos p,
.footer p,
.faq-answer p {
  color: var(--text-dim);
}

.hero-text {
  max-width: 62ch;
  margin-top: 22px;
  font-size: 1.05rem;
}

.hero-actions {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 14px;
  border: 1px solid transparent;
  font-weight: 600;
  transition: 0.25s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: #082029;
  box-shadow: var(--shadow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}

.btn-secondary {
  border-color: var(--line);
  color: var(--text);
  background: rgba(255, 255, 255, 0.02);
}

.btn-secondary:hover {
  border-color: rgba(146, 221, 225, 0.55);
  color: var(--accent-strong);
}

.btn-full {
  width: 100%;
}

.hero-points {
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.point,
.panel-card,
.card,
.service-item,
.step-card,
.contact-card,
.highlight-box,
.faq-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.point {
  padding: 18px;
}

.point strong {
  display: block;
  margin-bottom: 6px;
  font-size: 0.98rem;
}

.point span {
  color: var(--text-dim);
  font-size: 0.94rem;
}

.hero-panel {
  display: flex;
  justify-content: flex-end;
}

.panel-card {
  width: 100%;
  max-width: 420px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.panel-label {
  margin-bottom: 18px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-transform: uppercase;
}

.panel-card ul {
  display: grid;
  gap: 14px;
}

.panel-card li {
  position: relative;
  padding-left: 18px;
  color: var(--text-dim);
}

.panel-card li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.section {
  padding: 100px 0;
}

.section-dark {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0.03));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-header {
  max-width: 760px;
  margin-bottom: 42px;
}

.section-header h2 {
  font-size: clamp(1.9rem, 3vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: 14px;
}

.cards-grid,
.services-grid,
.steps-grid,
.contact-grid {
  display: grid;
  gap: 22px;
}

.cards-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card,
.service-item,
.step-card,
.contact-card,
.highlight-box {
  padding: 28px;
}

.card h3,
.service-item h3,
.step-card h3,
.contact-card h3 {
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.services-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.service-item ul {
  display: grid;
  gap: 10px;
}

.service-item li {
  position: relative;
  padding-left: 16px;
}

.service-item li::before {
  content: ">";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-family: var(--font-mono);
}

.steps-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 22px;
}

.step-card span {
  display: inline-flex;
  margin-bottom: 14px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.highlight-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight-box p {
  text-align: center;
  max-width: 820px;
  color: var(--text);
}

.faq-list {
  display: grid;
  gap: 14px;
}

.faq-item {
  overflow: hidden;
}

.faq-question {
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--text);
  padding: 22px 24px;
  text-align: left;
  cursor: pointer;
  position: relative;
  font-weight: 600;
}

.faq-question::after {
  content: "+";
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--accent);
  font-size: 1.2rem;
}

.faq-item.active .faq-question::after {
  content: "−";
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.28s ease;
}

.faq-answer p {
  padding: 0 24px 22px;
}

.contact-grid {
  grid-template-columns: 1.1fr 0.9fr;
  align-items: start;
}

.contact-card small {
  display: block;
  margin-top: 14px;
  color: var(--text-dim);
}

.contact-infos {
  display: grid;
  gap: 8px;
  margin-top: 24px;
}

.footer {
  padding: 0 0 88px;
  background: transparent;
  color: var(--text);
  margin-top: 0;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 64px 0 40px;
  border-top: 1px solid var(--line);
}

.footer-column h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: var(--text);
}

.footer-column h3::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: var(--line);
  margin-top: 14px;
}

.footer-contact-list {
  display: grid;
  gap: 14px;
  margin-top: 26px;
}

.footer-contact-list a {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.98rem;
  color: var(--text-dim);
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-contact-list a i {
  width: 16px;
  text-align: center;
  color: var(--text-dim);
}

.footer-contact-list a:hover {
  color: var(--accent-strong);
  transform: translateX(2px);
}

.footer-contact-list a:hover i {
  color: var(--accent-strong);
}

.footer-column p {
  margin-top: 26px;
  max-width: 58ch;
  line-height: 1.9;
  font-size: 1rem;
  color: var(--text-dim);
}

.footer-social-inline {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}

.footer-social-inline a {
  color: var(--text-dim);
  font-size: 1.2rem;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-social-inline a:hover {
  color: var(--accent-strong);
  transform: translateY(-1px);
}

.footer-bottom {
  padding: 18px 0 0;
  border-top: 1px solid var(--line);
}

.footer-bottom p {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-dim);
}

.footer-bottom a {
  color: var(--text);
  font-size: 1rem;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.footer-bottom a:hover {
  color: var(--accent-strong);
  opacity: 1;
}

.whatsapp-float {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 60;
  min-height: 56px;
  padding: 0 22px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #25D366;
  color: #ffffff;
  font-weight: 800;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.28),
    0 0 0 6px rgba(37, 211, 102, 0.12),
    0 0 22px rgba(37, 211, 102, 0.22);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.whatsapp-float:hover {
  background: #20ba5a;
  transform: translateY(-2px) scale(1.02);
  box-shadow:
    0 22px 46px rgba(0, 0, 0, 0.32),
    0 0 0 8px rgba(37, 211, 102, 0.16),
    0 0 28px rgba(37, 211, 102, 0.28);
}

.whatsapp-float {
  animation: whatsappPulse 2.4s infinite;
}

@keyframes whatsappPulse {
  0% {
    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.28),
      0 0 0 0 rgba(37, 211, 102, 0.18),
      0 0 22px rgba(37, 211, 102, 0.22);
  }
  70% {
    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.28),
      0 0 0 10px rgba(37, 211, 102, 0),
      0 0 26px rgba(37, 211, 102, 0.24);
  }
  100% {
    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.28),
      0 0 0 0 rgba(37, 211, 102, 0),
      0 0 22px rgba(37, 211, 102, 0.22);
  }
}

.whatsapp-float span {
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .hero-grid,
  .contact-grid,
  .cards-grid,
  .services-grid,
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    max-width: 14ch;
  }

  .hero-panel {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  :root {
    --header-height: 78px;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    position: absolute;
    top: calc(100% + 8px);
    right: 20px;
    left: 20px;
    padding: 18px;
    border-radius: 18px;
    border: 1px solid var(--line);
    background: rgba(9, 18, 27, 0.98);
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .hero {
    padding: 42px 0 64px;
  }

  .hero-points {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 78px 0;
  }

  .section-header {
    margin-bottom: 30px;
  }

  .faq-question {
    padding-right: 54px;
  }

  .footer-content {
    flex-direction: column;
  }

  .whatsapp-float {
    right: 16px;
    left: 16px;
    bottom: 16px;
  }
@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 48px 0 28px;
  }

  .footer-column p {
    max-width: 100%;
  }

  .footer-bottom p {
    align-items: flex-start;
  }
}
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function updateHeaderOnScroll() {
  if (window.scrollY > 12) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

updateHeaderOnScroll();
window.addEventListener("scroll", updateHeaderOnScroll);

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}
