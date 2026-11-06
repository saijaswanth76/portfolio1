import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';

const scrollToTop = () => {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-page footer__inner">
        <div className="footer__top">
          <div>
            <a href="#home" className="footer__brand">
              <img
                src={profile.photo}
                alt=""
                width="46"
                height="46"
                loading="lazy"
              />
              <span>
                <span className="footer__name">{profile.shortName}</span>
                <span className="footer__role">
                  Full Stack Developer · CSE Student
                </span>
              </span>
            </a>

            <p className="footer__tagline">
              Building responsive web applications, scalable backend systems and
              practical software solutions.
            </p>

            <div className="footer__socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="footer__social"
                aria-label="GitHub profile"
              >
                <Github size={17} aria-hidden="true" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="footer__social"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={17} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="footer__social"
                aria-label="Send an email"
              >
                <Mail size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer__col-title">Quick links</h3>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a className="footer__link" href={`#${link.id}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__col-title">Get in touch</h3>
            <div className="footer__contact">
              <a href={`mailto:${profile.email}`}>
                <Mail size={13} aria-hidden="true" />
                {profile.email}
              </a>
              <a href={`tel:${profile.phoneHref}`}>
                <Phone size={13} aria-hidden="true" />
                {profile.phone}
              </a>
              <span className="inline-flex items-center gap-2 text-[12.5px] text-slate-400">
                <MapPin size={13} aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {profile.name}. All rights reserved.
          </p>

          <span className="footer__built">
            Built with React, Tailwind CSS & Lucide
          </span>

          <button type="button" className="back-to-top" onClick={scrollToTop}>
            Back to Top
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
