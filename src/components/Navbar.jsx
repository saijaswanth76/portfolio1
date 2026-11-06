import { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { navLinks, profile, socialLinks } from '../data/portfolio';

const SOCIAL_ICONS = { github: Github, linkedin: Linkedin, email: Mail };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for the section currently under the header.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const probe = window.scrollY + 130;
      let current = navLinks[0].id;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= probe) current = link.id;
      });

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = navLinks[navLinks.length - 1].id;

      setActive((previous) => (previous === current ? previous : current));
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Lock page scroll behind the mobile panel.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container-page">
        <nav className="nav-shell" aria-label="Primary">
          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
            aria-label={`${profile.shortName} — back to top`}
          >
            <img
              src={profile.photo}
              alt=""
              width="38"
              height="38"
              className="brand__photo"
            />
            <span>
              <span className="brand__name">{profile.shortName}</span>
              <span className="brand__role">Full Stack Developer</span>
            </span>
          </a>

          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-item${active === link.id ? ' is-active' : ''}`}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="btn btn-primary btn-sm"
            >
              <Download size={15} aria-hidden="true" />
              Resume
            </a>
          </div>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </nav>
      </div>

      {open ? (
        <div className="mobile-panel" id="mobile-menu">
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`mobile-link${active === link.id ? ' is-active' : ''}`}
                    aria-current={active === link.id ? 'true' : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                    {active === link.id ? (
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                      />
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-panel__divider" />

          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="btn btn-primary w-full"
            onClick={closeMenu}
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>

          <div className="flex items-center gap-2.5 mt-4">
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
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              );
            })}
            <span className="text-[11px] text-slate-400 ml-1">
              {profile.email}
            </span>
          </div>
        </div>
      ) : null}
    </header>
  );
}
