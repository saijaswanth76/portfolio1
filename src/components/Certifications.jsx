import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Award,
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { certifications } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TechIcon from './TechIcon';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Certifications() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    updateArrows();
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);

    return () => {
      track.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.cert-card');
    const step = card
      ? card.getBoundingClientRect().width + 18
      : track.clientWidth * 0.8;

    track.scrollBy({
      left: direction * step,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      className="section"
      id="certifications"
      aria-labelledby="certifications-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="certifications-heading"
            eyebrow="Certifications"
            title="Certificates & Learning"
            text="Courses that back up my hands-on work — with the actual documents, dates and issuers where available."
          />
        </Reveal>

        <Reveal>
          <div className="cert-shell">
            <div
              className="cert-track"
              ref={trackRef}
              tabIndex={0}
              role="region"
              aria-label="Certificate carousel — scroll horizontally"
            >
              {certifications.map((cert) => {
                const isPdf = Boolean(cert.file && cert.file.toLowerCase().endsWith('.pdf'));
                const fileLabel = isPdf ? 'Open PDF' : 'Open Certificate';

                return (
                <article className="card card--interactive cert-card" key={cert.id}>
                  <div className="cert-preview">
                    {cert.preview ? (
                      <img
                        src={cert.preview}
                        alt={`${cert.title} certificate${cert.issuer ? ` from ${cert.issuer}` : ''}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="cert-preview__empty">
                        <span className="cert-preview__empty-icon">
                          <TechIcon name="CSS" size={26} />
                        </span>
                        <p className="cert-preview__empty-text">
                          Certificate file has not been uploaded yet.
                        </p>
                      </div>
                    )}
                    <span className="cert-preview__badge">
                      {cert.file ? 'Certificate' : 'File pending'}
                    </span>
                  </div>

                  <div className="cert-body">
                    <div>
                      <h3 className="cert-title">{cert.title}</h3>
                      <div className="cert-meta">
                        <Building2 size={11} aria-hidden="true" />
                        <span>{cert.issuer || 'Issuer not listed'}</span>
                        {cert.issueDate ? (
                          <>
                            <span className="cert-meta__dot" aria-hidden="true" />
                            <CalendarDays size={11} aria-hidden="true" />
                            <span>{cert.issueDate}</span>
                          </>
                        ) : null}
                      </div>
                    </div>

                    <div className="cert-topics">
                      {cert.topics.map((topic) => (
                        <span className="cert-topic" key={topic}>
                          {topic}
                        </span>
                      ))}
                    </div>

                    <p className="text-[10px] leading-relaxed text-slate-400 m-0">
                      {cert.credentialNote}
                    </p>

                    <div className="cert-actions">
                      {cert.file ? (
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn btn-secondary btn-sm"
                        >
                          <FileText size={13} aria-hidden="true" />
                          {fileLabel}
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          disabled
                          title="Certificate file has not been uploaded yet"
                        >
                          <FileText size={13} aria-hidden="true" />
                          {fileLabel}
                        </button>
                      )}

                      {cert.verifyUrl ? (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn btn-soft btn-sm"
                          title="Open the issuer's official verification page"
                        >
                          <ShieldCheck size={13} aria-hidden="true" />
                          Verify Credential
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-400">
                <Award size={13} aria-hidden="true" />
                Swipe to explore all {certifications.length} certificates
              </span>

              <div className="carousel-arrows">
                <button
                  type="button"
                  className="carousel-btn"
                  onClick={() => scrollByCard(-1)}
                  disabled={!canPrev}
                  aria-label="Previous certificates"
                >
                  <ChevronLeft size={19} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="carousel-btn"
                  onClick={() => scrollByCard(1)}
                  disabled={!canNext}
                  aria-label="Next certificates"
                >
                  <ChevronRight size={19} aria-hidden="true" />
                </button>
              </div>
            </div>

            <p className="cert-note">
              Documents open in a new tab. Verification links are shown only
              where the issuer provides one.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
