import { useState } from 'react';
import emailjsSdk from '@emailjs/browser';
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Info,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';
import {
  contactContent,
  emailjs as emailjsConfig,
  emailjsConfigured,
  profile,
} from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STATUS_ICONS = {
  success: CheckCircle2,
  error: AlertTriangle,
  info: Info,
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', text: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status.type !== 'idle') setStatus({ type: 'idle', text: '' });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!EMAIL_RE.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) next.message = 'Please write a short message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending || !validate()) return;

    // EmailJS is not configured: hand the message to the visitor's mail app.
    // No fake success state is ever shown.
    if (!emailjsConfigured) {
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject.trim() || 'Portfolio enquiry'
      )}&body=${encodeURIComponent(body)}`;

      setStatus({
        type: 'info',
        text: `Email delivery isn’t connected yet, so your mail app was opened with the message ready to send to ${profile.email}. You can also copy the email address above.`,
      });
      window.location.href = mailto;
      return;
    }

    setSending(true);
    setStatus({ type: 'idle', text: '' });

    try {
      await emailjsSdk.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          user_name: form.name.trim(),
          user_email: form.email.trim(),
          subject: form.subject.trim() || 'Portfolio enquiry',
          message: form.message.trim(),
          to_email: profile.email,
        },
        { publicKey: emailjsConfig.publicKey }
      );

      setStatus({
        type: 'success',
        text: 'Message sent. Thanks for reaching out — I’ll reply as soon as I can.',
      });
      setForm(EMPTY_FORM);
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setStatus({
        type: 'error',
        text: `The message could not be sent. Please email me directly at ${profile.email}.`,
      });
    } finally {
      setSending(false);
    }
  };

  const StatusIcon = STATUS_ICONS[status.type];

  return (
    <section
      className="section section--muted"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Get in Touch"
            text={contactContent.description}
          />
        </Reveal>

        <div className="contact-grid">
          <Reveal className="flex flex-col gap-3">
            <a className="card contact-card" href={`mailto:${profile.email}`}>
              <span className="contact-card__icon">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="contact-card__label">Email</span>
                <span className="contact-card__value">{profile.email}</span>
              </span>
              <ArrowUpRight
                size={15}
                className="contact-card__arrow"
                aria-hidden="true"
              />
            </a>

            <a className="card contact-card" href={`tel:${profile.phoneHref}`}>
              <span className="contact-card__icon">
                <Phone size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="contact-card__label">Phone</span>
                <span className="contact-card__value">{profile.phone}</span>
              </span>
              <ArrowUpRight
                size={15}
                className="contact-card__arrow"
                aria-hidden="true"
              />
            </a>

            <a
              className="card contact-card"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="contact-card__icon">
                <Linkedin size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="contact-card__label">LinkedIn</span>
                <span className="contact-card__value">Connect professionally</span>
              </span>
              <ArrowUpRight
                size={15}
                className="contact-card__arrow"
                aria-hidden="true"
              />
            </a>

            <a
              className="card contact-card"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="contact-card__icon">
                <Github size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="contact-card__label">GitHub</span>
                <span className="contact-card__value">@saijaswanth76</span>
              </span>
              <ArrowUpRight
                size={15}
                className="contact-card__arrow"
                aria-hidden="true"
              />
            </a>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 flex items-start gap-3">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-white text-blue-600 border border-blue-100 shrink-0">
                <Sparkles size={16} aria-hidden="true" />
              </span>
              <div>
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-blue-700">
                  <span className="live-dot" aria-hidden="true" />
                  Available
                </span>
                <p className="m-0 mt-1 text-[12px] leading-relaxed text-slate-600">
                  {profile.availability} — internships, placements and
                  freelance work.
                </p>
                <span className="inline-flex items-center gap-1 mt-1.5 text-[11px] text-slate-500">
                  <MapPin size={11} aria-hidden="true" />
                  {profile.location}
                </span>
              </div>
            </div>

            <a href={`mailto:${profile.email}`} className="btn btn-primary w-full mt-1">
              <Mail size={16} aria-hidden="true" />
              Email Me
            </a>
          </Reveal>

          <Reveal delay={100}>
            <form className="card contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid form-grid--two">
                <div>
                  <label className="form-label" htmlFor="contact-name">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`form-input${errors.name ? ' is-error' : ''}`}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name ? (
                    <p className="form-error" id="contact-name-error">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="form-label" htmlFor="contact-email">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`form-input${errors.email ? ' is-error' : ''}`}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email ? (
                    <p className="form-error" id="contact-email-error">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-3.5">
                <label className="form-label" htmlFor="contact-subject">
                  Subject <span className="optional">(optional)</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder={contactContent.subjectPlaceholder}
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-3.5">
                <label className="form-label" htmlFor="contact-message">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  className={`form-input resize-y${errors.message ? ' is-error' : ''}`}
                  placeholder={contactContent.messagePlaceholder}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'contact-message-error' : undefined
                  }
                />
                {errors.message ? (
                  <p className="form-error" id="contact-message-error">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full mt-4"
                disabled={sending}
              >
                {sending ? (
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                ) : (
                  <Send size={16} aria-hidden="true" />
                )}
                {sending ? 'Sending…' : 'Send Message'}
              </button>

              {status.text ? (
                <div
                  className={`form-status form-status--${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  <StatusIcon size={14} aria-hidden="true" />
                  <span>{status.text}</span>
                </div>
              ) : null}

              {!emailjsConfigured ? (
                <p className="form-note">
                  <Info size={12} aria-hidden="true" />
                  Email delivery is not connected yet, so submitting opens your
                  own email app with the message pre-filled — it won’t claim to
                  have sent anything.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
