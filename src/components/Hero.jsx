import {
  ArrowRight,
  BrainCircuit,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';
import { heroHighlights, profile, socialLinks } from '../data/portfolio';
import Reveal from './Reveal';

const SOCIAL_ICONS = { github: Github, linkedin: Linkedin, email: Mail };
const HIGHLIGHT_ICONS = { layers: Layers3, brain: BrainCircuit };

const nameParts = profile.name.split(' ');
const nameLead = nameParts.slice(0, 3).join(' ');
const nameAccent = nameParts.slice(3).join(' ');

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="container-page">
        <div className="hero__grid">
          <div className="hero__copy">
            <Reveal>
              <span className="availability">
                <span className="live-dot" aria-hidden="true" />
                {profile.availabilityBadge}
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="hero__name" id="hero-heading">
                {nameLead} <span>{nameAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={110}>
              <p className="hero__title">
                <span>{profile.role}</span>
                <span className="sep" aria-hidden="true" />
                <span className="muted">{profile.subtitle}</span>
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="hero__summary">{profile.summary}</p>
            </Reveal>

            <Reveal delay={210} className="hero__highlights">
              {heroHighlights.map((item) => {
                const Icon = HIGHLIGHT_ICONS[item.icon] || Sparkles;
                return (
                  <div className="hero-highlight" key={item.id}>
                    <span className="hero-highlight__icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="hero-highlight__title">{item.title}</span>
                      <span className="hero-highlight__text">{item.text}</span>
                    </span>
                  </div>
                );
              })}
            </Reveal>

            <Reveal delay={260} className="hero__actions">
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className="btn btn-primary"
              >
                <Download size={17} aria-hidden="true" />
                Download Resume
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </Reveal>

            <Reveal delay={300} className="hero__socials">
              <span className="hero__socials-label">Find me on</span>
              {socialLinks.map((link) => {
                const Icon = SOCIAL_ICONS[link.id];
                const isEmail = link.id === 'email';
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target={isEmail ? undefined : '_blank'}
                    rel={isEmail ? undefined : 'noreferrer noopener'}
                    className="social-btn"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </Reveal>
          </div>

          <Reveal delay={180} className="hero__portrait">
            <div className="hero-photo">
              <span className="hero-photo__glow" aria-hidden="true" />
              <span className="hero-photo__ring" aria-hidden="true" />
              <span className="hero-photo__arc" aria-hidden="true" />
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width="400"
                height="512"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
              <div className="floating-badge floating-badge--degree">
                <span className="floating-badge__icon">
                  <GraduationCap size={18} aria-hidden="true" />
                </span>
                <span>
                  <span className="floating-badge__label">B.Tech CSE</span>
                  <span className="floating-badge__value">Class of 2028</span>
                </span>
              </div>
              <div className="floating-badge floating-badge--code">
                <span className="floating-badge__icon">
                  <Layers3 size={17} aria-hidden="true" />
                </span>
                <span>
                  <span className="floating-badge__label">Java · Spring Boot</span>
                  <span className="floating-badge__value">Frontend + Backend</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
